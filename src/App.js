
import React, { Component } from 'react';
import FavForm from './component/FavTeam';
import Footer from './component/Footer';
import Header from './component/Header';
import SlideShow from './component/SlideShow'

export class App extends Component {
  render() {
    return (
      <div>

        <Header />
       
        <SlideShow/>

        <FavForm/>

        <Footer />

      </div>
    )
  }
}

export default App

