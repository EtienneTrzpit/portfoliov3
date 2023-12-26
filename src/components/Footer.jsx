import { NavLink } from "react-router-dom";
import "../index.css";

export default function Footer() {
  return (
    <footer className="copyright">
      <nav>
        <ul className="pages">
          <li className="pages-link">
            <NavLink to="./" exact="true" activeclassname="selected">
              Accueil
            </NavLink>
          </li>
          <li className="pages-link">
            <NavLink to="./confidentiality" activeclassname="selected">
              Confidentialité
            </NavLink>
          </li>
          <li className="pages-link">
            <NavLink to="./cookies" activeclassname="selected">
              Cookies{" "}
            </NavLink>
          </li>
          <li className="pages-link">
            <NavLink to="./legal-notice" activeclassname="selected">
              Mentions légales
            </NavLink>
          </li>
        </ul>
      </nav>
      <p>©Copyright 2023 - Etienne Trzpit</p>
    </footer>
  );
}
