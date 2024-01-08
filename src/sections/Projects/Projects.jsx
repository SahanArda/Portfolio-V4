import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.project_section}>
      <h2>Projects</h2>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <ProjectCard
          title="Portfolio Website"
          description="My portfolio website, crafted with precision using ReactJS, Bootstrap, and Sass.
          The seamless design not only reflects my proficiency but also provides visitors with a visual journey through my 
          skills, projects, and professional journey, offering a comprehensive glimpse into my capabilities. "
          technologies="ReactJs Sass Bootstrap"
          githubLink="https://github.com/SahanArda/Portfolio-V4"
          demoLink="/"
        />
        <ProjectCard
          title="Portfolio Website"
          description="My portfolio website, crafted with prece into my capabilities. "
          technologies="ReactJs Sass Bootstrap"
          githubLink="https://github.com/SahanArda/Portfolio-V4"
          demoLink="/"
        />
        <ProjectCard
          title="Portfolio Website"
          description="My portfolio website, crafted with precision using ReactJS, Bootstrap, and Sass.
          The seamless design not only reflects my proficiency but also provides visitors with a visual journey through my 
          skills, projects, and professional journey, offering a comprehensive glimpse into my capabilities. "
          technologies="ReactJs Sass Bootstrap"
          githubLink="https://github.com/SahanArda/Portfolio-V4"
          demoLink="/"
        />
        <ProjectCard
          title="Portfolio Website"
          description="My portfolio website, crafted with precision using ReactJS, Bootstrap, and Sass.
          The seamless design not only reflects my proficiency but also provides visitors with a visual journey through my 
          skills, projects, and professional journey, offering a comprehensive glimpse into my capabilities. "
          technologies="ReactJs Sass Bootstrap"
          githubLink="https://github.com/SahanArda/Portfolio-V4"
          demoLink="/"
        />
        
      </div>
    </section>
  );
};

export default Projects;
