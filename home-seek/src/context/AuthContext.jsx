import { createContext, useContext, useState } from "react";
import {
  getCurrentUser,
  loginAccount,
  logoutAccount,
  registerAccount,
  toggleAccountFavorite,
} from "../data/accountsStore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser);

  const value = {
    user,
    login: async (email, password) => setUser(await loginAccount(email, password)),
    register: async (profile) => setUser(await registerAccount(profile)),
    logout: () => {
      logoutAccount();
      setUser(null);
    },
    toggleFavorite: (listingId) => setUser(toggleAccountFavorite(user.id, listingId)),
  };

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
