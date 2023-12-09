import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  return (
    <section
      ref={(ref) => (props.cardRefs.current[3] = ref)}
      className="cards contact"
      id="contact"
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
              <input className="message" type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Ton Email:{" "}
              <input className="message" type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea className="message" name="message" required></textarea>
            </label>
          </p>
          <p>
            {/* formulaire de consentement RGPD */}
            <div className="consentement">
              <input
                type="checkbox"
                id="consentement"
                name="consentement"
                required
              />
              <label htmlFor="consentement">
                Je consens à ce que ce site stocke les informations que j’ai
                envoyées afin de pouvoir répondre à ma demande.
              </label>
            </div>
            <button type="submit">Envoyer</button>
          </p>
        </form>
      </div>
    </section>
  );
}
