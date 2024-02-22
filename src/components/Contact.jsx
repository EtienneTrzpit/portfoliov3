import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

export default function Contact(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      ref={(ref) => (props.cardRefs.current[3] = ref)}
      className="cards contact"
      id="contact"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isMobile
          ? { animation: "none" }
          : {
              animationName: "pulse",
              animationDuration: "2s",
              animationIterationCount: "infinite",
              animationPlayState: isHovered ? "paused" : "running",
            }
      }
    >
      <div className="cards-header">
        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        <h2 className="cards-header-title">Contact</h2>
      </div>
      <div className="cards-main contact-main">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Ton nom:{" "}
              <input
                className="message"
                type="text"
                name="name"
                required
                autoComplete="on"
              />
            </label>
          </p>
          <p>
            <label>
              Ton Email:{" "}
              <input
                className="message"
                type="email"
                name="email"
                required
                autoComplete="on"
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                className="message"
                name="message"
                required
                autoComplete="on"
              ></textarea>
            </label>
          </p>
          <div>
            {/* formulaire de consentement RGPD */}
            <div className="consentement">
              <input
                type="checkbox"
                id="consentement"
                name="consentement"
                required
                autoComplete="on"
              />
              <label htmlFor="consentement">
                Je consens à ce que ce site stocke les informations que j’ai
                envoyées afin de pouvoir répondre à ma demande.
              </label>
            </div>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  );
}
