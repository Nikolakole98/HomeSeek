import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const DEAL_TYPES = ["Kupovina", "Iznajmljivanje"];

export default function HeroSearch() {
  const navigate = useNavigate();
  const [dealType, setDealType] = useState(DEAL_TYPES[0]);
  const [location, setLocation] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams({ tip: dealType, lokacija: location.trim() });
    navigate(`/searchRooms?${params}`);
  }

  return (
    <form className="home-search" onSubmit={handleSubmit}>
      <div className="home-search-deal" role="radiogroup" aria-label="Vrsta oglasa">
        {DEAL_TYPES.map((type) => (
          <label key={type} className={type === dealType ? "selected" : undefined}>
            <input
              type="radio"
              name="dealType"
              value={type}
              checked={type === dealType}
              onChange={() => setDealType(type)}
            />
            {type}
          </label>
        ))}
      </div>
      <input
        className="home-search-location"
        type="text"
        placeholder="Grad ili deo grada"
        aria-label="Lokacija"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button className="home-btn" type="submit">
        <FaSearch /> Pretraži
      </button>
    </form>
  );
}
