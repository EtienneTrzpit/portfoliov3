import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  return (
    <section className="contact">
      <div className="contact-head">
        <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        <h2 className="contact-head__title">Contact</h2>
      </div>
      <div className="contact-main">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Ton nom:
              <input
                className="contact__name"
                type="text"
                name="name"
                required
                autoComplete="on"
              />
            </label>
          </p>
          <p>
            <label>
              Ton Email:
              <input
                className="contact__email"
                type="email"
                name="email"
                required
                autoComplete="on"
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea
                className="contact__message"
                name="message"
                required
                autoComplete="on"
              ></textarea>
            </label>
          </p>
          <div>
            {/* formulaire de consentement RGPD */}
            <div className="contact__consentement">
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
            <button type="submit" className="button">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
