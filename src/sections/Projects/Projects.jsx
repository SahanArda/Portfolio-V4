import { motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      title: "Task Manager",
      description: "The Task Manager Application is a full-stack web application designed to help users efficiently manage their tasks. Built with a modern tech stack, it offers a seamless experience for task creation, editing, and deletion, all secured through robust authentication and authorisation techniques.",
      technologies: "React Tailwind NodeJs ExpressJs Sequalize MySQL",
      githubLink: "https://github.com/SahanArda/Task-Manager-App"
    },
    {
      title: "Minimum Spanning Tree (MST) Visualiser",
      description: "A Python-based CLI tool to construct graphs, compute their Minimum Spanning Tree (MST), and visualise both the original graph and the MST side by side. The project uses NetworkX, Matplotlib, and Typer for an interactive and intuitive experience.",
      technologies: "Python OOP",
      githubLink: "https://github.com/SahanArda/MST-Visualiser"
    },
    {
      title: "Speed Type",
      description: "The Speed Typing Application is a full-stack web application designed to test and improve users' typing speed and accuracy. The application generates a random paragraph on each refresh, and users must type it as accurately and quickly as possible. Upon completion, they receive a real-time score reflecting their words per minute (WPM) and accuracy.",
      technologies: "React Tailwind Python Flask PostgreSQL",
      githubLink: "https://github.com/SahanArda/Speed-Type"
    },
    {
      title: "Portfolio Website V2",
      description: "Second iteration crafted with precision using ReactJS, Bootstrap, and Sass. The seamless design not only reflects my proficiency but also provides visitors with a visual journey through my skills, projects, and professional journey, offering a comprehensive glimpse into my capabilities.",
      technologies: "React Sass Bootstrap",
      githubLink: "https://github.com/SahanArda/Portfolio-V4"
    },
    {
      title: "Bookshelf",
      description: "Fullstack application where users can login or register and add the books they are currently reading to their digital bookshelf.",
      technologies: "React Sass Bootstrap NodeJs NestJs MongoDB",
      githubLink: "https://github.com/SahanArda/Bookshelf-App"
    },
    {
      title: "ProjectShare",
      description: "A social media platform where users can share their projects and get feedback from other users.",
      technologies: "React MaterialUI NodeJs ExpressJs MongoDB",
      githubLink: "https://github.com/SahanArda/ProjectShare"
    },
    {
      title: "Portfolio Website V1",
      description: "This is my first iteration of my portfolio website. This was created when I was first learning web development.",
      technologies: "HTML CSS Javascript",
      githubLink: "https://github.com/SahanArda/Portfolio-V1"
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
