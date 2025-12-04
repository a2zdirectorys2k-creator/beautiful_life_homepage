export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-container">

        <div className="logo-item">
          <img src="/assets/img/logos/header1/BEAUTIFUL LIFE LOGO 2.jpg" className="logo-img" />
          <div className="logo-title">Beautiful Life</div>
        </div>

        <div className="logo-item">
          <img src="/assets/img/logos/header1/fof.png" className="logo-img" />
          <div className="logo-title">Friends of Friends (FOF)</div>
        </div>

        <div className="logo-item">
          <img src="/assets/img/logos/header1/a2zgroups.jpg" className="logo-img" />
          <div className="logo-title">A2Z Group Companies</div>
        </div>

        <div className="lang-col">
          <select className="lang-select">
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
          <div className="lang-title">Choose Your Language</div>
        </div>

      </div>
    </div>
  );
}
