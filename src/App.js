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
import PilotInfo from "./Pages/PilotInfo";
import FilmInfo from "./Pages/FilmInfo";

import GuardedRoute from "./Components/GuardedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Pilot/:id" component={PilotInfo} />
          <Route path="/Film/:id" component={FilmInfo} />

          <Route path="/StarshipsPage/:id" component={StarshipInfo} />

          <GuardedRoute path="/StarshipsPage" component={StarshipsPage} />

          <Route path="/LogIn" component={LogIn} />

          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
