import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Register from "../StyledComponents/Register";
import starwars_yellow from "../Assets/logo/starwars_yellow.png";

const SignUp = () => {
  //declarar useForm
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //input Data
    const newUser = data;
    console.log(data);

    //descargar datos del array de usuarios del localStorage
    const usersArray =
      JSON.parse(window.localStorage.getItem("usersArray")) || [];
    console.log("bajando el array de localStorage", usersArray);

    if (usersArray.some((user) => user.email === newUser.email)) {
      console.log("Este correo ya está registrado");
      setError(true);
    } else {
      usersArray.push(newUser);
      window.localStorage.setItem("usersArray", JSON.stringify(usersArray));

      console.log("newUser ha sido añadido al array");
    }
  };

  return (
    <Register>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={starwars_yellow} alt="" />
        <h2>SIGN UP</h2>
        <div>
          <label htmlFor="email">
            <input
              {...register("email", { required: "This is required" })}
              name="email"
              id="email"
              type="text"
              placeholder="Username or Email Address"
            />
            {errors.email && (
              <p style={{ border: "1px red solid" }}>{errors.email.message}</p>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              name="password"
              {...register("password", {
                required: "This is required",
                minLength: { value: 6, message: "too short" },
              })}
              type="password"
              placeholder="Password"
              id="password"
            />
            {errors.password && (
              <p style={{ border: "1px red solid" }}>
                {errors.password.message}
              </p>
            )}
          </label>
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
        {error && <p>Ya existe una cuenta con ese usuario</p>}
      </form>
    </Register>
  );
};

export default SignUp;
