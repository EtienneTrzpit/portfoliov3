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
              Ton nom: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Ton Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Envoyer</button>
          </p>
        </form>
      </div>
    </section>
  );
}
