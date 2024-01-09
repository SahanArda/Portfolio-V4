import styles from './Error.module.css'

const Error = () => {
  return (
    <section className={styles.error_section}>
      <div className={styles.error_container}>
        <h1>404 <span>Error</span></h1>
        <h3>Sorry, the page you tried cannot be found</h3>
      </div>
    </section>
  )
}

export default Error