import { useState } from "react";
import { fetchDrivingRoute, formatDistance, formatDuration, straightLineKm } from "../utils/distance";
import { findPlace } from "../utils/geocode";

export default function DistanceFromAddress({ coordinates, city }) {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [searching, setSearching] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const input = address.trim();
    if (!input) return;

    setError("");
    setResult(null);
    setSearching(true);
    try {
      const place = await findPlace(input, city);
      if (place) {
        const route = await fetchDrivingRoute(place, coordinates);
        setResult({ label: place.label, straightKm: straightLineKm(place, coordinates), route });
      } else {
        setError("Adresa nije pronađena. Proverite naziv ili dodajte grad, npr. Bulevar Nemanjića 10, Niš.");
      }
    } catch {
      setError("Pretraga adrese trenutno nije dostupna. Pokušajte ponovo.");
    }
    setSearching(false);
  }

  return (
    <div className="room-distance">
      <h3>Udaljenost od vaše adrese</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Vaša adresa"
          placeholder="Ulica i broj, grad"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <button className="home-btn" type="submit" disabled={searching}>
          {searching ? "Računanje..." : "Izračunaj"}
        </button>
      </form>

      <div aria-live="polite">
        {error && <p className="room-distance-error">{error}</p>}
        {result && (
          <>
            <p className="room-distance-from">Od: {result.label}</p>
            <dl className="room-distance-result">
              <div>
                <dt>Vazdušnom linijom</dt>
                <dd>{formatDistance(result.straightKm)}</dd>
              </div>
              {result.route && (
                <div>
                  <dt>Kolima</dt>
                  <dd>{formatDistance(result.route.km)}, oko {formatDuration(result.route.minutes)}</dd>
                </div>
              )}
            </dl>
          </>
        )}
      </div>
    </div>
  );
}
