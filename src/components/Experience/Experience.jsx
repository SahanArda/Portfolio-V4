import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience_section}>
      <h2>Experience</h2>
      <div className={styles.experience_container}>
        <div className={styles.experience_title}>June 2023 - Present</div>

        <div className={styles.experience_desc}>
          <h3>
            <img src="/src/assets/mrhb.png" alt="mrhb" />
            <span>MRHB.Network - Software Engineer Intern</span>
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            ratione nemo reiciendis fuga quo asperiores fugit eveniet impedit
            rerum corrupti ex doloribus eligendi ut, dolor nesciunt veniam? In,
            dignissimos ab?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
