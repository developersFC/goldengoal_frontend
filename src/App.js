import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RankForm from "./component/RankForm";
import FavForm from "./component/FavTeam";
import Footer from "./component/Footer";
import SlideShow from "./component/SlideShow";
import ShowFavTeam from "./component/ShowFavTeam";
import LiveScoure from "./component/LiveScoure";
import Compare from "./component/Compare";
import LogoutButton from "./component/LogoutButton";
import Login from "./component/Login";
import Logout from './component/Logout'
import "./App.css";
import "./Header.css";
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">
                    <img src="https://i.ibb.co/qDyNRv2/logo.png" alt="home" />
                  </Link>
                </li>
                {this.props.auth0.isAuthenticated ? (
                  <>
                    <li>
                      <Link to="/favTeam">Fav Team</Link>
                    </li>
                    <li>
                      <Link to="/live">Live Scoure</Link>
                    </li>
                    <li>
                      <Link to="/compare">Compare</Link>
                    </li>
                    <li>
                      <Link to="/logOut">LogOut</Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login">LogIn</Link>
                  </li>
                )}
              </ul>
            </nav>

            <Switch>
              <Route path="/home">
                <RankForm />
                <SlideShow />
                {this.props.auth0.isAuthenticated ? <FavForm /> : ""}
              </Route>
              <Route path="/favTeam">
                <ShowFavTeam />
              </Route>
              <Route path="/live">
                <LiveScoure />
              </Route>
              <Route path="/compare">
                <Compare />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              .
              <Route path="/logOut">
                <Logout />
              </Route>
            </Switch>
          </div>
        </Router>

        <Footer />
      </>
    );
  }
}
export default withAuth0(App);
