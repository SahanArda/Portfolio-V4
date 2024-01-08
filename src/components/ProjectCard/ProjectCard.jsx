import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
}) => {
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
  };
  return (
    <div className="col">
      <div className="card h-100">
				<div className={styles.gradient}></div>
        <ul className="nav justify-content-end mx-1">
          <li className="nav-item">
            <a
              className="nav-link"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa-brands fa-github ${styles.github_icon}`} />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa-solid fa-up-right-from-square ${styles.link_icon}`}></i>
            </a>
          </li>
        </ul>
        <div className={`card-body ${styles.card_body}`}>
          <h5 className={`card-title ${styles.title}`}>{title}</h5>
          <p className={`card-text ${styles.desc}`}>{description}</p>
          <p className="card-text">
            <small>{technologies}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
