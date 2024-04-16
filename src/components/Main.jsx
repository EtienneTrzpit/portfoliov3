import "../index.css";
import Presentation from "./Presentation";
import SavoirFaire from "./SavoirFaire";
import Projets from "./Projets";
import Certifications from "./Certifications";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="content">
      <Presentation />
      <SavoirFaire />
      <Projets />
      <Certifications />
      <Contact />
    </main>
  );
}
