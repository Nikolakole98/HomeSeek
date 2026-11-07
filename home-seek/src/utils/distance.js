const EARTH_RADIUS_KM = 6371;
const ROUTE_URL = "https://router.project-osrm.org/route/v1/driving";
const TIMEOUT_MS = 5000;

const toRadians = (degrees) => (degrees * Math.PI) / 180;

// Vazdusna udaljenost (Haversine formula).
export function straightLineKm(from, to) {
  const latDelta = toRadians(to.lat - from.lat);
  const lonDelta = toRadians(to.lon - from.lon);
  const a =
    Math.sin(latDelta / 2) ** 2 +
    Math.cos(toRadians(from.lat)) * Math.cos(toRadians(to.lat)) * Math.sin(lonDelta / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(a));
}

// Ruta kolima, ili null ako nije dostupna. OSRM javni server je samo za razvoj.
export async function fetchDrivingRoute(from, to) {
  try {
    const url = `${ROUTE_URL}/${from.lon},${from.lat};${to.lon},${to.lat}?overview=false`;
    const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    const { routes } = await response.json();
    return routes?.[0] ? { km: routes[0].distance / 1000, minutes: routes[0].duration / 60 } : null;
  } catch {
    return null;
  }
}

const numberFormat = new Intl.NumberFormat("sr-Latn-RS", { maximumFractionDigits: 1 });

export function formatDistance(km) {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${numberFormat.format(km)} km`;
}

export function formatDuration(minutes) {
  const total = Math.max(1, Math.round(minutes));
  return total < 60 ? `${total} min` : `${Math.floor(total / 60)} h ${total % 60} min`;
}
