import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.project_section} id="Projects">
      <h2>Projects</h2>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <ProjectCard
          title="Portfolio Website V2"
          description="My second iteration portfolio website, crafted with precision using ReactJS, Bootstrap, and Sass.
          The seamless design not only reflects my proficiency but also provides visitors with a visual journey through my 
          skills, projects, and professional journey, offering a comprehensive glimpse into my capabilities. "
          technologies="ReactJs Sass Bootstrap"
          githubLink="https://github.com/SahanArda/Portfolio-V4"
          demoLink="/"
        />
        <ProjectCard
          title="Bookshelf"
          description="Fullstack application where users can login or register and add the books they are currently reading to their digital bookshelf."
          technologies="ReactJs Sass Bootstrap NodeJs NestJs MongoDB"
          githubLink="https://github.com/SahanArda/Bookshelf-App"
          demoLink="/"
        />
        <ProjectCard
          title="ProjectShare"
          description="A social media platform where users can share their projects and get feedback from other users."
          technologies="ReactJs MaterialUI NodeJs ExpressJs MongoDB"
          githubLink="https://github.com/SahanArda/ProjectShare"
          demoLink="/"
        />
        <ProjectCard
          title="Portfolio Website V1"
          description="This is my first iteration of my portfolio website. This was created when I was first learning web development."
          technologies="HTML CSS Javascript"
          githubLink="https://github.com/SahanArda/Portfolio-V1"
          demoLink="/"
        />
        
      </div>
    </section>
  );
};

export default Projects;
