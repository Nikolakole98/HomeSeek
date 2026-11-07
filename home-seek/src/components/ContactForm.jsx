import { useState } from "react";
import { CONTACT } from "../data/homeData";

// Sajt jos nema backend, pa forma otvara mejl program posetioca sa popunjenom porukom.
export default function ContactForm({ listingTitle, recipient = CONTACT.email }) {
  const [mailOpened, setMailOpened] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = Object.fromEntries(new FormData(event.target));
    const subject = encodeURIComponent(
      listingTitle ? `Upit za oglas: ${listingTitle}` : `Upit sa sajta HomeSeek: ${name}`
    );
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setMailOpened(true);
  }

  return (
    <form className="home-contact-form" onSubmit={handleSubmit}>
      <label>
        Ime i prezime
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Mejl adresa
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Poruka
        <textarea
          name="message"
          rows={listingTitle ? 4 : 5}
          defaultValue={listingTitle ? `Zanima me oglas „${listingTitle}“.` : undefined}
          required
        />
      </label>
      <button className="home-btn" type="submit">Pošalji upit</button>
      {mailOpened && (
        <p className="home-contact-note" role="status">
          Poruka je pripremljena u vašem mejl programu. Pošaljite je odatle.
        </p>
      )}
    </form>
  );
}
