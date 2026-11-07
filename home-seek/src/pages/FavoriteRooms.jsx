import { Link } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import ListingCard from "../components/ListingCard";
import MainBar from "../components/MainBar";
import { useAuth } from "../context/AuthContext";
import { getListings } from "../data/listingsStore";
import "./Home.css";
import "./Auth.css";

function Message({ title, text, linkTo, linkLabel }) {
  return (
    <div className="favorites-message">
      <h2>{title}</h2>
      <p>{text}</p>
      <Link className="home-btn" to={linkTo}>{linkLabel}</Link>
    </div>
  );
}

export default function FavoriteRooms() {
  const { user } = useAuth();
  const favorites = user ? getListings().filter((listing) => user.favorites.includes(listing.id)) : [];

  return (
    <>
      <MainBar />
      <main className="home">
        <div className="home-container favorites-page">
          <h1>Sačuvani oglasi</h1>

          {!user && (
            <Message
              title="Prijavite se da biste videli sačuvane oglase"
              text="Sačuvani oglasi su vezani za vaš nalog."
              linkTo="/login?next=/favoriteRooms"
              linkLabel="Prijavi se"
            />
          )}
          {user && favorites.length === 0 && (
            <Message
              title="Još nemate sačuvanih oglasa"
              text="Otvorite oglas koji vam se dopada i izaberite Sačuvaj oglas."
              linkTo="/searchRooms"
              linkLabel="Pretraži oglase"
            />
          )}
          {favorites.length > 0 && (
            <ul className="home-listings">
              {favorites.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </ul>
          )}
        </div>
      </main>
      <FrontEnd />
    </>
  );
}
