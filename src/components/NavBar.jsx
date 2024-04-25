import "../index.css";
import { useEffect } from "react";
import logo from "../assets/logo/logo2.svg";

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 250) {
        document.querySelector(".arrow-up")?.classList.remove("arrow-up");
        document.querySelector(".item1 span").classList.add("arrow-up");
      } else if (currentScrollY >= 250 && currentScrollY < 800) {
        document.querySelector(".arrow-up")?.classList.remove("arrow-up");
        document.querySelector(".item2 span").classList.add("arrow-up");
      } else if (currentScrollY >= 800 && currentScrollY < 1300) {
        document.querySelector(".arrow-up")?.classList.remove("arrow-up");
        document.querySelector(".item3 span").classList.add("arrow-up");
      } else if (currentScrollY >= 1300 && currentScrollY < 1900) {
        document.querySelector(".arrow-up")?.classList.remove("arrow-up");
        document.querySelector(".item4 span").classList.add("arrow-up");
      } else if (currentScrollY >= 1900) {
        document.querySelector(".arrow-up")?.classList.remove("arrow-up");
        document.querySelector(".item5 span").classList.add("arrow-up");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navig--large">
      <img src={logo} alt="logo" className="logo-desktop" />
      <ul>
        <li className="item1">
          <a href="#">Présentation</a>
          <span className="select-hidden arrow-up"></span>
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
