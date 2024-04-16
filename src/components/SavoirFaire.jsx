import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function SavoirFaire(props) {
  return (
    <section className="knowledge" id="savoir-faire">
      <div className="knowledge-head">
        <FontAwesomeIcon icon={faBrain} size="2xl" />
        <h2 className="knowledge-head__title">Savoir-Faire</h2>
      </div>
      <div className="knowledge-main">
        <article className="skill">
          <h3 className="skill__title">Front-End</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHtml5} size="xl" className="icons" />
              HTML5 Sémantique
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3Alt} size="xl" className="icons" />
              CSS3 Animation
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareJs} size="xl" className="icons" />
              Javascript
            </li>
            <li>
              <FontAwesomeIcon icon={faSass} size="lg" className="icons" />
              Sass
            </li>
          </ul>
        </article>
        <article className="skill">
          <h3 className="skill__title">Déploiement</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGitAlt} size="xl" className="icons" />
              Git
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size="lg" className="icons" />
              GitHub
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} size="lg" className="icons" />
              VS Code
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                size="lg"
                className="icons"
              />
              Netlify
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
