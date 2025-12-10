"use client";

import { useState, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import Header2 from "../components/Header2Component";
import Header1 from "../components/Header";

export default function Page() {
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
      <Header2 />
      <HeroSection />
      <Header1 />
   </>
)
}

