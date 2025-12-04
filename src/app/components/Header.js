"use client";

export default function Header() {
  return (
    <header className="w-full bg-white px-6 py-4 border-y-4 border-[#caa152]">
      <div
        className="max-w-[1450px] mx-auto grid grid-cols-5 items-center gap-4"
        style={{
          background: "linear-gradient(90deg, #e8f9f1, #f9fff4, #fff7e8)",
        }}
      >

        {/* COLUMN 1 — BLF LOGO + BUTTERFLY */}
        <div className="flex flex-col items-center relative">
          <img
            src="/assets/img/logos/header1/BEAUTIFUL LIFE LOGO 2.jpg"
            className="hover-zoom w-[150px] transition-transform duration-500"
            alt="BLF Logo"
          />
          <img
            src="/assets/img/logos/header1/butterfly (2).gif"
            className="hover-zoom w-[70px] absolute top-[115px] left-[145px] animate-fly transition-transform duration-500"
            alt="Butterfly"
          />
        </div>

        {/* COLUMN 2 — FOF */}
        <div className="text-center">
          <img
            src="/assets/img/logos/header1/fof.png"
            className="hover-zoom w-[110px] mx-auto transition-transform duration-500"
            alt="FOF Logo"
          />
          <div className="text-sm mt-1 font-semibold">Friends of Friends (FOF)</div>
        </div>

        {/* COLUMN 3 — A2Z */}
        <div className="text-center">
          <img
            src="/assets/img/logos/header1/a2zgroups.jpg"
            className="hover-zoom w-[130px] mx-auto transition-transform duration-500"
            alt="A2Z Logo"
          />
          <div className="text-sm mt-1 font-semibold">A2Z Group Companies</div>
        </div>

        {/* COLUMN 4 — REGISTER / LOGIN */}
        <div className="flex flex-col items-center gap-2">
          <button className="reg-btn hover-zoom transition-transform duration-500">
            Register
          </button>
          <button className="login-btn hover-zoom transition-transform duration-500">
            Login
          </button>
          <div className="text-xs mt-1 font-semibold">Forgot Password</div>
        </div>

        {/* COLUMN 5 — LANGUAGE */}
        <div className="text-center">
          <select className="hover-zoom transition-transform duration-500 border px-3 py-2 rounded-md font-semibold">
            <option>🌐 English ▼</option>
          </select>
          <div className="text-xs mt-1 font-semibold">Choose Your Language</div>
        </div>

      </div>

      {/* GLOBAL ZOOM EFFECT */}
      <style>{`
        .hover-zoom {
          transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
          transform-origin: center center;
          cursor: pointer;
        }
        .hover-zoom:hover {
          transform: scale(2); /* 200% BIG ZOOM */
          filter: drop-shadow(0 0 12px rgba(0,0,0,0.25));
        }
      `}</style>
    </header>
  );
}
