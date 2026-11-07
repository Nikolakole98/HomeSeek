import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineBed, MdOutlineSquareFoot } from "react-icons/md";
import ListingPhoto from "./ListingPhoto";
import { formatListingPrice } from "../utils/formatPrice";

export default function ListingCard({ listing }) {
  const { id, title, location, area, rooms, type, photos } = listing;

  return (
    <li>
      <Link className="home-card" to={`/room/${id}`}>
        <div className="home-card-image">
          <ListingPhoto photo={photos[0]} alt={title} loading="lazy" />
          <span className="home-card-type">{type}</span>
        </div>
        <div className="home-card-body">
          <p className="home-card-price">{formatListingPrice(listing)}</p>
          <h3>{title}</h3>
          <p className="home-card-location"><FaMapMarkerAlt aria-hidden="true" /> {location}</p>
          <div className="home-card-meta">
            <span><MdOutlineSquareFoot aria-hidden="true" /> {area} m²</span>
            <span><MdOutlineBed aria-hidden="true" /> {rooms} {rooms >= 2 && rooms < 5 ? "sobe" : "soba"}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
