import styles from "./ExperienceCard.module.css";
import PropTypes from "prop-types";

const ExperienceCard = ({
  duration,
  img,
  imgAlt,
  companyAndPosition,
  description,
  skillSet,
}) => {
  ExperienceCard.propTypes = {
    duration: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    companyAndPosition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skillSet: PropTypes.string.isRequired,
  };
  return (
    <div className={styles.experience_container}>
      <div className={styles.experience_duration}>{duration}</div>

      <div className={styles.experience_desc}>
        <h3>
          <img src={img} alt={imgAlt} />
          <span>{companyAndPosition}</span>
        </h3>
        <p>{description}</p>
        <div className={styles.skill_container}>
          <p>
            <small>{skillSet}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
