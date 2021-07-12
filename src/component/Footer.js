
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return(
      <Navbar className="hi">
        <Navbar.Brand className="team">&copy; Best Team</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;