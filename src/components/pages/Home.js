import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Form from '../Form';
import Tables from "../Tables";
function Home() {
  return (
    <>
      <HeroSection />
      <Form/>
      <Tables/>
      <Footer />
    </>
  );
}

export default Home;
