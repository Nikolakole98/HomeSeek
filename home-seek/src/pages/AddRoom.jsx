import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { MdClose, MdOutlineAddPhotoAlternate } from "react-icons/md";
import FrontEnd from "../components/Frontend";
import LoadStatus from "../components/LoadStatus";
import MainBar from "../components/MainBar";
import { useAuth } from "../context/AuthContext";
import { publishListing } from "../data/listingsStore";
import { findCoordinates } from "../utils/geocode";
import { resizeImage } from "../utils/resizeImage";
import "./Home.css";
import "./AddRoom.css";

const DEAL_TYPES = ["Kupovina", "Iznajmljivanje"];
const DEAL_LABELS = { Kupovina: "Prodaja", Iznajmljivanje: "Izdavanje" };
const MAX_PHOTOS = 6;

function buildListing(form, deal, type) {
  const { floor, heating, year, parking } = form;
  const floorLabel = type === "Kuća" ? "Spratnost" : "Sprat";
  const details = Object.fromEntries(
    [[floorLabel, floor], ["Grejanje", heating], ["Godina izgradnje", year], ["Parking", parking]]
      .filter(([, value]) => value)
  );

  return {
    deal,
    type,
    title: form.title.trim(),
    location: [form.city.trim(), form.district.trim()].filter(Boolean).join(", "),
    address: form.street.trim(),
    price: Number(form.price),
    area: Number(form.area),
    rooms: Number(form.rooms),
    description: form.description.trim(),
    details,
    ownerName: form.ownerName.trim(),
    ownerPhone: form.ownerPhone.trim(),
    ownerEmail: form.ownerEmail.trim(),
  };
}

function AddRoomForm({ user }) {
  const navigate = useNavigate();
  const [deal, setDeal] = useState(DEAL_TYPES[0]);
  const [type, setType] = useState("Stan");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handlePhotosSelected(event) {
    const files = [...event.target.files].slice(0, MAX_PHOTOS - photos.length);
    event.target.value = "";
    setError("");
    try {
      const resized = await Promise.all(files.map(resizeImage));
      const added = resized.map((blob) => ({ blob, preview: URL.createObjectURL(blob) }));
      setPhotos((current) => [...current, ...added]);
    } catch {
      setError("Jednu od slika nije moguće učitati. Izaberite JPG ili PNG sliku.");
    }
  }

  function removePhoto(index) {
    setPhotos((current) => current.filter((_, photoIndex) => photoIndex !== index));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (photos.length === 0) {
      setError("Dodajte bar jednu sliku.");
      return;
    }
    const form = Object.fromEntries(new FormData(event.target));
    setError("");
    setSubmitting(true);
    const address = [form.street, form.district, form.city].map((part) => part.trim()).filter(Boolean).join(", ");
    const coordinates = await findCoordinates(`${address}, Srbija`, `${form.city.trim()}, Srbija`);
    try {
      const blobs = photos.map(({ blob }) => blob);
      const { id } = await publishListing(user.id, { ...buildListing(form, deal, type), coordinates }, blobs);
      navigate(`/room/${id}`);
    } catch {
      setError("Oglas trenutno nije moguće objaviti. Pokušajte ponovo.");
      setSubmitting(false);
    }
  }

  return (
    <>
      <MainBar />
      <main className="home">
        <div className="home-container add-page">
          <h1>Dodavanje oglasa</h1>
          <p className="add-intro">Popunite podatke o nekretnini i objavite oglas.</p>

          <form className="add-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Osnovni podaci</legend>
              <div className="home-search-deal" role="radiogroup" aria-label="Vrsta oglasa">
                {DEAL_TYPES.map((option) => (
                  <label key={option} className={option === deal ? "selected" : undefined}>
                    <input
                      type="radio"
                      name="deal"
                      value={option}
                      checked={option === deal}
                      onChange={() => setDeal(option)}
                    />
                    {DEAL_LABELS[option]}
                  </label>
                ))}
              </div>
              <label className="add-wide">
                Naslov oglasa
                <input name="title" type="text" maxLength="80" required />
              </label>
              <label>
                Vrsta nekretnine
                <select value={type} onChange={(event) => setType(event.target.value)}>
                  <option value="Stan">Stan</option>
                  <option value="Kuća">Kuća</option>
                </select>
              </label>
              <label>
                {deal === "Kupovina" ? "Cena (€)" : "Mesečna cena (€)"}
                <input name="price" type="number" min="1" required />
              </label>
              <label>
                Grad
                <input name="city" type="text" required />
              </label>
              <label>
                Deo grada
                <input name="district" type="text" />
              </label>
              <label className="add-wide">
                Ulica i broj (za prikaz na mapi)
                <input name="street" type="text" autoComplete="street-address" />
              </label>
              <label>
                Površina (m²)
                <input name="area" type="number" min="1" required />
              </label>
              <label>
                Broj soba
                <input name="rooms" type="number" min="1" max="20" required />
              </label>
            </fieldset>

            <fieldset>
              <legend>Dodatne informacije</legend>
              <label>
                {type === "Kuća" ? "Spratnost" : "Sprat"}
                <input
                  name="floor"
                  type="text"
                  placeholder={type === "Kuća" ? "npr. Pr + 1" : "npr. 3 / 6"}
                />
              </label>
              <label>
                Grejanje
                <select name="heating" defaultValue="">
                  <option value="">Izaberite</option>
                  <option>Centralno</option>
                  <option>Etažno na gas</option>
                  <option>Struja</option>
                  <option>Čvrsto gorivo</option>
                </select>
              </label>
              <label>
                Godina izgradnje
                <input name="year" type="number" min="1800" max="2100" />
              </label>
              <label>
                Parking
                <select name="parking" defaultValue="">
                  <option value="">Izaberite</option>
                  <option>Garaža</option>
                  <option>Garažno mesto</option>
                  <option>Spoljno mesto</option>
                  <option>Ulični</option>
                </select>
              </label>
              <label className="add-wide">
                Opis
                <textarea name="description" rows="6" required />
              </label>
            </fieldset>

            <fieldset>
              <legend>Slike</legend>
              <div className="add-wide add-photos">
                {photos.map((photo, index) => (
                  <div className="add-photo" key={photo.preview}>
                    <img src={photo.preview} alt={`Slika ${index + 1}`} />
                    <button
                      type="button"
                      aria-label={`Ukloni sliku ${index + 1}`}
                      onClick={() => removePhoto(index)}
                    >
                      <MdClose />
                    </button>
                    {index === 0 && <span>Glavna</span>}
                  </div>
                ))}
                {photos.length < MAX_PHOTOS && (
                  <label className="add-photo-picker">
                    <MdOutlineAddPhotoAlternate aria-hidden="true" />
                    Dodaj slike
                    <input type="file" accept="image/*" multiple onChange={handlePhotosSelected} />
                  </label>
                )}
              </div>
              <p className="add-wide add-hint">Najviše {MAX_PHOTOS} slika. Prva slika je glavna.</p>
            </fieldset>

            <fieldset>
              <legend>Vaši podaci</legend>
              <label className="add-wide">
                {user.type === "agencija" ? "Naziv agencije" : "Ime i prezime"}
                <input name="ownerName" type="text" autoComplete="name" defaultValue={user.name} required />
              </label>
              <label>
                Telefon
                <input name="ownerPhone" type="tel" autoComplete="tel" defaultValue={user.phone} required />
              </label>
              <label>
                Mejl adresa
                <input name="ownerEmail" type="email" autoComplete="email" defaultValue={user.email} required />
              </label>
            </fieldset>

            {error && <p className="add-error" role="alert">{error}</p>}
            <button className="home-btn" type="submit" disabled={submitting}>
              {submitting ? "Objavljivanje..." : "Objavi oglas"}
            </button>
          </form>
        </div>
      </main>
      <FrontEnd />
    </>
  );
}

export default function AddRoom() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <>
        <MainBar />
        <main className="home">
          <LoadStatus />
        </main>
        <FrontEnd />
      </>
    );
  }
  if (!user) {
    return <Navigate to="/login?next=/addRoom" replace />;
  }
  return <AddRoomForm user={user} />;
}
