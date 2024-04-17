import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function ProjetsImg({ image }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(${image.linkPicture})` }}
      className="project-img"
      key={image.title}
    >
      <a className="project-title" href={image.linkSite} target="_blank">
        <h3 className="project-title">{image.title}</h3>
      </a>
      <div className="project-skills">
        {image.skills.map((skill, index) => (
          <p key={index} className="project-skill">
            {skill}
          </p>
        ))}
      </div>
      <a href={image.linkGithub} target="_blank" aria-label="github">
        <FontAwesomeIcon icon={faGithub} size="2x" className="github" />
      </a>
      <p
        className="project-subtitle"
        onClick={() => setShowDescription(!showDescription)}
      >
        {image.subtitle}
      </p>
      {showDescription && (
        <div className="project-description">
          <button
            className="project-close"
            onClick={() => setShowDescription(false)}
          >
            X
          </button>
          <p>{image.description}</p>
        </div>
      )}
    </div>
  );
}
