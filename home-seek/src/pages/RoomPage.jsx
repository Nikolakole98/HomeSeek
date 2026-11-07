import { useState } from "react";
import { Link, ScrollRestoration, useLocation, useNavigate, useParams } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt, FaPhoneAlt, FaRegHeart } from "react-icons/fa";
import { MdOutlineBed, MdOutlineHome, MdOutlineSell, MdOutlineSquareFoot } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import FrontEnd from "../components/Frontend";
import ListingCard from "../components/ListingCard";
import ListingPhoto from "../components/ListingPhoto";
import MainBar from "../components/MainBar";
import { useAuth } from "../context/AuthContext";
import { CONTACT } from "../data/homeData";
import { getListings } from "../data/listingsStore";
import { formatEuro, formatListingPrice } from "../utils/formatPrice";
import "./Home.css";
import "./RoomPage.css";

const dateFormat = new Intl.DateTimeFormat("sr-Latn-RS", { dateStyle: "long" });

const cityOf = (listing) => listing.location.split(",")[0];

function SaveButton({ listingId }) {
  const { user, toggleFavorite } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const saved = user?.favorites.includes(listingId) ?? false;

  function toggleSaved() {
    if (user) {
      toggleFavorite(listingId);
    } else {
      navigate(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }

  return (
    <button className="room-save" type="button" aria-pressed={saved} onClick={toggleSaved}>
      {saved ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
      {saved ? "Oglas je sačuvan" : "Sačuvaj oglas"}
    </button>
  );
}

function Gallery({ title, photos }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="room-gallery">
      <div className="room-gallery-main">
        <ListingPhoto photo={photos[activeIndex]} alt={title} />
      </div>
      <div className="room-gallery-thumbs">
        {photos.map((photo, index) => (
          <button
            key={index}
            type="button"
            className={index === activeIndex ? "selected" : undefined}
            aria-label={`Prikaži sliku ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            <ListingPhoto photo={photo} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function RoomPage() {
  const { id } = useParams();
  const listings = getListings();
  const listing = listings.find((item) => String(item.id) === id);

  if (!listing) {
    return (
      <>
        <MainBar />
        <main className="home">
          <div className="home-container room-missing">
            <h1>Oglas nije pronađen</h1>
            <p>Oglas je možda uklonjen ili je link neispravan.</p>
            <Link className="home-btn" to="/searchRooms">Pretraži oglase</Link>
          </div>
        </main>
        <FrontEnd />
      </>
    );
  }

  const { deal, title, location, price, area, rooms, type, updatedAt, description, details, photos } = listing;
  const isSameCity = (other) => cityOf(other) === cityOf(listing);
  const similarListings = listings
    .filter((other) => other.id !== listing.id && other.deal === deal)
    .sort((a, b) => isSameCity(b) - isSameCity(a))
    .slice(0, 3);
  const dealLink = `/searchRooms?${new URLSearchParams({ tip: deal })}`;
  const typeLink = `/searchRooms?${new URLSearchParams({ tip: deal, vrsta: type })}`;

  return (
    <>
      <ScrollRestoration />
      <MainBar />
      <main className="home">
        <div className="home-container room-page">
          <nav className="room-breadcrumb" aria-label="Putanja">
            <Link to="/">Početna</Link>
            <span aria-hidden="true">/</span>
            <Link to={dealLink}>{deal}</Link>
            <span aria-hidden="true">/</span>
            <Link to={typeLink}>{type}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{cityOf(listing)}</span>
          </nav>

          <header className="room-header">
            <h1>{title}</h1>
            <p><FaMapMarkerAlt aria-hidden="true" /> {location}</p>
            <p className="room-header-price">{formatListingPrice(listing)}</p>
          </header>

          <div className="room-layout">
            <div className="room-main">
              <Gallery key={listing.id} title={title} photos={photos} />

              <ul className="room-facts">
                <li><MdOutlineSquareFoot aria-hidden="true" /><span>Površina</span><strong>{area} m²</strong></li>
                <li><MdOutlineBed aria-hidden="true" /><span>Broj soba</span><strong>{rooms}</strong></li>
                <li><MdOutlineHome aria-hidden="true" /><span>Vrsta</span><strong>{type}</strong></li>
                <li><MdOutlineSell aria-hidden="true" /><span>Ponuda</span><strong>{deal}</strong></li>
              </ul>

              <section className="room-block">
                <h2>Opis</h2>
                <p>{description}</p>
              </section>

              <section className="room-block">
                <h2>Dodatne informacije</h2>
                <dl className="room-details">
                  {Object.entries(details).map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>

            <aside className="room-aside" aria-label="Cena i kontakt">
              <p className="room-price">{formatListingPrice(listing)}</p>
              {deal === "Kupovina" && (
                <p className="room-price-area">{formatEuro(Math.round(price / area))} / m²</p>
              )}
              <SaveButton key={listing.id} listingId={listing.id} />

              <h2>Kontaktiraj vlasnika</h2>
              {listing.ownerName && <p className="room-owner">{listing.ownerName}</p>}
              <p className="room-phone">
                <FaPhoneAlt aria-hidden="true" /> {listing.ownerPhone ?? CONTACT.phone}
              </p>
              <ContactForm key={listing.id} listingTitle={title} recipient={listing.ownerEmail} />

              <p className="room-updated">
                Poslednje ažuriranje: {dateFormat.format(new Date(updatedAt))}
              </p>
            </aside>
          </div>
        </div>

        <section className="home-section home-section-alt">
          <div className="home-container">
            <h2>Slični oglasi</h2>
            <ul className="home-listings">
              {similarListings.map((other) => (
                <ListingCard key={other.id} listing={other} />
              ))}
            </ul>
          </div>
        </section>
      </main>
      <FrontEnd />
    </>
  );
}
