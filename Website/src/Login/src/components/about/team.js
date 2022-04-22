import React, { Component } from "react";
import "./team.css";
import img1 from "./developers/dp.jpg";
import img2 from "./developers/dp.jpg";
import img3 from "./developers/dp.jpg";


function team(){
  return (
    <div className="background-2">
      <div className="center">
        <h1 className="feature-head">Meet Our Team</h1>
        <hr className="fancy-line"/>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img1} alt="img"/>
          <h3>Shagun Mishra</h3>
          <a className="linkedin" href="https://in.linkedin.com/in/shagunmishra">LinkedIn</a>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img2} alt="img"/>
          <h3>Gauravi Sharma</h3>
          <a className="linkedin" href="https://in.linkedin.com/in/ankit-goyal-07017a182">LinkedIn</a>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <img className="developer" src={img3} alt="img"/>
          <h3>Falguni Mohite</h3>
          <a className="linkedin" href="https://in.linkedin.com/in/krish-garg-8a3a11190">LinkedIn</a>
      </div>
      </div>
  );
  }

export default team;
