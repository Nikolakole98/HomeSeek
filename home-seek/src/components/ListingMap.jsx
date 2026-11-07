const LAT_SPAN = 0.01;
const LON_SPAN = 0.018;

export default function ListingMap({ title, coordinates: { lat, lon } }) {
  const bbox = [lon - LON_SPAN, lat - LAT_SPAN, lon + LON_SPAN, lat + LAT_SPAN].join(",");
  const embedParams = new URLSearchParams({ bbox, layer: "mapnik", marker: `${lat},${lon}` });
  const largeMapUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}`;

  return (
    <div className="room-map">
      <iframe
        title={`Mapa: ${title}`}
        src={`https://www.openstreetmap.org/export/embed.html?${embedParams}`}
        loading="lazy"
      />
      <a className="home-link" href={largeMapUrl} target="_blank" rel="noreferrer">
        Otvori veću mapu
      </a>
    </div>
  );
}
