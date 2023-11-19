import React from 'react';
import './body.scss';
import addisababa from '../../image/addis-ababa.png';
import playStoreIcon from '../../image/playstore.png';
import applestore from '../../image/applestore.png';
const Body = () => {
  return (
    <div className="container">
      <div className="wapper">
        <div className="text-half">
          <p>
            The fast, affordable
            <br />
            way to ride.
          </p>
          <h4>Download the Pool app</h4>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.app"
            target="_blank"
            rel="noopener noreferrer"
            className="store-link"
          >
            <img src={playStoreIcon} alt="Download on Play Store" />
          </a>
          <a
            href="https://apps.apple.com/us/app/example-app/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="store-link"
          >
            <img src={applestore} alt="Download on Apple Store" />
          </a>
        </div>
      </div>
      <div className="image-half">
        <img src={addisababa} alt="Half Image" />
        <div className="logo-overlay"></div>
      </div>
    </div>
  );
};

export default Body;
