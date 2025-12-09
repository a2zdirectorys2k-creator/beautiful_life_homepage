"use client";
import "./header2Styles.css";
import { useState } from "react";

export default function Header2Component() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", color: "blue", link: "/" },
    { label: "About Us", color: "blue", link: "/about" },
    { label: "Earn Unlimited", color: "red", link: "/earn" },
    { label: "A2Z Companies", color: "blue", link: "/a2z" },
    { label: "Join Us", color: "red", link: "/join" },
    { label: "Events", color: "blue", link: "/events" },
    { label: "Our Super Stars", color: "red", link: "/stars" },
    { label: "Learn to Earn", color: "blue", link: "/learn" },
    { label: "News", color: "blue", link: "/news" },
    { label: "Compliments", color: "blue", link: "/compliments" },
    { label: "Complaints", color: "red", link: "/complaints" },
  ];

  return (
    <>
      {/* GOLDEN BORDER ABOVE HERO SECTION */}
      <div className="hero-gold-top"></div>

      {/* SUBTITLE BAR */}
      <div className="subtitle-bar">
        <button className="subtitle-btn-red">
          JOIN BEAUTIFUL LIFE & MAKE YOUR LIFE BEAUTIFUL
        </button>

        <button className="subtitle-btn-blue">
          EARN UNLIMITED & BE HAPPY
        </button>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="header2-container">
        <div className="nav-wrapper">

          {/* Large screen nav */}
          <div className="nav-items">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`nav-btn ${item.color === "red" ? "red-btn" : "blue-btn"}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="mobile-dropdown">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`mobile-nav-btn ${item.color === "red" ? "red-btn" : "blue-btn"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* TWO SYNCHRONIZED BUTTERFLIES */}
      <div className="butterfly-left"></div>
      <div className="butterfly-right"></div>
    </>
  );
}
