import { straightLineKm } from "./distance";

// Nominatim je besplatan OpenStreetMap servis, sa ogranicenjem od jednog zahteva u sekundi.
const SEARCH_URL = "https://nominatim.openstreetmap.org/search";
const TIMEOUT_MS = 5000;
const REQUEST_GAP_MS = 1100;
const MAX_DISTANCE_FROM_CITY_KM = 12;
const LABEL_PARTS = 3;

function buildLabel({ address, display_name: displayName }) {
  const place = address.city ?? address.town ?? address.village;
  if (!address.road || !place) return displayName.split(", ").slice(0, LABEL_PARTS).join(", ");
  return `${[address.road, address.house_number].filter(Boolean).join(" ")}, ${place}`;
}

async function search(query) {
  const params = new URLSearchParams({
    format: "jsonv2",
    addressdetails: 1,
    limit: 5,
    countrycodes: "rs",
    "accept-language": "sr-Latn",
    q: query,
  });
  const response = await fetch(`${SEARCH_URL}?${params}`, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!response.ok) throw new Error(`Nominatim: ${response.status}`);
  const results = await response.json();
  // Sela unutar gradskih teritorija (npr. Grad Beograd) cesto imaju iste nazive ulica.
  const result = results.find(({ address }) => !address.village) ?? results[0];
  if (!result) return null;
  return { lat: Number(result.lat), lon: Number(result.lon), label: buildLabel(result) };
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Vraca koordinate adrese, a ako je pronadjena daleko od grada (isto ime ulice
// u drugom mestu) ili nije pronadjena, koordinate grada. Bez rezultata vraca null.
export async function findCoordinates(addressQuery, cityQuery) {
  let city = null;
  try {
    city = await search(cityQuery);
    if (!city || addressQuery === cityQuery) return toCoordinates(city);

    await wait(REQUEST_GAP_MS);
    const address = await search(addressQuery);
    const isNearCity = address && straightLineKm(address, city) <= MAX_DISTANCE_FROM_CITY_KM;
    return toCoordinates(isNearCity ? address : city);
  } catch {
    // Oglas moze da se objavi i bez mape.
    return toCoordinates(city);
  }
}

const toCoordinates = (place) => (place ? { lat: place.lat, lon: place.lon } : null);

// Adresu bez zareza prvo trazi u gradu oglasa, a zatim u celoj Srbiji.
// Baca gresku ako servis nije dostupan.
export async function findPlace(input, defaultCity) {
  if (input.includes(",")) return search(`${input}, Srbija`);

  const place = await search(`${input}, ${defaultCity}, Srbija`);
  if (place) return place;
  await wait(REQUEST_GAP_MS);
  return search(`${input}, Srbija`);
}
