import React, { Component } from 'react';
import FavForm from './component/FavTeam';
import Footer from './component/Footer';
import Header from './component/Header';
import './App.css';
import RankForm from './component/RankForm';

export class App extends Component {
  render() {
    return (
      <div className="background-image">
        <Header />
        <RankForm />
        <FavForm />
        <Footer />
      </div>
    );
  }
}

export default App;
