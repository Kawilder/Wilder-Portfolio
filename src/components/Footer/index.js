import React, { useState } from 'react'; 
import "../../App.css";

export default function Footer () {
  return(
    <footer className="fixed-bottom">
      <div className="footer-btn">
        <a href="https://github.com/Kawilder">
          <img
            src={require(`../../assets/icons/25231.png`)}
            alt="GitHub logo"
            className="logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/kevin-wilder-594110225/">
          <img
            src={require('../../assets/icons/61109.png')}
            alt="LinkedIn logo"
            className="logo"
          />
        </a>
        <a href="mailto:kevin_wilde564@yahoo.com">
          <img
            src={require('../../assets/icons/561127.png')}
            alt="Email logo"
            className="logo"
          />
        </a>
      </div>
    </footer>
  )
}