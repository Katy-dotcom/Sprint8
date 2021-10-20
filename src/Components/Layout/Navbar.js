import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <NavLink
        to="/"
        className={styles.navbar_link}
        activeClassName={styles.active}
        exact
      >
        <button className={styles.navbar_button}>Home</button>
      </NavLink>
      <button className={styles.navbar_button}>
        {" "}
        <NavLink
          to="/StarshipsPage"
          className={styles.navbar_link}
          activeClassName={styles.active}
        >
          Starships
        </NavLink>
      </button>
    </div>
  );
};
export default Navbar;
