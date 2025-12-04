"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Header from "./components/Header";   // ✅ NEW HEADER IMPORT

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
        l.name.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
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
    <div>
      {/* ✅ USE NEW HEADER COMPONENT */}
      <Header />

      {/* PAGE CONTENT BELOW */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
          Welcome to Beautiful Life
        </h2>
      </div>

      {/* LANGUAGE DRAWER — untouched & working */}
      {langOpen && (
        <div
          ref={drawerRef}
          style={{
            position: "fixed",
            right: "20px",
            top: "100px",
            width: "280px",
            background: "#fff",
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
            zIndex: 999,
          }}
        >
          <input
            ref={searchRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search language..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />

          <div style={{ maxHeight: "260px", overflowY: "auto" }}>
            {filtered.map((lang) => (
              <div
                key={lang.code}
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #eee",
                  cursor: "pointer",
                }}
              >
                {lang.flag} {lang.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
