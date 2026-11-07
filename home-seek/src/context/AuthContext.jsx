import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { addFavorite, getProfile, removeFavorite } from "../data/accountsStore";
import { supabase } from "../lib/supabase";

const AuthContext = createContext(null);

const ERROR_MESSAGES = {
  invalid_credentials: "Pogrešan mejl ili lozinka.",
  email_not_confirmed: "Potvrdite mejl adresu, pa se prijavite.",
  user_already_exists: "Nalog sa ovom mejl adresom već postoji.",
  email_exists: "Nalog sa ovom mejl adresom već postoji.",
  weak_password: "Lozinka nije dovoljno jaka.",
  over_email_send_rate_limit: "Poslato je previše mejlova. Pokušajte kasnije.",
};

function toFriendlyError(error) {
  return new Error(ERROR_MESSAGES[error.code] ?? "Usluga trenutno nije dostupna. Pokušajte ponovo.");
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = useCallback(async (authUser) => {
    try {
      setUser(authUser ? await getProfile(authUser.id) : null);
    } catch {
      setUser(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      // Upit u istom koraku moze da blokira Supabase klijent, pa se odlaze.
      setTimeout(() => loadUser(session?.user ?? null), 0);
    });
    return () => data.subscription.unsubscribe();
  }, [loadUser]);

  async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw toFriendlyError(error);
    await loadUser(data.user);
  }

  // Vraca false ako korisnik prvo mora da potvrdi mejl adresu.
  async function register({ email, password, ...profile }) {
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: profile } });
    if (error) throw toFriendlyError(error);
    if (data.user?.identities?.length === 0) throw toFriendlyError({ code: "user_already_exists" });
    if (!data.session) return false;
    await loadUser(data.user);
    return true;
  }

  async function logout() {
    await supabase.auth.signOut();
    setUser(null);
  }

  async function toggleFavorite(listingId) {
    const saved = user.favorites.includes(listingId);
    await (saved ? removeFavorite : addFavorite)(user.id, listingId);
    const favorites = saved ? user.favorites.filter((id) => id !== listingId) : [...user.favorites, listingId];
    setUser({ ...user, favorites });
  }

  const value = { user, loading, login, register, logout, toggleFavorite };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

// Dozvoljava povratak samo na stranice ovog sajta.
export function getSafeNext(searchParams) {
  const next = searchParams.get("next");
  return next?.startsWith("/") && !next.startsWith("//") ? next : "/";
}
