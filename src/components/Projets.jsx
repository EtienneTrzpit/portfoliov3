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
  
  export default function Projets() {
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
  
    const [current, setCurrent] = useState(0);
    const length = images.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (windowType === "mobile" || windowType === "tablet") {
      return (
        <section className="cards projects">
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
                      ? "cards-box box-projects active"
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
        <section className="cards projects">
          <div className="cards-header">
            <FontAwesomeIcon icon={faCodeFork} size="2xl" />
            <h2 className="cards-header-title">Projets</h2>
          </div>
          <div className="cards-main">
            <article className='projet1 projet'>
              <h3 className="cards-box-title titles-projects">Riding Cities</h3>
              <p>Projet HTML avec ajout de plusieurs sections</p>
            </article>
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
    } else {
      // windowType is "mobile" or "tablet", but here you can add a default
      // behavior for an unexpected value of windowType
      return <></>;
    }
  }