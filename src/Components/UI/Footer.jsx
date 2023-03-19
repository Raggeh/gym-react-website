import React from 'react';
import './Footer.css';
import logo from "../../img/dumble.png";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <section className="footer"  id>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__image">
                <img src={logo} alt="logo" />
              </div>
              <h2>Fitbody</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem
              optio ex <br /> possimus tenetur fuga.
            </p>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Company </h4>
            <ul className="footer__links">
              <li>
                <a href="#"> Our Program</a>
              </li>
              <li>
                <a href="#"> Our Plan </a>
              </li>
              <li>
                <a href="#">Become a Member </a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title"> Quick Links </h4>
            <ul className="footer__links">
              <li>
                <a href="#"> About Us </a>
              </li>
              <li>
                <a href="#"> Contact Us </a>
              </li>
              <li>
                <a href="#"> Support </a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title"> Quick Links </h4>
            <ul className="footer__links">
              <li>
                <a href="#"> About Us </a>
              </li>
              <li>
                <a href="#"> Contact Us </a>
              </li>
              <li>
                <a href="#"> Support </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright"> Copyright - {year} developed by Raggeh. All rights reserved. </p>
      </div>
    </section>
  );
}

export default Footer