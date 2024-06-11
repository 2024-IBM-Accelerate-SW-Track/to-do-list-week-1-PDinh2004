import React, { Component } from 'react';
import "./About.css";
import picture from '../assets/Phillip_D.jpeg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={picture}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Phillip Hoan T Dinh</div>

            <div className="brief_description">
              I am a rising junior at Swarthmore College double-majoring in Computer Science and Mathematics!
              To best describe myself, I am a curious learner who loves to learn new things. Especially with CS,
              I always look forward to learning new tools that will allow me to create more efficient and inventive
              applications.
            </div>
          </div>
        </div>
      </div>
    )
  }
}