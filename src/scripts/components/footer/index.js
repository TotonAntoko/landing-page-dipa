import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer container">
    <div className="footer-up">
      <div className="description">
        <h1>
          Harmonizing Digital
          <br />
          Product Design
        </h1>
        <a href="#emal">hello@dipainhouse.com</a>
      </div>

      <ul>
        <h1>Featues</h1>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#team">The Team</a>
        </li>
        <li>
          <a href="#insight">Insight</a>
        </li>
      </ul>

      <ul>
        <h1>General</h1>
        <li>
          <a href="#Carrers">Carrers</a>
        </li>
        <li>
          <a href="#company-deck">Company Deck</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
        <li>
          <a href="#insight">Clutch</a>
        </li>
      </ul>

      <ul>
        <h1>Find Us</h1>
        <li>
          <a className="place" href="#place">Malang, Indonesia</a>
        </li>
        <li>
          <a href="#map">View On Map</a>
        </li>
      </ul>
    </div>

    <div className="footer-bottom">
      <img src="assets/app-logo.png" alt="App Logo" />

      <ul className="social">
        <li>
          <a href="#dribble">Dribble</a>
        </li>
        <li>
          <a href="#behance">Behance</a>
        </li>
        <li>
          <a href="instagram">Instagram</a>
        </li>
        <li>
          <a href="#medium">Medium</a>
        </li>
      </ul>

      <p>
        © Dipa 2021. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
