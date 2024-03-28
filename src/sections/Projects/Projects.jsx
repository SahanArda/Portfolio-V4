import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website V2",
      description: "Second iteration crafted with precision using ReactJS, Bootstrap, and Sass. The seamless design not only reflects my proficiency but also provides visitors with a visual journey through my skills, projects, and professional journey, offering a comprehensive glimpse into my capabilities.",
      technologies: "ReactJs Sass Bootstrap",
      githubLink: "https://github.com/SahanArda/Portfolio-V4",
      demoLink: "https://www.ardasahan.com/"
    },
    {
      title: "Bookshelf",
      description: "Fullstack application where users can login or register and add the books they are currently reading to their digital bookshelf.",
      technologies: "ReactJs Sass Bootstrap NodeJs NestJs MongoDB",
      githubLink: "https://github.com/SahanArda/Bookshelf-App",
      demoLink: "/"
    },
    {
      title: "ProjectShare",
      description: "A social media platform where users can share their projects and get feedback from other users.",
      technologies: "ReactJs MaterialUI NodeJs ExpressJs MongoDB",
      githubLink: "https://github.com/SahanArda/ProjectShare",
      demoLink: "/"
    },
    {
      title: "Portfolio Website V1",
      description: "This is my first iteration of my portfolio website. This was created when I was first learning web development.",
      technologies: "HTML CSS Javascript",
      githubLink: "https://github.com/SahanArda/Portfolio-V1",
      demoLink: "https://sahan-v1.netlify.app/"
    }
  ];

  const animation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25 * index,
      }
    }),
  };

  return (
    <section className={styles.project_section} id="Projects">
      <h2>Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={animation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
