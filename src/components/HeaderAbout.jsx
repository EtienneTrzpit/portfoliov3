import logo from "../assets/logo/logo.svg";
import "../index.css";

function HeaderAbout() {
  return (
    <header className="header-about">
      <img src={logo} alt="Logo du site" className="logo-about" />
    </header>
  );
}

export default HeaderAbout;
