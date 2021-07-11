import React, { Component } from 'react';
import FavForm from './component/FavTeam';
import Footer from './component/Footer';
import Header from './component/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FavForm />
        <Footer />
      </div>
    )
  }
}

export default App

