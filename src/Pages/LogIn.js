import React, { useContext } from "react";
import styles from "./LogIn.module.css";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Register from "../StyledComponents/Register";
import starwars_yellow from "../Assets/logo/starwars_yellow.png";
import { LoggedContext } from "../Hooks/context/LoggedContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = ({}) => {
  const { register, handleSubmit } = useForm();
  const { setLogged } = useContext(LoggedContext);
  let history = useHistory();

  const onSubmit = (data) => {
    const user = data;
    const registeredUsers = JSON.parse(
      window.localStorage.getItem("usersArray")
    );

    const foundUser = registeredUsers.filter(
      (registeredUser) => registeredUser.email === user.email
    );

    if (foundUser.length === 0) {
      toast.warning("Usuario no existe");
      console.log("Usuario no existe");
    } else if (foundUser.length === 1) {
      if (foundUser[0].password === user.password) {
        console.log("Email y password correcto. Estas logeado");
        setLogged(true);

        history.push("/Starships");
      } else if (foundUser[0].password !== user.password) {
        toast.error("La contraseña es incorrecta");
        console.log("La contraseña es incorrecta");
      }
    }
  };

  return (
    <Register>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={starwars_yellow} alt="" />
        <h2>LOG IN</h2>
        <div>
          <label htmlFor="email">
            <input
              {...register("email")}
              id="email"
              type="text"
              placeholder="Username or Email Address"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
        <div className={styles.create_account}>
          <Link to="/SignUp" className={styles.link}>
            {" "}
            Create an Account
          </Link>
        </div>
        <ToastContainer />
      </form>
    </Register>
  );
};

export default LogIn;
