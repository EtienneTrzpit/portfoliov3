import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import Booki from '../assets/Booki.jpg'
import RidingCities from '../assets/RidingCities.png'
import { useState } from 'react'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'
import ProjetsImg from './ProjetsImg'
import { useEffect } from 'react'

const images = [
    {
      title: "Riding Cities",
      subtitle: "Projet HTML avec ajout de plusieurs sections",
      numero: "projet1 projet",
      image: RidingCities,
    },
    {
      title: "Booki",
      subtitle: "Projet HTML et CSS avec responsive design",
      numero: "projet2 projet",
      image: Booki,
    },
    {
      title: "Ohmyfood",
      subtitle: "Projet en cours de réalisation",
      numero: "projet3 projet",
      image: RidingCities,
    },
    {
      title: "Print it",
      subtitle: "Projet en cours de réalisation",
      numero: "projet4 projet",
      image: Booki,
    },
    {
      title: "Sophie Bluel",
      subtitle: "Projet en cours de réalisation",
      numero: "projet5 projet",
      image: RidingCities,
    },
    {
      title: "Kasa",
      subtitle: "Projet en cours de réalisation",
      numero: "projet6 projet",
      image: Booki,
    },
    {
      title: "SEO Nina",
      subtitle: "Projet en cours de réalisation",
      numero: "projet7 projet",
      image: RidingCities,
    },
    {
      title: "724 Events",
      subtitle: "Projet en cours de réalisation",
      numero: "projet8 projet",
      image: Booki,
    },
    {
      title: "Argent Bank",
      subtitle: "Projet en cours de réalisation",
      numero: "projet9 projet",
      image: RidingCities,
    }
  ];
  
  function typeOfWindow() {
    if (window.innerWidth > 1024) {
      return "desktop";
    } else if (window.innerWidth > 768) {
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
      console.log(current);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
      console.log(current);
    };

    const nextSlideDesktop = () => {
      setCurrentDesktop(currentDesktop === 7 ? 1 : currentDesktop + 3);
      console.log(currentDesktop);
    };

    const prevSlideDesktop = () => {
      setCurrentDesktop(currentDesktop === 1 ? 7 : currentDesktop - 3);
      console.log(currentDesktop);
    };

    if (windowType === "mobile" || windowType === "tablet") {
      return (
        console.log(current),
        <section  ref={ref => props.cardRefs.current[0] = ref} className="cards projects" id='projets'>
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
    } else if (windowType === "desktop") {
      return (
        console.log(currentDesktop),
        <section  ref={ref => props.cardRefs.current[0] = ref} className="cards projects" id='projets'>
          <div className="cards-header">
            <FontAwesomeIcon icon={faCodeFork} size="2xl" />
            <h2 className="cards-header-title">Projets</h2>
          </div>
          <div className="cards-main">
            {images.map((image, index) => {
              return (
                <article
                  className={
                    index === currentDesktop || index === currentDesktop - 1 || index === currentDesktop + 1
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
      console.log("error");
      return <></>;
    }
}
  
  
  
