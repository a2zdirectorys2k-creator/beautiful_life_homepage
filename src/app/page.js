"use client";

import { useMemo } from "react";
import Header from "./components/Header";  

export default function Page() {

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
      { code: "ur", name: "Urdu", flag: "🇵🇰" },
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

  return (
    <div>

      {/* 🌟 HERO SECTION */}
      <div className="hero-container">

        <img 
          src="/assets/img/logos/header1/butterfly (2).gif"
          className="hero-butterfly hero-butterfly-left"
        />

        <img 
          src="/assets/img/blf-title.png"
          className="hero-title-image"
        />

        <img 
          src="/assets/img/logos/header1/butterfly (2).gif"
          className="hero-butterfly hero-butterfly-right"
        />

        <div className="hero-buttons">
          <button className="reg-btn">Register</button>
          <button className="login-btn">Login</button>
          <div className="forgot">Forgot Password</div>
        </div>

      </div>

      <Header />

    </div>
  );
}
