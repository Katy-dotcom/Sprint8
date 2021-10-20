import React, { useState } from "react";
import styles from "./LogIn.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const { logged, setLogged } = useState(false);

  const onSubmit = (data) => {
    const user = data;
    const registeredUsers = JSON.parse(
      window.localStorage.getItem("usersArray")
    );
    console.log(registeredUsers);

    const foundUser = registeredUsers.filter(
      (registeredUser) => registeredUser.email === user.email
    );
    console.log(foundUser);

    if (foundUser.length === 0) {
      console.log("Usuario no existe");
    } else if (foundUser.length === 1) {
      if (foundUser[0].password === user.password) {
        console.log("Email and password correcto. Estas logeado");
        // setLogged(true);
      } else if (foundUser[0].password !== user.password) {
        console.log("La contraseña es incorrecta");
      }
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Link to="/SignUp"> Create an account</Link>
      </form>
    </div>
  );
};

export default LogIn;
