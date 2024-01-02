import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function FooterAbout() {
  return (
    <footer className="footer">
      <p className="footer-about">
        Tous droits réservés -{" "}
        <time dateTime="2023-12-13">13 décembre 2023</time>
      </p>
      <nav>
        <ul className="pages">
          <li className="pages-link">
            <NavLink
              to="/"
              exact="true"
              activeclassname="selected"
              title="Accueil"
            >
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li className="pages-link">
            <NavLink
              to="/confidentiality"
              activeclassname="selected"
              title="Confidentialité"
            >
              <FontAwesomeIcon icon={faLock} />
            </NavLink>
          </li>
          <li className="pages-link">
            <NavLink to="/cookies" activeclassname="selected" title="Cookies">
              <FontAwesomeIcon icon={faCookieBite} />
            </NavLink>
          </li>
          <li className="pages-link">
            <NavLink
              to="/legal-notice"
              activeclassname="selected"
              title="Mentions légales"
            >
              <FontAwesomeIcon icon={faGavel} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default FooterAbout;
