"use client";

import Image from "next/image";
import Link from "next/link";
import "./Header1.css";

export default function Header1() {
  return (
    <div className="logo-strip-container">

      {/* LEFT — 3 LOGOS (BLF, FOF, A2Z) */}
      <div className="logo-strip-left">

        {/* Beautiful Life */}
        <Link href="/blf" className="logo-block">
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
        </Link>

        {/* Friends Of Friends */}
        <Link href="/fof" className="logo-block">
          <div className="logo-zoom">
            <Image
              src="/assets/img/logos/header1/fof-logo.png"
              alt="Friends Of Friends Logo"
              width={200}
              height={200}
              className="brand-logo"
            />
          </div>
          <div className="logo-title">Friends Of Friends</div>
        </Link>

        {/* A2Z Group Companies */}
        <Link href="/a2z" className="logo-block">
          <div className="logo-zoom">
            <Image
              src="/assets/img/logos/header1/a2z-logo.png"
              alt="A2Z Group Companies Logo"
              width={200}
              height={200}
              className="brand-logo"
            />
          </div>
          <div className="logo-title">A2Z Group Companies</div>
        </Link>

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
