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
    title: "Ohmyfood",
    skills: ["HTML", "CSS", "responsive", "animation"],
    subtitle: "Site pour restaurant",
    url: "src/assets/images/food.avif",
    linkSite: "https://etiennetrzpit.github.io/ohmyfood/",
    linkGithub: "https://github.com/EtienneTrzpit/ohmyfood",
  },
  {
    title: "Kasa",
    skills: ["React", "API"],
    subtitle: "Site de location de logements",
    url: "src/assets/images/kasa.avif",
    linkSite: "https://etiennetrzpit.github.io/kasa/",
    linkGithub: "https://github.com/EtienneTrzpit/kasa",
  },
  {
    title: "Sophie Bluel",
    skills: ["JavaScript", "API"],
    subtitle: "Portfolio de photographe",
    url: "src/assets/images/sophie.avif",
    linkSite: "https://etiennetrzpit.github.io/Portfolio-SophieBluel-FrontEnd/",
    linkGithub:
      "https://github.com/EtienneTrzpit/Portfolio-SophieBluel-FrontEnd",
  },
  {
    title: "Booki",
    skills: ["HTML", "CSS", "responsive"],
    subtitle: "Site de recherche de logements",
    url: "src/assets/images/booki.avif",
    linkSite: "https://etiennetrzpit.github.io/booki-starter-code/",
    linkGithub: "https://github.com/EtienneTrzpit/booki-starter-code",
  },
  {
    title: "Print-it",
    skills: ["JavaScript"],
    subtitle: "Création d'un carousel",
    url: "src/assets/images/print.avif",
    linkSite: "https://etiennetrzpit.github.io/Print-it-JS-1/",
    linkGithub: "https://github.com/EtienneTrzpit/Print-it-JS-1",
  },
  {
    title: "Nina Carducci",
    skills: ["SEO", "Optimisation"],
    subtitle: "Optimisation d'un site web",
    url: "src/assets/images/nina.avif",
    linkSite: "https://etiennetrzpit.github.io/ninacarducci/",
    linkGithub: "https://github.com/EtienneTrzpit/ninacarducci",
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
      <section
        ref={(ref) => (props.cardRefs.current[0] = ref)}
        className="cards projects"
        id="projets"
      >
        <div className="cards-header">
          <FontAwesomeIcon icon={faCodeFork} size="2xl" />
          <h2 className="cards-header-title">Projets</h2>
        </div>
        <div className="cards-main">
          {images.map((image, index) => {
            return (
              <article
                className={
                  index === current
                    ? "cards-box box-projects box-active"
                    : "cards-box box-projects box-hidden"
                }
                key={index}
              >
                {index === current && <ProjetsImg image={image} />}
              </article>
            );
          })}
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className="left-arrow"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className="right-arrow"
            onClick={nextSlide}
          />
        </div>
      </section>
    );
  } else if (windowType === "desktop" || windowType === "tablet") {
    return (
      <section
        ref={(ref) => (props.cardRefs.current[0] = ref)}
        className="cards projects"
        id="projets"
      >
        <div className="cards-header">
          <FontAwesomeIcon icon={faCodeFork} size="2xl" />
          <h2 className="cards-header-title">Projets</h2>
        </div>
        <div className="cards-main">
          {images.map((image, index) => {
            return (
              <article
                className={
                  index === currentDesktop ||
                  index === currentDesktop - 1 ||
                  index === currentDesktop + 1
                    ? "box-active"
                    : "box-hidden"
                }
                key={index}
              >
                {index === currentDesktop - 1 && <ProjetsImg image={image} />}
                {index === currentDesktop && <ProjetsImg image={image} />}
                {index === currentDesktop + 1 && <ProjetsImg image={image} />}
              </article>
            );
          })}
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className="left-arrow"
            onClick={prevSlideDesktop}
          />
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            className="right-arrow"
            onClick={nextSlideDesktop}
          />
        </div>
      </section>
    );
  } else {
    // go to error route
    return <p>error</p>;
  }
}
