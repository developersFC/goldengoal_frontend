import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img
        src="https://www.photoshop-library.com/wp-content/uploads/edd/2020/09/%D8%B5%D9%88%D8%B1%D8%A9-%D8%AE%D9%84%D9%81%D9%8A%D8%A9-%D9%85%D9%84%D8%B9%D8%A8-%D9%83%D8%B1%D8%A9-%D9%82%D8%AF%D9%85-JBG.jpg"
        alt=""
        id="coverimg"
      />
      <h1>GoldenGoal</h1>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      
      </div> */}
    </div>
  );
}

export default HeroSection;
