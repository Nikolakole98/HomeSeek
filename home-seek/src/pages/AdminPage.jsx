import { useCallback, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AdminAccounts from "../components/admin/AdminAccounts";
import AdminListings from "../components/admin/AdminListings";
import FrontEnd from "../components/Frontend";
import LoadStatus from "../components/LoadStatus";
import MainBar from "../components/MainBar";
import { useAuth } from "../context/AuthContext";
import { getAccounts } from "../data/accountsStore";
import { useListings } from "../hooks/useListings";
import "./Home.css";
import "./AdminPage.css";

// Ova provera samo bira sta se prikazuje. Podatke stite pravila pristupa u bazi.
function AdminPanel() {
  const { listings, loading, error, reload: reloadListings } = useListings();
  const [accounts, setAccounts] = useState([]);
  const [tab, setTab] = useState("listings");
  const [actionError, setActionError] = useState("");

  const reloadAccounts = useCallback(async () => {
    try {
      setAccounts(await getAccounts());
    } catch {
      setActionError("Nalozi nisu učitani. Pokušajte ponovo.");
    }
  }, []);

  useEffect(() => {
    reloadAccounts();
  }, [reloadAccounts]);

  async function handleChange() {
    setActionError("");
    await Promise.all([reloadListings(), reloadAccounts()]);
  }

  const tabs = [
    { id: "listings", label: `Oglasi (${listings.length})` },
    { id: "accounts", label: `Nalozi (${accounts.length})` },
  ];

  return (
    <>
      <h1>Admin panel</h1>
      <div className="admin-tabs" role="tablist" aria-label="Podaci">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={tab === id ? "selected" : undefined}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {actionError && <p className="admin-error" role="alert">{actionError}</p>}
      {loading || error ? (
        <LoadStatus error={error} />
      ) : tab === "listings" ? (
        <AdminListings listings={listings} onChange={handleChange} onError={setActionError} />
      ) : (
        <AdminAccounts accounts={accounts} onChange={handleChange} onError={setActionError} />
      )}
    </>
  );
}

export default function AdminPage() {
  const { user, loading } = useAuth();

  if (!loading && !user) {
    return <Navigate to="/login?next=/admin" replace />;
  }

  return (
    <>
      <MainBar />
      <main className="home">
        <div className="home-container admin-page">
          {loading ? (
            <LoadStatus />
          ) : user.isAdmin ? (
            <AdminPanel />
          ) : (
            <div className="admin-denied">
              <h1>Nemate pristup</h1>
              <p>Ova stranica je dostupna samo administratorima sajta.</p>
              <Link className="home-btn" to="/">Nazad na početnu</Link>
            </div>
          )}
        </div>
      </main>
      <FrontEnd />
    </>
  );
}
