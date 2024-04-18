import "../index.css";
import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 400) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item1").classList.add("active");
      } else if (currentScrollY >= 400 && currentScrollY < 1000) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item2").classList.add("active");
      } else if (currentScrollY >= 1000 && currentScrollY < 1500) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item3").classList.add("active");
      } else if (currentScrollY >= 1500 && currentScrollY < 2100) {
        document.querySelector(".active")?.classList.remove("active");
        document.querySelector(".item4").classList.add("active");
      } else if (currentScrollY >= 2100) {
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
