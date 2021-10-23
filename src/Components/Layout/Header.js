import React from "react";
import styles from "./Header.module.css";
import Star_Wars_logo from "./Star_Wars_logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedContext } from "../../Hooks/context/LoggedContext";

const Header = () => {
  const { logged, setLogged } = useContext(LoggedContext);

  return (
    <div className={styles.container}>
      <div className={styles.flex}></div>
      <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.img}
            src={Star_Wars_logo}
            alt="logo-starwars"
          />
        </Link>
      </div>
      <div className={styles.prueba}>
        {!logged ? (
          <>
            <button onClick={() => setLogged(true)}>Fast login</button>
            <Link to="/LogIn">
              <button className={styles.button}>LOG IN</button>
            </Link>
            <Link to="/SignUp">
              <button className={styles.button}>SIGN UP</button>
            </Link>
          </>
        ) : (
          <Link to="/" onClick={() => setLogged(false)}>
            LOG OUT
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
