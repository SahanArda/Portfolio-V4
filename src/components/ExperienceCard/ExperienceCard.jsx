import styles from "./ExperienceCard.module.css";
import PropTypes from "prop-types";

const ExperienceCard = ({
  duration,
  img,
  imgAlt,
  companyAndPosition,
  description,
  skillSet1,
  skillSet2,
  skillSet3,
  skillSet4,
  skillSet5,
  skillSet6,
}) => {
  ExperienceCard.propTypes = {
    duration: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    companyAndPosition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skillSet1: PropTypes.string.isRequired,
    skillSet2: PropTypes.string.isRequired,
    skillSet3: PropTypes.string.isRequired,
    skillSet4: PropTypes.string.isRequired,
    skillSet5: PropTypes.string.isRequired,
    skillSet6: PropTypes.string.isRequired,
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
          <span>{skillSet1}</span>
          <span>{skillSet2}</span>
          <span>{skillSet3}</span>
          <span>{skillSet4}</span>
          <span>{skillSet5}</span>
          <span>{skillSet6}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
