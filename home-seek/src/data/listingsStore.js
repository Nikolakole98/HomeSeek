import { LISTINGS } from "./homeData";

// Dok nema backenda, oglasi korisnika se cuvaju samo u browseru u kom su dodati.
const STORAGE_KEY = "homeseek-user-listings";

function readUserListings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function getListings() {
  return [...readUserListings(), ...LISTINGS];
}

// Baca gresku ako u browseru nema dovoljno prostora.
export function addListing(listing) {
  const newListing = {
    ...listing,
    id: Date.now(),
    updatedAt: new Date().toISOString().slice(0, 10),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newListing, ...readUserListings()]));
  return newListing;
}
