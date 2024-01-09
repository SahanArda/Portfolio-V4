import styles from "./Experience.module.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <section id="Experience" className={styles.experience_section}>
      <h2>Experience</h2>
      <ExperienceCard
        duration="June 2023 - Present"
        img="/assets/mrhb.png"
        imgAlt="mrhb"
        companyAndPosition="MRHB.Network - Software Engineer Intern"
        description="As a software engineer intern at MRHB.Network, 
        I honed my skills in backend development using Node.js with the NestJS framework and TypeScript. 
        Collaborating with the engineering team, I actively contributed to feature development and performed bug fixes across the codebase. 
        This experience provided invaluable insights into decentralized systems and blockchain technology, shaping my growth as a proficient and adaptable software engineer in the industry."
        skillSet="ReactJs Typescript NodeJs NestJs"
      />
    </section>
  );
};

export default Experience;
