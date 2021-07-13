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
// import LoginButton from "./components/pages/LoginButton";
function App(props) {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={props.auth0.isAuthenticated ? Home: Home }/>
          <Route path="/FavTeam" component={props.auth0.isAuthenticated ? FavTeam: SignUp }/>
          <Route path="/liveScoure" component={props.auth0.isAuthenticated ? LiveScoure: SignUp }/>
          <Route path="/Compare" component={props.auth0.isAuthenticated ? Compare: SignUp }/> 
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default withAuth0(App);
