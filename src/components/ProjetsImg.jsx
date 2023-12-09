import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjetsImg({ image }) {
  const numero = image.numero;

  return (
    <div className={numero} key={image.numero}>
      <div className="titles-projects">
        <a href={image.link} target="_blank" aria-label="github">
          <FontAwesomeIcon icon={faGithub} size="2x" className="github" />
        </a>
        <h3 className="cards-box-title">{image.title}</h3>
      </div>
      <p>{image.subtitle}</p>
    </div>
  );
}
