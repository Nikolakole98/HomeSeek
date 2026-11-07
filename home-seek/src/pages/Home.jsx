import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { BsHouseAddFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import FrontEnd from "../components/Frontend";
import HeroSearch from "../components/HeroSearch";
import ListingCard from "../components/ListingCard";
import LoadStatus from "../components/LoadStatus";
import MainBar from "../components/MainBar";
import { CONTACT } from "../data/homeData";
import { useListings } from "../hooks/useListings";
import "./Home.css";

const FEATURES = [
  {
    icon: <FaSearch />,
    title: "Pronađite nekretninu po želji",
    text: "Pretražite oglase po lokaciji, ceni i broju soba.",
  },
  {
    icon: <BsHouseAddFill />,
    title: "Dodajte svoj oglas",
    text: "Postavite nekretninu za prodaju ili izdavanje.",
  },
  {
    icon: <MdFavorite />,
    title: "Sačuvajte omiljene oglase",
    text: "Vratite se na oglase koji vam odgovaraju kad god želite.",
  },
];

export default function Home() {
  const { listings, loading, error } = useListings();

  return (
    <>
      <MainBar />
      <main className="home">
        <section className="home-hero">
          <div className="home-container">
            <h1>Pronađite dom u mestu koje volite</h1>
            <p>Stanovi i kuće na prodaju i za izdavanje, sve na jednom mestu.</p>
            <HeroSearch />
          </div>
        </section>

        <section className="home-section">
          <div className="home-container">
            <h2>Mogućnosti sajta</h2>
            <ul className="home-features">
              {FEATURES.map((feature) => (
                <li key={feature.title}>
                  <span className="home-feature-icon" aria-hidden="true">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="home-section home-section-alt">
          <div className="home-container">
            <div className="home-section-head">
              <h2>Popularni oglasi</h2>
              <Link className="home-link" to="/searchRooms">Svi oglasi</Link>
            </div>
            {loading || error ? (
              <LoadStatus error={error} />
            ) : (
              <ul className="home-listings">
                {listings.slice(0, 6).map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="home-section" id="kontakt">
          <div className="home-container home-contact">
            <div>
              <h2>Kontaktirajte nas</h2>
              <p className="home-contact-intro">
                Prodajete nekretninu ili imate pitanje o oglasu? Pišite nam.
              </p>
              <ul className="home-contact-list">
                <li><FaPhoneAlt aria-hidden="true" /> {CONTACT.phone}</li>
                <li><FaEnvelope aria-hidden="true" /> {CONTACT.email}</li>
                <li><FaMapMarkerAlt aria-hidden="true" /> {CONTACT.address}</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <FrontEnd />
    </>
  );
}
