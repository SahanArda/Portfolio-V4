import { NavbarComponent, Hero, Experience, Projects, Contact, Footer } from '../../components/index'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.main_container}>
      <NavbarComponent />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
