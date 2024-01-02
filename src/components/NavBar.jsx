import "../index.css";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("item1");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 400) {
        setActiveItem("item1");
      } else if (currentScrollY >= 400 && currentScrollY < 800) {
        setActiveItem("item3");
      } else if (currentScrollY >= 800 && currentScrollY < 1200) {
        setActiveItem("item4");
      } else if (currentScrollY >= 1200 && currentScrollY < 1600) {
        setActiveItem("item2");
      } else if (currentScrollY >= 1600) {
        setActiveItem("item5");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className={activeItem === "item1" ? "active" : ""}>
          <a onClick={() => handleItemClick("item1")} href="#presentation">
            Présentation
          </a>
        </li>
        <li className={activeItem === "item3" ? "active" : ""}>
          <a onClick={() => handleItemClick("item3")} href="#projets">
            Projets
          </a>
        </li>
        <li className={activeItem === "item4" ? "active" : ""}>
          <a onClick={() => handleItemClick("item4")} href="#certifications">
            Certifications
          </a>
        </li>
        <li className={activeItem === "item2" ? "active" : ""}>
          <a onClick={() => handleItemClick("item2")} href="#savoir-faire">
            Savoir-faire
          </a>
        </li>
        <li className={activeItem === "item5" ? "active" : ""}>
          <a onClick={() => handleItemClick("item5")} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
