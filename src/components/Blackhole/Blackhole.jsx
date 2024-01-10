import styles from "./Blackhole.module.css";

const Blackhole = () => {
  return (
    <video autoPlay muted loop playsInline className={styles.blackhole}>
      <source src="/blackhole.mp4" type="video/mp4" />
    </video>
  );
};

export default Blackhole;
