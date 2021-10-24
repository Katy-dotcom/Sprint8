import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>May the force be with you</h1>
      <div className={styles.button_center}>
        <button className={styles.button}>
          <Link to="/LogIn" className={styles.link}>
            Enter
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Homepage;
