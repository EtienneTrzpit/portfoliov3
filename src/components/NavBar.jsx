import "../index.css";
import logo from "../assets/logo/logo2.svg";

export default function NavBar() {
  return (
    <nav className="navig--large">
      <img src={logo} alt="logo" className="logo-desktop" />
      <ul>
        <li className="item1">
          <a href="#">Présentation</a>
          <span className="select-hidden"></span>
        </li>
        <li className="item2">
          <a href="#savoir-faire">Compétences</a>
          <span className="select-hidden"></span>
        </li>
        <li className="item3">
          <a href="#projets">Projets</a>
          <span className="select-hidden"></span>
        </li>
        <li className="item4">
          <a href="#certifications">Certifications</a>
          <span className="select-hidden"></span>
        </li>
        <li className="item5">
          <a href="#contact">Contact</a>
          <span className="select-hidden"></span>
        </li>
      </ul>
    </nav>
  );
}
