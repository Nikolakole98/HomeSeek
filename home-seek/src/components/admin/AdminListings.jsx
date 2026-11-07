import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteListing, updateListing } from "../../data/listingsStore";
import { formatListingPrice } from "../../utils/formatPrice";
import ListingEditDialog from "./ListingEditDialog";

export default function AdminListings({ listings, onChange, onError }) {
  const [filter, setFilter] = useState("");
  const [editedListing, setEditedListing] = useState(null);

  const query = filter.trim().toLowerCase();
  const visibleListings = listings.filter(({ title, location }) =>
    `${title} ${location}`.toLowerCase().includes(query)
  );

  async function handleDelete(listing) {
    if (!window.confirm(`Obrisati oglas „${listing.title}“?`)) return;
    try {
      await deleteListing(listing);
      await onChange();
    } catch {
      onError("Oglas nije obrisan. Pokušajte ponovo.");
    }
  }

  async function handleSave(changes) {
    try {
      await updateListing(editedListing.id, changes);
      setEditedListing(null);
      await onChange();
    } catch {
      setEditedListing(null);
      onError("Izmene nisu sačuvane. Pokušajte ponovo.");
    }
  }

  return (
    <>
      <div className="admin-toolbar">
        <input
          type="search"
          aria-label="Pretraga oglasa"
          placeholder="Pretraga po naslovu ili lokaciji"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Oglas</th>
              <th scope="col">Lokacija</th>
              <th scope="col">Ponuda</th>
              <th scope="col">Cena</th>
              <th scope="col">Vlasnik</th>
              <th scope="col"><span className="admin-sr-only">Akcije</span></th>
            </tr>
          </thead>
          <tbody>
            {visibleListings.map((listing) => (
              <tr key={listing.id}>
                <td><Link className="home-link" to={`/room/${listing.id}`}>{listing.title}</Link></td>
                <td>{listing.location}</td>
                <td>{listing.deal}</td>
                <td>{formatListingPrice(listing)}</td>
                <td>{listing.ownerName ?? "Demo oglas"}</td>
                <td className="admin-row-actions">
                  <button className="admin-action" type="button" onClick={() => setEditedListing(listing)}>Izmeni</button>
                  <button className="admin-action danger" type="button" onClick={() => handleDelete(listing)}>Obriši</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleListings.length === 0 && <p className="admin-empty">Nema oglasa.</p>}
      </div>

      {editedListing && (
        <ListingEditDialog
          listing={editedListing}
          onSave={handleSave}
          onClose={() => setEditedListing(null)}
        />
      )}
    </>
  );
}
