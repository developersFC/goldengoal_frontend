
import React, { Component } from 'react';
import FavForm from './component/FavTeam';
import Footer from './component/Footer';
import Header from './component/Header';
import SlideShow from './component/SlideShow';
import './App.css'
import RankForm from './component/RankForm';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FavForm />
        <SlideShow />

        <Footer />
      </div>
    );
  }
}

export default App;
