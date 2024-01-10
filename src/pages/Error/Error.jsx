import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Blackhole from '../../components/Blackhole/Blackhole';
import styles from './Error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <section className={styles.error_section}>
      <Blackhole />
      <div className={styles.error_container}>
        <h1>
          404 <span>Error</span>
        </h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Button onClick={handleHomeClick}>Home</Button>
      </div>
    </section>
  );
};

export default Error;
