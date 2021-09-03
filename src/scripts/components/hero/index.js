import React from 'react';
import './hero.scss';

const Hero = () => (
  <div className="hero container">
    <div className="information">
      <h1>
        We craft digital products
        <br />
        for business and user goals.
      </h1>
      <p>
        Help find solutions with UI / UX designs that are intuitive and
        in accordance with client business goals. We provide a high-quality
        service in UI/UX Design & Development.
      </p>
    </div>

    <div className="button-group">
      <button className="work-together" type="button">Let’s work together</button>
      <button className="check-portfolio" type="button">Check our work</button>
    </div>

    <div className="hero-image">
      <img src="assets/hero-image.png" alt="" />
    </div>
  </div>
);
export default Hero;
