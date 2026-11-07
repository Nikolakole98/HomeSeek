import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import FrontEnd from "../components/Frontend";
import MainBar from "../components/MainBar";
import { getSafeNext, useAuth } from "../context/AuthContext";
import "./Home.css";
import "./Auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(event.target));
    setError("");
    setSubmitting(true);
    try {
      await login(email, password);
      navigate(getSafeNext(searchParams), { replace: true });
    } catch (loginError) {
      setError(loginError.message);
      setSubmitting(false);
    }
  }

  return (
    <>
      <MainBar />
      <main className="home">
        <div className="home-container auth-page">
          <div className="auth-card">
            <h1>Prijavite se</h1>
            <p className="auth-intro">
              {searchParams.has("next")
                ? "Prijavite se da biste nastavili."
                : "Prijavite se i pristupite sačuvanim oglasima."}
            </p>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label>
                Mejl adresa
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Lozinka
                <input name="password" type="password" autoComplete="current-password" required />
              </label>
              {error && <p className="auth-error" role="alert">{error}</p>}
              <button className="home-btn" type="submit" disabled={submitting}>Prijavi se</button>
            </form>

            <p className="auth-switch">
              Nemate nalog?{" "}
              <Link className="home-link" to={`/signUp?${searchParams}`}>Registrujte se</Link>
            </p>
          </div>
        </div>
      </main>
      <FrontEnd />
    </>
  );
}
