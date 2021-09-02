import React from 'react';
import './teams.scss';

const TeamNumber = ({ title, number }) => (
  <div className="list-item">
    <p className="amount">{number}</p>
    <p className="team">{title}</p>
  </div>
);

const Teams = () => (
  <div className="teams container">
    <div className="description">
      <div className="about">
        <p>
          As a full-service UX design agency, we work closely with our clients
          to define, design and develop transformative user experiences across
          all platforms and brand’s touchpoints.
        </p>
      </div>

      <div className="teams-number">
        <TeamNumber title="Designer" number="20" />
        <TeamNumber title="Developer" number="5" />
        <TeamNumber title="Project Designer" number="3" />
        <TeamNumber title="4 Year in Business" number="4+" />
      </div>
    </div>

    <div className="footer">
      <button type="submit">About Us</button>

      <div className="rating">
        <div className="info">
          <img src="assets/clutch.png" alt="Clutch" />
          <p className="amount">4.9</p>
          <p className="vendor">Rating On Clutch</p>
        </div>
        <p className="award">Top Design Agencies in Indonesia</p>
      </div>
    </div>

  </div>
);

export default Teams;
