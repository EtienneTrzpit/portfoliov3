import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo-about.svg";
import "../index.css";

function HeaderAbout() {
  return (
    <header>
      <img src={logo} alt="Logo du site" className="logo-about" />
      <nav>
        <ul>
          <li className="about-link">
            <NavLink to="/" exact="true">
              Accueil
            </NavLink>
          </li>
          <li className="about-link">
            <NavLink to="/confidentiality">Confidentialité</NavLink>
          </li>
          <li className="about-link">
            <NavLink to="/cookies">Cookies </NavLink>
          </li>
          <li className="about-link">
            <NavLink to="/legal-notice">Mentions légales</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderAbout;
