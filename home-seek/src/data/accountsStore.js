// Privremeno resenje dok nema backenda: nalozi se cuvaju samo u ovom browseru.
// Ovo nije bezbedna prijava. Pre objavljivanja je zameniti serverskom autentifikacijom.
const ACCOUNTS_KEY = "homeseek-accounts";
const SESSION_KEY = "homeseek-session";
const PBKDF2_ITERATIONS = 100000;

function readAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) ?? [];
  } catch {
    return [];
  }
}

function writeAccounts(accounts) {
  try {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  } catch {
    throw new Error("Nema dovoljno prostora u browseru za čuvanje podataka.");
  }
}

function toPublicUser({ salt, passwordHash, ...user }) {
  return user;
}

const toHex = (bytes) => [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, "0")).join("");

async function hashPassword(password, salt) {
  if (!crypto.subtle) {
    throw new Error("Prijava je moguća samo preko HTTPS veze.");
  }
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: new TextEncoder().encode(salt), iterations: PBKDF2_ITERATIONS },
    key,
    256
  );
  return toHex(bits);
}

const normalizeEmail = (email) => email.trim().toLowerCase();

export function getCurrentUser() {
  const account = readAccounts().find((item) => item.id === localStorage.getItem(SESSION_KEY));
  return account ? toPublicUser(account) : null;
}

export async function registerAccount({ password, ...profile }) {
  const email = normalizeEmail(profile.email);
  const accounts = readAccounts();
  if (accounts.some((account) => account.email === email)) {
    throw new Error("Nalog sa ovom mejl adresom već postoji.");
  }

  const salt = toHex(crypto.getRandomValues(new Uint8Array(16)));
  const account = {
    ...profile,
    email,
    id: crypto.randomUUID(),
    favorites: [],
    salt,
    passwordHash: await hashPassword(password, salt),
  };
  writeAccounts([...accounts, account]);
  localStorage.setItem(SESSION_KEY, account.id);
  return toPublicUser(account);
}

export async function loginAccount(email, password) {
  const account = readAccounts().find((item) => item.email === normalizeEmail(email));
  if (!account || (await hashPassword(password, account.salt)) !== account.passwordHash) {
    throw new Error("Pogrešan mejl ili lozinka.");
  }
  localStorage.setItem(SESSION_KEY, account.id);
  return toPublicUser(account);
}

export function logoutAccount() {
  localStorage.removeItem(SESSION_KEY);
}

export function toggleAccountFavorite(accountId, listingId) {
  const accounts = readAccounts().map((account) => {
    if (account.id !== accountId) return account;
    const favorites = account.favorites.includes(listingId)
      ? account.favorites.filter((id) => id !== listingId)
      : [...account.favorites, listingId];
    return { ...account, favorites };
  });
  writeAccounts(accounts);
  return toPublicUser(accounts.find((account) => account.id === accountId));
}
