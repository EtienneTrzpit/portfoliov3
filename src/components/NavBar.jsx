import "../index.css";
import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 250) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item1").classList.add("active");
      } else if (currentScrollY >= 250 && currentScrollY < 800) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item2").classList.add("active");
      } else if (currentScrollY >= 800 && currentScrollY < 1300) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item3").classList.add("active");
      } else if (currentScrollY >= 1300 && currentScrollY < 1900) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item4").classList.add("active");
      } else if (currentScrollY >= 1900) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item5").classList.add("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navig--large">
      <ul>
        <li className="item1 active">
          <a href="#">Présentation</a>
        </li>
        <li className="item2">
          <a href="#savoir-faire">Compétences</a>
        </li>
        <li className="item3">
          <a href="#projets">Projets</a>
        </li>
        <li className="item4">
          <a href="#certifications">Certifications</a>
        </li>
        <li className="item5">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
