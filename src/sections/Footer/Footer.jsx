import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section>
      <footer className={styles.footer}>
        <span>© 2023 Arda Sahan</span>
        <div className={styles.contact_links}>
          <a href="www.google.com" target="_blank" rel="">
            <i className={`fa-brands fa-github ${styles.icons}`}></i>
          </a>
          <a href="www.google.com" target="_blank" rel="">
            <i className={`fa-brands fa-linkedin ${styles.icons}`}></i>
          </a>
          <a href="www.google.com" target="_blank" rel="">
            <i className={`fa-regular fa-envelope ${styles.icons}`}></i>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
