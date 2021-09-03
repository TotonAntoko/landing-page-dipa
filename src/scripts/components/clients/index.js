import React from 'react';
import './clients.scss';

const Logo = ({ linkLogo }) => (
  <div
    className="client-logo"
    style={{
      backgroundImage: `url(${linkLogo})`,
    }}
  />
);

const Star = () => (
  <img src="assets/start.png" alt="" />
);

const TestiomiItem = ({
  userPhoto, name, position, testimoni, logoClient,
}) => (
  <div className="testiomal-item">
    <div className="header">
      <img src={userPhoto} alt="" />

      <div className="user-info">
        <h1>{name}</h1>
        <p>{position}</p>
      </div>
    </div>

    <div className="body">
      <p>
        {`“${testimoni}”`}
      </p>
    </div>

    <div className="footer">
      <div className="rating">
        <div className="rating-star">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <span className="rating-number">
          5.0
          <p>Clutch Review</p>
        </span>
      </div>

      <img src={logoClient} alt="" />
    </div>

  </div>
);

const Clients = () => (
  <div className="clients container">
    <p>Our Happy Clients</p>
    <h1>Some of our partners and clients</h1>

    <div className="list-client">
      <Logo linkLogo="assets/client/alphapay.png" />
      <Logo linkLogo="assets/client/koupon.png" />
      <Logo linkLogo="assets/client/sender.png" />
      <Logo linkLogo="assets/client/playsport.png" />
      <Logo linkLogo="assets/client/billy.png" />
      <Logo linkLogo="assets/client/swag.png" />
      <Logo linkLogo="assets/client/buzzbazador.png" />
      <Logo linkLogo="assets/client/m.png" />
      <Logo linkLogo="assets/client/vial.png" />
      <Logo linkLogo="assets/client/loatbear.png" />
      <Logo linkLogo="assets/client/tradeit.png" />
      <Logo linkLogo="assets/client/creditmyrent.png" />
    </div>

    <div className="testimoni-client">
      <TestiomiItem
        userPhoto="assets/image/user/user-1.png"
        name="Eran Galperin"
        position="Founder Martial Arts on Rails"
        testimoni="The high-quality Dipa's team was able to deliver in such a quick timeframe and on budget was impressive."
        logoClient="assets/client/logo/logo-1.png"
      />
      <TestiomiItem
        userPhoto="assets/image/user/user-2.png"
        name="Shelby Baldwin"
        position="Co Founder & CMO Buzzbassador"
        testimoni="Dipa Inhouse is very organized and very methodical about how they set up the project in Figma, which we loved."
        logoClient="assets/client/logo/logo-2.png"
      />
    </div>
  </div>
);

export default Clients;
