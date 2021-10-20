import React from "react";
import styles from "./Header.module.css";
import Star_Wars_logo from "./Star_Wars_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}></div>
      <div className={styles.logo}>
        <a href="../../Pages/Homepage.js">
          <img
            className={styles.img}
            src={Star_Wars_logo}
            alt="logo-starwars"
          />
        </a>
      </div>
      <div className={styles.prueba}>
        <Link to="/LogIn">
          <button className={styles.button}>LOG IN</button>
        </Link>
        <Link to="/SignUp">
          <button className={styles.button}>SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
