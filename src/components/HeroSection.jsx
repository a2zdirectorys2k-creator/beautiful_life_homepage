"use client";

export default function HeroSection() {
  return (
    <div className="hero-container">

      {/* Left Butterfly */}
      <img 
        src="/assets/img/logos/header1/butterfly (2).gif"
        className="hero-butterfly hero-butterfly-left"
      />

      {/* Beautiful Life Title Image */}
      <img 
        src="/assets/img/blf-title.png"
        className="hero-title-image"
      />

      {/* Right Butterfly (Face Right → Left) */}
<img
  src="/assets/img/logos/header1/butterfly (2).gif"
  className="hero-butterfly hero-butterfly-right butterfly-reverse"
/>


      {/* Buttons Section */}
      <div className="hero-buttons">
        <button className="reg-btn">Register</button>
        <button className="login-btn">Login</button>
        <div className="forgot">Forgot Password</div>
      </div>

    </div>
  );
}
