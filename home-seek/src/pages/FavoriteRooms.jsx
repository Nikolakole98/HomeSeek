import { Link } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import ListingCard from "../components/ListingCard";
import LoadStatus from "../components/LoadStatus";
import MainBar from "../components/MainBar";
import { useAuth } from "../context/AuthContext";
import { useListings } from "../hooks/useListings";
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

function FavoritesContent() {
  const { user, loading: userLoading } = useAuth();
  const { listings, loading, error } = useListings();

  if (userLoading || loading || error) {
    return <LoadStatus error={error} />;
  }
  if (!user) {
    return (
      <Message
        title="Prijavite se da biste videli sačuvane oglase"
        text="Sačuvani oglasi su vezani za vaš nalog."
        linkTo="/login?next=/favoriteRooms"
        linkLabel="Prijavi se"
      />
    );
  }

  const favorites = listings.filter((listing) => user.favorites.includes(listing.id));
  if (favorites.length === 0) {
    return (
      <Message
        title="Još nemate sačuvanih oglasa"
        text="Otvorite oglas koji vam se dopada i izaberite Sačuvaj oglas."
        linkTo="/searchRooms"
        linkLabel="Pretraži oglase"
      />
    );
  }
  return (
    <ul className="home-listings">
      {favorites.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </ul>
  );
}

export default function FavoriteRooms() {
  return (
    <>
      <MainBar />
      <main className="home">
        <div className="home-container favorites-page">
          <h1>Sačuvani oglasi</h1>
          <FavoritesContent />
        </div>
      </main>
      <FrontEnd />
    </>
  );
}
