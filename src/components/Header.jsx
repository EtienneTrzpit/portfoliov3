import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../assets/logo/logo.svg";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleItemClick = (answer) => {
    setActiveMenu(answer);
  };
  return (
    <>
      <header className={activeMenu ? "hidden" : "head"}>
        <img src={logo} alt="logo" className="head__logo" />
        <FontAwesomeIcon
          icon={faBars}
          size="4x"
          className="head__hamburger"
          onClick={() => handleItemClick(true)}
        />
      </header>
      <nav className={activeMenu ? "navig" : "navig--hidden"}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          className="navig__close"
          onClick={() => handleItemClick(false)}
        />
        <ul className="navig__list">
          <li onClick={() => handleItemClick(false)}>
            <a href="#">Présentation</a>
          </li>
          <li onClick={() => handleItemClick(false)}>
            <a href="#savoir-faire">Savoir-faire</a>
          </li>
          <li onClick={() => handleItemClick(false)}>
            <a href="#projets">Projets</a>
          </li>
          <li onClick={() => handleItemClick(false)}>
            <a href="#certifications">Certifications</a>
          </li>
          <li className="navig__contact" onClick={() => handleItemClick(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
