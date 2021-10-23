import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { LoggedContext } from "../Hooks/context/LoggedContext";

const GuardedRoute = ({ component: Component, children, ...rest }) => {
  const { logged } = useContext(LoggedContext);
  console.log(logged);

  return (
    <Route
      {...rest}
      render={(props) => (logged ? <Component /> : <Redirect to="/LogIn" />)}
    />
  );
};

export default GuardedRoute;
