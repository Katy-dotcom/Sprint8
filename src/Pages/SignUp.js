import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Register from "../StyledComponents/Register";
import starwars_yellow from "../Assets/logo/starwars_yellow.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  //declarar useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    //input Data
    const newUser = data;
    console.log(data);

    //descargar datos del array de usuarios del localStorage
    const usersArray =
      JSON.parse(window.localStorage.getItem("usersArray")) || [];

    if (usersArray.some((user) => user.email === newUser.email)) {
      console.log("Este correo ya está registrado");
      toast.error("Este correo ya está registrado");
    } else {
      usersArray.push(newUser);
      window.localStorage.setItem("usersArray", JSON.stringify(usersArray));
      toast.success("You´ve been successfully registered.");
      reset();
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
              {...register("email", { required: "This field is required" })}
              name="email"
              id="email"
              type="text"
              placeholder="Username or Email Address"
            />
            {errors.email && (
              <p
                style={{
                  color: "white",
                  border: "1px red solid",
                  padding: "10px",
                }}
              >
                {errors.email.message}
              </p>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              name="password"
              {...register("password", {
                required: "This field is required",
                minLength: { value: 6, message: "The password is too short" },
              })}
              type="password"
              placeholder="Password"
              id="password"
            />
            {errors.password && (
              <p
                style={{
                  color: "white",
                  border: "1px red solid",
                  padding: "10px",
                }}
              >
                {errors.password.message}
              </p>
            )}
          </label>
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
        <ToastContainer />
      </form>
    </Register>
  );
};

export default SignUp;
