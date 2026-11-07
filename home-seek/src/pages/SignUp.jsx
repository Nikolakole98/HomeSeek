import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";
import { getSafeNext, useAuth } from "../context/AuthContext";
import "./Home.css";
import "./Auth.css";

const ACCOUNT_TYPES = [
  { value: "korisnik", label: "Korisnik" },
  { value: "agencija", label: "Agencija" },
];

function buildProfile(form, accountType) {
  const { firstName, lastName, agencyName, pib, email, phone, password } = form;
  const common = { type: accountType, email, phone: phone.trim(), password };
  return accountType === "agencija"
    ? { ...common, name: agencyName.trim(), pib }
    : { ...common, name: `${firstName.trim()} ${lastName.trim()}` };
}

export default function SignUp() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [accountType, setAccountType] = useState(ACCOUNT_TYPES[0].value);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  if (confirmationSent) {
    return (
      <>
        <MainBar />
        <main className="home">
          <div className="home-container auth-page">
            <div className="auth-card">
              <h1>Proverite mejl</h1>
              <p className="auth-intro">Poslali smo vam link za potvrdu naloga. Posle potvrde se možete prijaviti.</p>
            </div>
          </div>
        </main>
        <FrontEnd />
      </>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.target));
    if (form.password !== form.confirmPassword) {
      setError("Lozinke se ne poklapaju.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const isLoggedIn = await register(buildProfile(form, accountType));
      if (isLoggedIn) {
        navigate(getSafeNext(searchParams), { replace: true });
      } else {
        setConfirmationSent(true);
      }
    } catch (registerError) {
      setError(registerError.message);
      setSubmitting(false);
    }
  }

  return (
    <>
      <MainBar />
      <main className="home">
        <div className="home-container auth-page">
          <div className="auth-card">
            <h1>Kreirajte nalog</h1>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="home-search-deal" role="radiogroup" aria-label="Vrsta naloga">
                {ACCOUNT_TYPES.map(({ value, label }) => (
                  <label key={value} className={value === accountType ? "selected" : undefined}>
                    <input
                      type="radio"
                      name="accountType"
                      value={value}
                      checked={value === accountType}
                      onChange={() => setAccountType(value)}
                    />
                    {label}
                  </label>
                ))}
              </div>

              {accountType === "agencija" ? (
                <>
                  <label>
                    Naziv agencije
                    <input name="agencyName" type="text" autoComplete="organization" required />
                  </label>
                  <label>
                    PIB
                    <input
                      name="pib"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{9}"
                      title="PIB ima 9 cifara"
                      required
                    />
                  </label>
                </>
              ) : (
                <div className="auth-row">
                  <label>
                    Ime
                    <input name="firstName" type="text" autoComplete="given-name" required />
                  </label>
                  <label>
                    Prezime
                    <input name="lastName" type="text" autoComplete="family-name" required />
                  </label>
                </div>
              )}

              <label>
                Mejl adresa
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Broj telefona
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                Lozinka
                <input name="password" type="password" autoComplete="new-password" minLength="8" required />
              </label>
              <label>
                Potvrdite lozinku
                <input name="confirmPassword" type="password" autoComplete="new-password" minLength="8" required />
              </label>

              {error && <p className="auth-error" role="alert">{error}</p>}
              <button className="home-btn" type="submit" disabled={submitting}>Registruj se</button>
            </form>

            <p className="auth-switch">
              Već imate nalog?{" "}
              <Link className="home-link" to={`/login?${searchParams}`}>Prijavite se</Link>
            </p>
          </div>
        </div>
      </main>
      <FrontEnd />
    </>
  );
}
