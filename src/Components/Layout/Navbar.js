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
        HOME
      </NavLink>{" "}
      <NavLink
        to="/Starships"
        className={styles.navbar_link}
        activeClassName={styles.active}
      >
        STARSHIPS
      </NavLink>
      <NavLink
        to="/Actors"
        className={styles.navbar_link}
        activeClassName={styles.active}
      >
        ACTORS
      </NavLink>
    </div>
  );
};
export default Navbar;
