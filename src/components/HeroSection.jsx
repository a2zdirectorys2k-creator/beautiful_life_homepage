"use client";

import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">

      {/* TOP GOLD BORDER */}
      <div className="hero-gold-border"></div>

      {/* HERO CONTENT */}
      <div className="hero-content">

        {/* LEFT BUTTERFLY */}
        <div className="hero-bfly hero-bfly-left">
          <Image
            src="/assets/img/logos/header1/butterfly (2).gif"
            alt="Butterfly Left"
            width={90}
            height={90}
            unoptimized
          />
        </div>

        {/* BEAUTIFUL LIFE TITLE */}
        <Image
          src="/assets/img/blf-title.png"
          alt="Beautiful Life Title"
          width={380}
          height={160}
          className="hero-blf-title"
        />
{/* RIGHT BUTTERFLY – MIRROR + FLY-IN */}
<div className="hero-bfly hero-bfly-right mirror">
  <Image
    src="/assets/img/logos/header1/butterfly (2).gif"
    alt="Butterfly Right"
    width={90}
    height={90}
    unoptimized
  />
</div>


        {/* JOIN / LOGIN / FORGOT */}
        <div className="hero-auth">
          <button className="hero-btn btn-join">Join Us</button>
          <button className="hero-btn btn-login">Login</button>
          <div className="hero-forgot">Forgot Password</div>
        </div>

      </div>

      {/* SUBTITLE */}
      <h2 className="hero-subtitle">
        JOIN BEAUTIFUL LIFE & MAKE LIFE BEAUTIFUL — EARN UNLIMITED & BE HAPPY.
      </h2>

    </div>
  );
}
