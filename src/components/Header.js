"use client";
import Image from "next/image";
import "./Header1.css";

export default function Header1() {
  return (
    <div className="logo-strip-container">

      {/* LEFT — 3 LOGOS (BLF, FOF, A2Z) */}
      <div className="logo-strip-left">

        {/* Beautiful Life */}
        <div className="logo-block">
          <div className="logo-zoom">
            <Image
              src="/assets/img/logos/header1/blf-logo.jpg"
              alt="Beautiful Life Logo"
              width={200}
              height={200}
              className="brand-logo"
            />
          </div>
          <div className="logo-title">Beautiful Life</div>
        </div>

        {/* Friends Of Friends */}
        <div className="logo-block">
          <div className="logo-zoom">
            <Image
              src="/assets/img/logos/header1/fof-logo.png"
              alt="FOF Logo"
              width={200}
              height={200}
              className="brand-logo"
            />
          </div>
          <div className="logo-title">Friends Of Friends</div>
        </div>

        {/* A2Z Group Companies */}
        <div className="logo-block">
          <div className="logo-zoom">
            <Image
              src="/assets/img/logos/header1/a2z-logo.png"
              alt="A2Z Logo"
              width={200}
              height={200}
              className="brand-logo"
            />
          </div>
          <div className="logo-title">A2Z Group Companies</div>
        </div>

      </div>

      {/* RIGHT — LANGUAGE + CONTACT */}
      <div className="logo-strip-right">

        <div className="lang-title">Select Your Language</div>

        <select className="header1-lang">
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
        </select>

        <button className="header1-contact">Contact Us</button>
      </div>

    </div>
  );
}
