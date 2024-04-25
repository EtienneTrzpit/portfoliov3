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
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/v1708445589/portfolio/llmollq7b4nqyfi0dcus.pdf",
  },
  {
    title: faReact,
    subtitle: "Débutez avec React",
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/v1708445589/portfolio/ctwed3m1c00p9qslmhxn.pdf",
  },
  {
    title: faFigma,
    subtitle: "Créez une maquette web avec Figma",
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/v1708445589/portfolio/hu2lv4vimm4zlho0eflj.pdf",
  },
  {
    title: faCss3Alt,
    subtitle: "Créez des animations CSS modernes",
    pdf: "https://res.cloudinary.com/dbf29pedz/image/upload/v1708448613/portfolio/ocpne7bivjdklvtjp8op.pdf",
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
        href="https://res.cloudinary.com/dbf29pedz/image/upload/v1714069615/portfolio/qh2sjwpp67ijuhrx84mt.pdf"
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
