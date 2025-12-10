"use client";

import React from "react";
import "./header2Styles.css";

export default function Header2Component() {
  return (
    <>
      {/* GOLDEN BORDER ABOVE HEADER2 */}
      <div className="header2-top-gold"></div>

      <div className="header2-container">
        <div className="header2-menu">
          <a className="nav-btn" href="/">Home</a>
          <a className="nav-btn" href="/about">About Us</a>

          {/* Earn Unlimited in RED */}
          <a className="nav-btn red-btn" href="/earn">Earn Unlimited</a>

          <a className="nav-btn" href="/a2z">A2Z Companies</a>

          {/* Join Us in RED */}
          <a className="nav-btn red-btn" href="/join">Join Us</a>

          <a className="nav-btn" href="/events">Events</a>
          <a className="nav-btn" href="/stars">Our Super Stars</a>
          <a className="nav-btn" href="/learn">Learn to Earn</a>

          <a className="nav-btn" href="/news">News</a>
          <a className="nav-btn" href="/compliments">Compliments</a>
          <a className="nav-btn" href="/complaints">Complaints</a>
        </div>
      </div>
    </>
  );
}
