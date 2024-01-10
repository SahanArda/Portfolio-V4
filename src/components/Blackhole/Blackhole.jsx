import styles from "./Blackhole.module.css";

const Blackhole = () => {
  return (
    <video autoPlay muted loop playsInline className={styles.blackhole}>
      <source src="/blackhole.webm" type="video/webm" />
    </video>
  );
};

export default Blackhole;
