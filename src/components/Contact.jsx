import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Contact(props) {
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function validateEmail(email) {
    var emailReg = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
    );
    return emailReg.test(email);
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  }
  
  function handleSubmit(e) {
    if (validateEmail(email)) {
      alert("Votre message a bien été envoyé");
    } else {
      alert("Veuillez entrer une adresse email valide");
    }
  }*/

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
        <form name="contact" netlify>
          <p>
            <label>
              Name <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </section>
  );
}
