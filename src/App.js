
import React, { Component } from 'react';
import FavForm from './component/FavTeam';
import Footer from './component/Footer';
import Header from './component/Header';
import SlideShow from './component/SlideShow'
import 'bootstrap/dist/css/bootstrap.min.css';




import './App.css'

export class App extends Component {
  
  render() {
    return (
      <div className="div">

        <Header />
    
        <Footer />

        <SlideShow/>

        <FavForm/>

      </div>
    )
  }
}

export default App

