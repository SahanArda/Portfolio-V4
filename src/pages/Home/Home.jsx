import { Hero, Experience, Projects } from '../../sections/index.js'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.main_container}>
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
