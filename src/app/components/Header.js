"use client";

export default function Header() {
  return (
    <header className="header w-full px-6 py-4">

      {/* COLUMN 1 – BLF LOGO + BUTTERFLY */}
      <div className="blf-col flex flex-col items-center relative">

        {/* BLF LOGO */}
        <div className="transition-transform duration-500 hover:scale-125">
          <img
            src="/assets/img/logos/header1/blf-logo.png"
            className="w-[130px]"
            alt="BLF Logo"
          />
        </div>

        {/* BUTTERFLY */}
        <div className="absolute top-[110px] left-[140px] transition-transform duration-500 hover:scale-125">
          <img
            src="/assets/img/logos/header1/butterfly (2).gif"
            className="w-[60px] md:w-[65px] animate-fly"
            alt="Butterfly"
          />
        </div>
      </div>

      {/* COLUMN 2 — FOF */}
      <div className="fof-col text-center">
        <div className="transition-transform duration-500 hover:scale-125">
          <img
            src="/assets/img/logos/header1/fof.jpg"
            className="fof-logo w-[80px] mx-auto"
            alt="FOF Logo"
          />
        </div>
        <div className="fof-title text-sm mt-1">Friends of Friends (FOF)</div>
      </div>

      {/* COLUMN 3 — A2Z */}
      <div className="a2z-col text-center">
        <div className="transition-transform duration-500 hover:scale-125">
          <img
            src="/assets/img/logos/header1/a2zgroups.jpg"
            className="a2z-logo w-[90px] mx-auto"
            alt="A2Z Logo"
          />
        </div>
        <div className="a2z-title text-sm mt-1">A2Z Group Companies</div>
      </div>

      {/* COLUMN 4 — REGISTER / LOGIN */}
      <div className="auth-col flex flex-col items-center gap-1">
        <button className="reg-btn transition-transform duration-500 hover:scale-125">
          Register
        </button>
        <button className="login-btn transition-transform duration-500 hover:scale-125">
          Login
        </button>
        <div className="forgot text-xs mt-1">Forgot Password</div>
      </div>

      {/* COLUMN 5 — LANGUAGE */}
      <div className="lang-col text-center">
        <select className="lang-select transition-transform duration-500 hover:scale-125">
          <option>🌐 English ▼</option>
        </select>
        <div className="lang-title text-xs mt-1">Choose Your Language</div>
      </div>

    </header>
  );
}
