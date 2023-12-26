import { NavLink } from "react-router-dom";
import "../index.css";

function Error() {
  return (
    <>
      <h1 className="about-title">Erreur</h1>
      <p>Un erreur est survenue. Veuillez retourner à la page d'accueil.</p>
      <NavLink to="./" exact="true">
        Page d'accueil
      </NavLink>
    </>
  );
}

export default Error;
