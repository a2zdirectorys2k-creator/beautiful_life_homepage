"use client";

import { useState, useMemo, useEffect, useRef } from "react";

export default function Page() {
  const [langOpen, setLangOpen] = useState(false);
  const [query, setQuery] = useState("");
  const drawerRef = useRef(null);
  const searchRef = useRef(null);

  const languages = useMemo(
    () => [
      { code: "as", name: "Assamese", flag: "🇮🇳" },
      { code: "bn", name: "Bengali", flag: "🇮🇳" },
      { code: "en", name: "English", flag: "🇬🇧" },
      { code: "gu", name: "Gujarati", flag: "🇮🇳" },
      { code: "hi", name: "Hindi", flag: "🇮🇳" },
      { code: "kn", name: "Kannada", flag: "🇮🇳" },
      { code: "ks", name: "Kashmiri", flag: "🇮🇳" },
      { code: "ml", name: "Malayalam", flag: "🇮🇳" },
      { code: "mr", name: "Marathi", flag: "🇮🇳" },
      { code: "or", name: "Odia", flag: "🇮🇳" },
      { code: "pa", name: "Punjabi", flag: "🇮🇳" },
      { code: "sa", name: "Sanskrit", flag: "🇮🇳" },
      { code: "ta", name: "Tamil", flag: "🇮🇳" },
      { code: "te", name: "Telugu", flag: "🇮🇳" },
      { code: "ur", name: "Urdu", flag: "🇮🇳" },

      { code: "ar", name: "Arabic", flag: "🇸🇦" },
      { code: "zh", name: "Chinese", flag: "🇨🇳" },
      { code: "nl", name: "Dutch", flag: "🇳🇱" },
      { code: "fr", name: "French", flag: "🇫🇷" },
      { code: "de", name: "German", flag: "🇩🇪" },
      { code: "it", name: "Italian", flag: "🇮🇹" },
      { code: "ja", name: "Japanese", flag: "🇯🇵" },
      { code: "ko", name: "Korean", flag: "🇰🇷" },
      { code: "pt", name: "Portuguese", flag: "🇵🇹" },
      { code: "ru", name: "Russian", flag: "🇷🇺" },
      { code: "es", name: "Spanish", flag: "🇪🇸" },
      { code: "tr", name: "Turkish", flag: "🇹🇷" },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return languages;
    return languages.filter(
      (l) =>
        l.name.toLowerCase().includes(q) || l.code.toLowerCase().includes(q)
    );
  }, [query, languages]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setLangOpen(false);
    }
    function onDocClick(e) {
      if (!langOpen) return;
      if (drawerRef.current && !drawerRef.current.contains(e.target))
        setLangOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [langOpen]);

  useEffect(() => {
    if (langOpen && searchRef.current) {
      setTimeout(() => searchRef.current.focus(), 120);
    }
  }, [langOpen]);

  return (
    <div style={{ fontFamily: "Calibri, 'Segoe UI', Roboto" }}>
      <style>{`

        :root {
          --garden-1: #e8f9f1;
          --garden-2: #fffaf0;
          --garden-3: #f7fff9;
          --gold: #caa152;
          --text: #083e2f;
        }

        .header-wrap {
          background: linear-gradient(90deg, var(--garden-1), var(--garden-2), var(--garden-3));
          border-top: 4px double var(--gold);
          border-bottom: 4px double var(--gold);
        }

        /* FIVE COLUMN GRID */
        .header {
          max-width: 1450px;
          margin: 0 auto;
          padding: 20px 22px;
          display: grid;
          grid-template-columns: 26% 18% 22% 16% 18%;
          align-items: center;
          column-gap: 10px;
        }

        /* MOBILE STACK */
        @media (max-width: 900px) {
          .header {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
        }

        /* BLF COLUMN */
        .blf-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .blf-logo {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
        }

        .title-text {
          font-size: 34px;
          font-weight: 800;
          color: var(--text);
          white-space: nowrap;
          margin-top: 4px;
        }

        /.butterfly {
  position: absolute;
  width: 110px;
  right: -72px;
  top: 22px;
  transform: scaleX(-1);
  animation: flutter 3.5s ease-in-out infinite;
  filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.25));
}

        @keyframes flutter {
          0% { transform: translateY(0) scaleX(-1); }
          50% { transform: translateY(-6px) scaleX(-1); }
          100% { transform: translateY(0) scaleX(-1); }
        }

        /* FOF COLUMN */
        .panther {
          height: 120px;
          object-fit: contain;
        }
        .fof-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text);
          text-align: center;
        }

        /* A2Z COLUMN */
        .a2z-logo {
          width: 160px;
          height: 160px;
          object-fit: contain;
        }
        .a2z-title {
          margin-top: 6px;
          font-size: 20px;
          font-weight: 800;
          color: var(--text);
          text-align: center;
        }

        /* REGISTER/LOGIN COLUMN */
        .auth-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .btn-bar {
          display: flex;
          gap: 10px;
        }

        .reg-btn, .login-btn {
          padding: 10px 18px;
          border-radius: 10px;
          color: #fff;
          font-weight: 800;
          text-decoration: none;
        }
        .reg-btn { background: #c62828; }
        .login-btn { background: #0b5cff; }

        .forgot {
          font-weight: 700;
          color: var(--text);
          margin-top: -4px;
        }

        /* LANGUAGE COLUMN */
        .lang-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .lang-btn {
          padding: 10px 16px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.15);
          cursor: pointer;
          font-weight: 800;
        }

        .lang-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text);
        }

      `}</style>

      {/* HEADER */}
      <div className="header-wrap">
        <header className="header">

          {/* COLUMN 1 — BLF */}
          <div className="blf-stack">
            <a href="#"><img src="/assets/img/logos/header1/BEAUTIFUL LIFE LOGO 2.jpg" className="blf-logo" /></a>
            <h1 className="title-text">Beautiful Life</h1>
            <a href="#"><img src="/assets/img/logos/header1/butterfly (2).gif" className="butterfly" /></a>
          </div>

          {/* COLUMN 2 — FOF */}
          <div style={{ textAlign: "center" }}>
            <a href="#"><img src="/assets/img/logos/header1/fof.png" className="panther" /></a>
            <div className="fof-title">Friends of Friends (FOF)</div>
          </div>

          {/* COLUMN 3 — A2Z */}
          <div style={{ textAlign: "center" }}>
            <a href="#"><img src="/assets/img/logos/header1/a2zgroups.jpg" className="a2z-logo" /></a>
            <div className="a2z-title">A2Z Group Companies</div>
          </div>

          {/* COLUMN 4 — REGISTER/LOGIN */}
          <div className="auth-box">
            <div className="btn-bar">
              <a href="#" className="reg-btn">Register</a>
              <a href="#" className="login-btn">Login</a>
            </div>
            <a href="#" className="forgot">Forgot Password</a>
          </div>

          {/* COLUMN 5 — LANGUAGE */}
          <div className="lang-box">
            <button className="lang-btn" onClick={() => setLangOpen(true)}>
              🌐 English ▼
            </button>
            <div className="lang-title">Choose Your Language</div>
          </div>

        </header>
      </div>
    </div>
  );
}
