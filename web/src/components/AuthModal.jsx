import { useState } from "react";
import { authLogin, authRegister } from "../lib/apiClient.js";

export default function AuthModal({ onAuth, onSkip }) {
  const [tab, setTab] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      let result;
      if (tab === "login") {
        result = await authLogin(username, password);
      } else {
        result = await authRegister(username, password, displayName || username);
      }
      onAuth(result.user);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modalOverlay">
      <div className="modalCard">
        <div className="modalHeader">
          <span className="modalIcon">🌱</span>
          <h2 className="modalTitle">MoodGarden</h2>
          <p className="modalSub">Sign in to save your garden across devices</p>
        </div>

        <div className="authTabs">
          <button
            type="button"
            className={`authTab ${tab === "login" ? "authTabActive" : ""}`}
            onClick={() => { setTab("login"); setError(""); }}
          >
            Sign in
          </button>
          <button
            type="button"
            className={`authTab ${tab === "register" ? "authTabActive" : ""}`}
            onClick={() => { setTab("register"); setError(""); }}
          >
            Create account
          </button>
        </div>

        <form className="authForm" onSubmit={handleSubmit}>
          {tab === "register" && (
            <label className="authLabel">
              <span>Display name (optional)</span>
              <input
                className="authInput"
                type="text"
                placeholder="How should we call you?"
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                autoComplete="name"
              />
            </label>
          )}

          <label className="authLabel">
            <span>Username</span>
            <input
              className="authInput"
              type="text"
              placeholder="your_username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              autoComplete="username"
              autoFocus
            />
          </label>

          <label className="authLabel">
            <span>Password</span>
            <input
              className="authInput"
              type="password"
              placeholder={tab === "register" ? "At least 6 characters" : "Your password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete={tab === "login" ? "current-password" : "new-password"}
            />
          </label>

          {error && <p className="authError">{error}</p>}

          <button type="submit" className="btn authSubmit" disabled={loading}>
            {loading ? "..." : tab === "login" ? "Sign in" : "Create account"}
          </button>
        </form>

        <button type="button" className="authSkip" onClick={onSkip}>
          Skip for now — continue as guest
        </button>
      </div>
    </div>
  );
}
