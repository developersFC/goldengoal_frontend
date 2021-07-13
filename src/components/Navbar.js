import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { withAuth0 } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <Button buttonStyle="btn--outline" onClick={() => loginWithRedirect()}>Log In</Button>;
  };
  const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <Button buttonStyle="btn--outline" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            GoldenGoal
            {/* <i class="fas fa-futbol" /> */}
            <img
              src="https://i.ibb.co/qDyNRv2/logo.png"
              alt="home"
              id="foot"
              onClick={closeMobileMenu}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/FavTeam"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                FavTeam
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/liveScoure"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                live Scoure
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Compare"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Compare
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
             login
              </Link>
            </li>
          </ul>
          {button &&  props.auth0.isAuthenticated ?  <LogoutButton/>   :<LoginButton / >}
        </div>
      </nav>
    </>
  );
}

export default withAuth0(Navbar);
