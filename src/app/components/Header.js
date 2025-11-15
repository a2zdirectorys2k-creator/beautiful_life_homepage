<header className="header">

 {/* COLUMN 1 — BLF LOGO + TITLE + BUTTERFLY */}
<div className="blf-col">
  <div className="relative inline-flex items-center blf-wrap">

    {/* Logo */}
    <img 
      src="/assets/img/logos/header1/BEAUTIFUL LIFE LOGO 2.jpg" 
      className="blf-logo"
    />

    {/* Title */}
    <div className="blf-title ml-2">Beautiful Life</div>
{/* Butterfly */}
<img
  src="/assets/img/logos/header1/butterfly (2).gif"
  className="
    butterfly
    absolute
    bottom-[4px]       /* sits on title in mobile */
    right-[6px]
    w-6 h-6            /* mobile size */
    md:w-10 md:h-10    /* desktop size */
    md:bottom-[6px]
    md:right-[8px]
    translate-x-0 translate-y-1     /* small lift */
    md:translate-x-0 md:translate-y-0
  "
/>




  </div>
</div>

  {/* COLUMN 2 — FOF */}
  <div className="fof-col">
    <img src="/assets/img/logos/header1/fof.jpg" className="fof-logo" />
    <div className="fof-title">Friends of Friends (FOF)</div>
  </div>

  {/* COLUMN 3 — A2Z */}
  <div className="a2z-col">
    <img src="/assets/img/logos/header1/a2zgroups.jpg" className="a2z-logo" />
    <div className="a2z-title">A2Z Group Companies</div>
  </div>

  {/* COLUMN 4 — REGISTER / LOGIN */}
  <div className="auth-col">
    <button className="reg-btn">Register</button>
    <button className="login-btn">Login</button>
    <div className="forgot">Forgot Password</div>
  </div>

  {/* COLUMN 5 — LANGUAGE */}
  <div className="lang-col">
    <select className="lang-select">
      <option>🌐 English ▼</option>
    </select>
    <div className="lang-title">Choose Your Language</div>
  </div>

</header>
