"use client";

export default function Header() {
  return (
    <header className="header w-full px-6 py-4">

      {/* COLUMN 1 – BLF LOGO + BUTTERFLY */}
      <div className="blf-col flex flex-col items-center relative">

        {/* BLF LOGO */}
        <img
          src="/assets/img/logos/header1/blf-logo.png"
          className="hover-zoom w-[130px]"
          alt="BLF Logo"
        />

        {/* BUTTERFLY */}
        <img
          src="/assets/img/logos/header1/butterfly (2).gif"
          className="hover-zoom w-[60px] absolute top-[110px] left-[140px] animate-fly md:w-[65px]"
          alt="Butterfly"
        />
      </div>

      {/* COLUMN 2 — FOF */}
      <div className="fof-col text-center">
        <img
          src="/assets/img/logos/header1/fof.jpg"
          className="fof-logo hover-zoom w-[80px] mx-auto"
          alt="FOF Logo"
        />
        <div className="fof-title text-sm mt-1">Friends of Friends (FOF)</div>
      </div>

      {/* COLUMN 3 — A2Z */}
      <div className="a2z-col text-center">
        <img
          src="/assets/img/logos/header1/a2zgroups.jpg"
          className="a2z-logo hover-zoom w-[90px] mx-auto"
          alt="A2Z Logo"
        />
        <div className="a2z-title text-sm mt-1">A2Z Group Companies</div>
      </div>

      {/* COLUMN 4 — REGISTER / LOGIN */}
      <div className="auth-col flex flex-col items-center gap-1">
        <button className="reg-btn hover-zoom">Register</button>
        <button className="login-btn hover-zoom">Login</button>
        <div className="forgot text-xs mt-1">Forgot Password</div>
      </div>

      {/* COLUMN 5 — LANGUAGE */}
      <div className="lang-col text-center">
        <select className="lang-select hover-zoom">
          <option>🌐 English ▼</option>
        </select>
        <div className="lang-title text-xs mt-1">
          Choose Your Language
        </div>
      </div>

    </header>
  );
}
