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
import ActorsPage from "./Pages/ActorsPage";
import GuardedRoute from "./Components/GuardedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <GuardedRoute path="/Actors/:id" component={PilotInfo} />
          <GuardedRoute path="/Film/:id" component={FilmInfo} />

          <GuardedRoute path="/Starships/:id" component={StarshipInfo} />

          <GuardedRoute path="/Starships" component={StarshipsPage} />
          <GuardedRoute path="/Actors" component={ActorsPage} />

          <Route path="/LogIn" component={LogIn} />

          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
