import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CertificationsImg from "./CertificationsImg";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";

const images = [
  {
    title: faSass,
    subtitle: "Simplifiez-vous le CSS avec Sass",
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/certificat-sass",
  },
  {
    title: faReact,
    subtitle: "Débutez avec React",
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/certificat-debutReact",
  },
  {
    title: faFigma,
    subtitle: "Créez une maquette web avec Figma",
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/certificat-maquetteFigma",
  },
  {
    title: faCss3Alt,
    subtitle: "Créez des animations CSS modernes",
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/certificat-animationCSS",
  },
];

export default function Certifications(props) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className="certifications">
      <div className="certifications-head">
        <FontAwesomeIcon icon={faGraduationCap} size="2xl" />
        <h2 className="certifications-head__title">Certifications</h2>
      </div>
      <a
        href="https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/diplome"
        target="_blank"
      >
        <p className="certifications__description">
          Cursus d'Intégrateur Web d'OpenClassrooms : maîtriser le développement
          d'interfaces web en React
        </p>
      </a>
      <div className="certifications-main">
        {images.map((image, index) => {
          return (
            <article
              className={
                index === current ? "certification" : "certification--hidden"
              }
              key={index}
            >
              {index === current && <CertificationsImg image={image} />}
            </article>
          );
        })}
        <div className="arrows">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className="left-arrow"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className="right-arrow"
            onClick={nextSlide}
            id="contact"
          />
        </div>
      </div>
    </section>
  );
}
