import React from 'react';
import './transparent.scss';
import imgemap from '../../image/maptra.png';
import photra from '../../image/phontra.png';
const TransportationApp = () => {
  return (
    <div className="transportation-container">
      <div className="phone left-phone">
        <h1>Get a ride in minutes!</h1>
        <p>
          Pick your destination, request a ride,meet your
          <br />
          driver, enjoy the journey
        </p>
      </div>
      <div className="phone right-phone">
        <img src={photra} alt="Map indicating a route" />
        <img src={imgemap} alt="Map indicating a route" />
      </div>
    </div>
  );
};

export default TransportationApp;
