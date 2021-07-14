import  { Component } from 'react'

import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Form from '../Form';
import TeamUserFav from "../TeamUserFav";



export class Home extends Component {

  render() {
    return (
      <>
        <HeroSection />
        <Form />
        <TeamUserFav />      
        <Footer />
      </>
    )
  }
}

export default Home





