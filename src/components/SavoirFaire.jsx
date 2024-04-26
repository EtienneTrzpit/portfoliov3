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
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function SavoirFaire(props) {
  return (
    <section className="knowledge">
      <div className="knowledge-head">
        <FontAwesomeIcon icon={faBrain} size="2xl" />
        <h2 className="knowledge-head__title">Compétences</h2>
      </div>
      <div className="knowledge-main">
        <article className="skill">
          <ul>
            <li>
              <FontAwesomeIcon icon={faHtml5} size="xl" className="icons" />
              <p>HTML5</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3Alt} size="xl" className="icons" />
              <p>CSS3</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareJs} size="xl" className="icons" />
              <p>Javascript</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faSquareJs} size="xl" className="icons" />
              <p>Jest</p>
            </li>
          </ul>
        </article>
        <article className="skill">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCode} size="lg" className="icons" />
              <p>VS Code</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size="lg" className="icons" />
              <p>GitHub</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faGitAlt} size="xl" className="icons" />
              <p>Git</p>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                size="lg"
                className="icons"
              />
              <p id="projets">Netlify</p>
            </li>
          </ul>
        </article>
        <article className="skill">
          <ul>
            <li>
              <FontAwesomeIcon icon={faSass} size="lg" className="icons" />
              <p>Sass</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faServer} size="lg" className="icons" />
              <p>Swagger</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faGoogle} size="lg" className="icons" />
              <p>Lighthouse</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} size="lg" className="icons" />
              <p id="projets">Redux</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
