import "./App.css";
import React from "react";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Layout/Navbar";
import StarshipsPage from "./Pages/StarshipsPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StarshipInfo from "./Pages/StarshipInfo";
import Header from "./Components/Layout/Header";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/StarshipsPage/:id">
            <StarshipInfo />
          </Route>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/StarshipsPage">
            <StarshipsPage />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
