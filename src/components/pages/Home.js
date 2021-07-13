import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Form from '../Form';
import Tables from "../Tables";
import SlideShow from '../SlideShow'
function Home() {
  return (
    <>
      <HeroSection />
      {/* <SlideShow/> */}
      <Cards />
      <Form/>
      <Tables/>
      <Footer />
    </>
  );
}

export default Home;
