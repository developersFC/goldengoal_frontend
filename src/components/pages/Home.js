import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Form from '../Form';
import TeamUserFav from "../TeamUserFav";
function Home() {
  return (
    <>
      <HeroSection />
      <Form />
      <TeamUserFav/>
      <Footer />
    </>
  );
}

export default Home;
