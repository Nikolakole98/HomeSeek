export default function LoadStatus({ error }) {
  return (
    <p className="home-status" role="status">
      {error ? "Podaci trenutno nisu dostupni. Pokušajte ponovo." : "Učitavanje..."}
    </p>
  );
}
