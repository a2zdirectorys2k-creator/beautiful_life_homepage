"use client";

import { useState, useMemo } from "react";
import Header from "../components/Header";
import Header2 from "../components/Header2Component";
import HeroSection from "../components/HeroSection";

export default function Page() {
  
  // 🌍 FULL LANGUAGE LIST
  const languages = useMemo(
    () => [
      "English", "Tamil", "Hindi", "Kannada", "Malayalam", "Telugu",
      "Bengali", "Marathi", "Punjabi", "Gujarati", "Odia", "Konkani",
      "Urdu", "Assamese", "Manipuri", "Nepali", "Sanskrit",
      "French", "German", "Spanish", "Arabic", "Chinese", "Japanese",
      "Korean", "Russian", "Portuguese", "Italian", "Dutch",
      "Thai", "Vietnamese", "Burmese", "Sinhalese"
    ],
    []
  );

  const [selectedLanguage, setSelectedLanguage] = useState("English");

return (
  <>
    {/* 1️⃣ HERO SECTION WITH BLF TITLE */}
    <HeroSection />

    {/* 2️⃣ HEADER 2 — NAVIGATION MENU */}
    <Header2 />

    {/* 3️⃣ HEADER 1 — 3 LOGOS SECTION */}
    <Header />
  </>
);

}