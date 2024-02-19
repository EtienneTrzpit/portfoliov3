import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjetsImg({ image }) {
  const url = image.url;
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="projet"
      key={image.title}
    >
      <div className="titles-projects">
        <a href={image.linkGithub} target="_blank" aria-label="github">
          <FontAwesomeIcon icon={faGithub} size="2x" className="github" />
        </a>
        <a href={image.linkSite} target="_blank">
          <h3 className="cards-box-title">{image.title}</h3>
        </a>
      </div>
      <div className="project-skills">
        {image.skills.map((skill, index) => (
          <p key={index} className="project-skill">
            {skill}
          </p>
        ))}
      </div>
      <p className="project-subtitle">{image.subtitle}</p>
    </div>
  );
}
