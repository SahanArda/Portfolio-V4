import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section>
      <footer className={styles.footer}>
        <span>© 2023 Arda Sahan</span>
        <div className={styles.contact_links}>
          <a
            href="https://github.com/SahanArda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa-brands fa-github ${styles.icons}`}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/arda-sahan-142309250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa-brands fa-linkedin ${styles.icons}`}></i>
          </a>
          <a
            href="mailto:ardambp@outlook.com?subject=Hey Arda!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa-regular fa-envelope ${styles.icons}`}></i>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
