import styles from "./Experience.module.css";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience_section}>
      <h2>Experience</h2>
      <ExperienceCard
        duration="June 2023 - Present"
        img="/src/assets/mrhb.png"
        imgAlt="mrhb"
        companyAndPosition="MRHB.Network - Software Engineer Intern"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. QuosLorem ipsum, dolor sit amet consectetur adipisicing elit. QuosLorem ipsum, dolor sit amet consectetur adipisicing elit. Quosrem ipsum, dolor sit amet consectetur adipisicing elit. Quosrem ipsum, dolor sit amet consectetur adipisicing elit. Quos"
        skillSet1="ReactJs"
        skillSet2="Typescript"
        skillSet3="NodeJs"
        skillSet4="NestJs"
        // skillSet5="MongoDB"
      />
    </section>
  );
};

export default Experience;
