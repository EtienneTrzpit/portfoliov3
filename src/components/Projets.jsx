import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import ProjetsImg from "./ProjetsImg";
import { useEffect } from "react";

const images = [
  {
    title: "Kasa",
    skills: ["React", "Sass", "Transition"],
    subtitle: "Annonces immobilières de location",
    description:
      "C'est une implémentation du front-end d'une application web de location immobilière. J'ai utilisé React Router pour gérer les routes et les paramètres d'URL. J'ai également utilisé un fichier JSON pour récupérer les données des logements.",
    linkPicture:
      "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/projet-Kasa",
    linkSite: "https://etiennetrzpit.github.io/kasa/",
    linkGithub: "https://github.com/EtienneTrzpit/kasa",
  },
  {
    title: "Ohmyfood",
    skills: ["Sass", "Animation"],
    subtitle: "Réservez le menu qui vous convient",
    description:
      "C'est un site mobile first responsive avec animations et transitions CSS. Il permet la présentation de menus de restaurants. Il m'a permis de travailler sur le CSS et de découvrir les animations et les transitions.",
    linkPicture:
      "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/projet-Ohmyfood",
    linkSite: "https://etiennetrzpit.github.io/ohmyfood/",
    linkGithub: "https://github.com/EtienneTrzpit/ohmyfood",
  },
  {
    title: "Booki",
    skills: ["HTML", "CSS", "Responsive"],
    subtitle: "Réservations pour les vacances",
    description:
      "C'est un site web pour la recherche de logements. J'ai utilisé Flexbox pour le design et j'ai rendu le site responsive. J'ai également utilisé des balises sémantiques pour l'accessibilité.",
    linkPicture:
      "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/projet-Booki",
    linkSite: "https://etiennetrzpit.github.io/booki-starter-code/",
    linkGithub: "https://github.com/EtienneTrzpit/booki-starter-code",
  },
  {
    title: "Print-it",
    skills: ["HTML", "JavaScript"],
    subtitle: "Création d'un carrousel",
    description:
      "C'est un site web avec un carousel de photos. J'ai utilisé JavaScript pour ajouter des fonctionnalités comme le défilement des photos et les flèches de navigation. J'ai également utilisé des événements pour les interactions avec l'utilisateur.",
    linkPicture:
      "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/projet-Print-it",
    linkSite: "https://etiennetrzpit.github.io/Print-it-JS-1/",
    linkGithub: "https://github.com/EtienneTrzpit/Print-it-JS-1",
  },
  {
    title: "Nina Carducci",
    skills: ["SEO", "Optimisation"],
    subtitle: "Optimisation d'un portfolio",
    description:
      "C'est un site web pour une photographe dont j'ai optimisé les performances. J'ai  utilisé Lighthouse et Wave pour analyser le site et apporter des améliorations. J'ai également ajouté des balises meta et des attributs alt pour l'accessibilité.",
    linkPicture:
      "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/projet-NinaCarducci",
    linkSite: "https://etiennetrzpit.github.io/ninacarducci/",
    linkGithub: "https://github.com/EtienneTrzpit/ninacarducci",
  },
  {
    title: "Sophie Bluel",
    skills: ["JavaScript", "API"],
    subtitle: "Portfolio de photographe",
    description:
      "C'est un site web pour une photographe. J'ai utilisé JavaScript pour ajouter des fonctionnalités comme un carrousel et un filtre de recherche. J'ai également utilisé une API pour récupérer les données des photos.",
    linkPicture:
      "https://res.cloudinary.com/dbf29pedz/image/upload/f_auto,q_auto/v1/portfolio/projet-SophieBluel",
    linkSite: "https://etiennetrzpit.github.io/Portfolio-SophieBluel-FrontEnd/",
    linkGithub:
      "https://github.com/EtienneTrzpit/Portfolio-SophieBluel-FrontEnd",
  },
];

function typeOfWindow() {
  if (window.innerWidth > 1024) {
    return "desktop";
  } else if (window.innerWidth > 767) {
    return "tablet";
  } else {
    return "mobile";
  }
}

export default function Projets(props) {
  const [windowType, setWindowType] = useState("");

  useEffect(() => {
    setWindowType(typeOfWindow());
    const resizeListener = () => {
      setWindowType(typeOfWindow());
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const [currentDesktop, setCurrentDesktop] = useState(1);
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlideDesktop = () => {
    setCurrentDesktop(currentDesktop === 4 ? 1 : currentDesktop + 3);
  };

  const prevSlideDesktop = () => {
    setCurrentDesktop(currentDesktop === 1 ? 4 : currentDesktop - 3);
  };

  if (windowType === "mobile") {
    return (
      <section className="projects">
        <div className="projects-head">
          <FontAwesomeIcon icon={faCodeFork} size="2xl" />
          <h2 className="projects-head__title">Projets</h2>
        </div>
        <div className="projects-main">
          {images.map((image, index) => {
            return (
              <article
                className={index === current ? "project" : "project--hidden"}
                key={index}
              >
                {index === current && <ProjetsImg image={image} />}
              </article>
            );
          })}
        </div>
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
            id="certifications"
          />
        </div>
      </section>
    );
  } else if (windowType === "desktop" || windowType === "tablet") {
    return (
      <section className="projects">
        <div className="projects-head">
          <FontAwesomeIcon icon={faCodeFork} size="2xl" />
          <h2 className="projects-head__title">Projets</h2>
        </div>
        <div className="projects-main">
          {images.map((image, index) => {
            return (
              <article
                className={
                  index === currentDesktop ||
                  index === currentDesktop - 1 ||
                  index === currentDesktop + 1
                    ? "project"
                    : "project--hidden"
                }
                key={index}
              >
                {index === currentDesktop - 1 && <ProjetsImg image={image} />}
                {index === currentDesktop && <ProjetsImg image={image} />}
                {index === currentDesktop + 1 && <ProjetsImg image={image} />}
              </article>
            );
          })}
        </div>
        <div className="arrows">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className="left-arrow"
            onClick={prevSlideDesktop}
          />
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className="right-arrow"
            onClick={nextSlideDesktop}
            id="certifications"
          />
        </div>
      </section>
    );
  } else {
    // go to error route
    return <p>error</p>;
  }
}
