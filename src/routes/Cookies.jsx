import { NavLink } from "react-router-dom";
import "../index.css";
import HeaderAbout from "../components/HeaderAbout";
import FooterAbout from "../components/FooterAbout";

function Cookies() {
  return (
    <>
      <HeaderAbout />
      <main className="about-main">
        <h1 className="about-title">COOKIES UTILISES</h1>
        <p>Aucun cookie n'est utilisé sur ce site.</p>
      </main>
      <FooterAbout />
    </>
  );
}

export default Cookies;
