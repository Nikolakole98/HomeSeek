import { useSearchParams } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import ListingCard from "../components/ListingCard";
import MainBar from "../components/MainBar";
import { getListings } from "../data/listingsStore";
import "./Home.css";
import "./SearchRooms.css";

const DEAL_TYPES = ["Kupovina", "Iznajmljivanje"];

const SORTERS = {
  "cena-rastuce": (a, b) => a.price - b.price,
  "cena-opadajuce": (a, b) => b.price - a.price,
  povrsina: (a, b) => b.area - a.area,
};

// Omogucava da "Nis" pronadje "Niš".
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/đ/g, "dj")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function findListings({ deal, location, type, minPrice, maxPrice, rooms, sort }) {
  const results = getListings().filter((listing) => {
    if (listing.deal !== deal) return false;
    if (location && !normalize(listing.location).includes(normalize(location))) return false;
    if (type && listing.type !== type) return false;
    if (minPrice && listing.price < Number(minPrice)) return false;
    if (maxPrice && listing.price > Number(maxPrice)) return false;
    if (rooms === "5" && listing.rooms < 5) return false;
    if (rooms && rooms !== "5" && listing.rooms !== Number(rooms)) return false;
    return true;
  });
  return SORTERS[sort] ? results.sort(SORTERS[sort]) : results;
}

export default function SearchRooms() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    deal: searchParams.get("tip") ?? DEAL_TYPES[0],
    location: searchParams.get("lokacija") ?? "",
    type: searchParams.get("vrsta") ?? "",
    minPrice: searchParams.get("cenaOd") ?? "",
    maxPrice: searchParams.get("cenaDo") ?? "",
    rooms: searchParams.get("sobe") ?? "",
    sort: searchParams.get("sortiranje") ?? "",
  };
  const results = findListings(filters);

  function updateFilter(name, value) {
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous);
        if (value) {
          next.set(name, value);
        } else {
          next.delete(name);
        }
        return next;
      },
      { replace: true }
    );
  }

  return (
    <>
      <MainBar />
      <main className="home">
        <div className="home-container search-page">
          <h1>Pretraga oglasa</h1>

          <div className="search-layout">
            <aside className="search-filters" aria-label="Filteri">
              <div className="home-search-deal" role="radiogroup" aria-label="Vrsta oglasa">
                {DEAL_TYPES.map((deal) => (
                  <label key={deal} className={deal === filters.deal ? "selected" : undefined}>
                    <input
                      type="radio"
                      name="deal"
                      value={deal}
                      checked={deal === filters.deal}
                      onChange={() => updateFilter("tip", deal)}
                    />
                    {deal}
                  </label>
                ))}
              </div>

              <label>
                Lokacija
                <input
                  type="text"
                  placeholder="Grad ili deo grada"
                  value={filters.location}
                  onChange={(event) => updateFilter("lokacija", event.target.value)}
                />
              </label>

              <label>
                Vrsta nekretnine
                <select
                  value={filters.type}
                  onChange={(event) => updateFilter("vrsta", event.target.value)}
                >
                  <option value="">Sve</option>
                  <option value="Stan">Stan</option>
                  <option value="Kuća">Kuća</option>
                </select>
              </label>

              <div className="search-price">
                <label>
                  Cena od (€)
                  <input
                    type="number"
                    min="0"
                    value={filters.minPrice}
                    onChange={(event) => updateFilter("cenaOd", event.target.value)}
                  />
                </label>
                <label>
                  Cena do (€)
                  <input
                    type="number"
                    min="0"
                    value={filters.maxPrice}
                    onChange={(event) => updateFilter("cenaDo", event.target.value)}
                  />
                </label>
              </div>

              <label>
                Broj soba
                <select
                  value={filters.rooms}
                  onChange={(event) => updateFilter("sobe", event.target.value)}
                >
                  <option value="">Svi</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5 i više</option>
                </select>
              </label>

              <button className="search-reset" type="button" onClick={() => setSearchParams({})}>
                Poništi filtere
              </button>
            </aside>

            <section className="search-results" aria-label="Rezultati pretrage">
              <div className="search-results-head">
                <p role="status">Pronađeno oglasa: {results.length}</p>
                <label>
                  Sortiraj
                  <select
                    value={filters.sort}
                    onChange={(event) => updateFilter("sortiranje", event.target.value)}
                  >
                    <option value="">Preporučeno</option>
                    <option value="cena-rastuce">Cena: najniža prvo</option>
                    <option value="cena-opadajuce">Cena: najviša prvo</option>
                    <option value="povrsina">Površina: najveća prvo</option>
                  </select>
                </label>
              </div>

              {results.length > 0 ? (
                <ul className="home-listings">
                  {results.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </ul>
              ) : (
                <div className="search-empty">
                  <h2>Nema oglasa za izabrane filtere</h2>
                  <p>Proširite opseg cene ili promenite lokaciju.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <FrontEnd />
    </>
  );
}
