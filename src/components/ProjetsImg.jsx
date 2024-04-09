import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function ProjetsImg({ image }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${image.linkPicture})` }}
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
      <p
        className={`project-subtitle ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => {
          if (window.innerWidth > 1024) {
            setIsHovered(true);
          }
        }}
      >
        {image.subtitle}
      </p>
      {isHovered && (
        <p
          className="project-description"
          onMouseLeave={() => {
            if (window.innerWidth > 1024) {
              setIsHovered(false);
            }
          }}
        >
          {image.description}
        </p>
      )}
    </div>
  );
}
