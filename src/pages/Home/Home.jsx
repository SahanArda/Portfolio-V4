import { NavbarComponent, Hero, Experience, Projects, Footer } from '../../components/index'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.main_container}>
      <NavbarComponent />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
