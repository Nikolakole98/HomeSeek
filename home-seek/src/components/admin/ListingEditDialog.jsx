import { useEffect, useRef } from "react";

export default function ListingEditDialog({ listing, onSave, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const { title, deal, type, price, area, rooms, description } = Object.fromEntries(new FormData(event.target));
    onSave({
      title: title.trim(),
      deal,
      type,
      price: Number(price),
      area: Number(area),
      rooms: Number(rooms),
      description: description.trim(),
    });
  }

  return (
    <dialog className="admin-dialog" ref={dialogRef} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <h2>Izmena oglasa</h2>
        <label className="admin-wide">
          Naslov
          <input name="title" type="text" maxLength="80" defaultValue={listing.title} required />
        </label>
        <label>
          Ponuda
          <select name="deal" defaultValue={listing.deal}>
            <option>Kupovina</option>
            <option>Iznajmljivanje</option>
          </select>
        </label>
        <label>
          Vrsta
          <select name="type" defaultValue={listing.type}>
            <option>Stan</option>
            <option>Kuća</option>
          </select>
        </label>
        <label>
          Cena (€)
          <input name="price" type="number" min="1" defaultValue={listing.price} required />
        </label>
        <label>
          Površina (m²)
          <input name="area" type="number" min="1" defaultValue={listing.area} required />
        </label>
        <label>
          Broj soba
          <input name="rooms" type="number" min="1" max="20" defaultValue={listing.rooms} required />
        </label>
        <label className="admin-wide">
          Opis
          <textarea name="description" rows="5" defaultValue={listing.description} required />
        </label>
        <div className="admin-wide admin-dialog-actions">
          <button className="admin-action" type="button" onClick={onClose}>Otkaži</button>
          <button className="home-btn" type="submit">Sačuvaj izmene</button>
        </div>
      </form>
    </dialog>
  );
}
