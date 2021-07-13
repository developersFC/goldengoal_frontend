import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FavTeam from "./components/pages/FavTeam";
import LiveScoure from "./components/pages/LiveScoure";
import SignUp from "./components/pages/SignUp";
import Compare from "./components/pages/Compare";
import 'bootstrap/dist/css/bootstrap.min.css';

// import LoginButton from "./components/pages/LoginButton";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/FavTeam" component={FavTeam} />
          <Route path="/liveScoure" component={LiveScoure} />
          <Route path="/Compare" component={Compare} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default withAuth0(App);
