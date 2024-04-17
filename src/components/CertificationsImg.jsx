import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CertificationsImg({ image }) {
  return (
    <div className="certification" key={image.title}>
      <div className="certification-description">
        <h3>
          <FontAwesomeIcon
            icon={image.title}
            size="4x"
            className="name-certification"
          />
        </h3>
        <p>{image.subtitle}</p>
      </div>
      <a href={image.pdf} target="_blank" aria-label="pdf">
        <FontAwesomeIcon
          icon={faFileArrowDown}
          size="2x"
          className="download"
        />
      </a>
    </div>
  );
}
