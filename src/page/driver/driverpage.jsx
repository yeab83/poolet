import React, { useState } from 'react';
import './driver.scss';
import Footer2 from '../../component/footer 2/footer2';
import logo from '../../image/Pool_Logo.png';
import playStoreIcon from '../../image/playstore.png';
import applestore from '../../image/applestore.png';
import aboutusimg from '../../image/aboutus.png'; // Replace with your image path

const Drivepage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log('Form submitted:', { name, email, comment });
  };

  return (
    <div className="driver-container">
      <div className="right-side">
        <form className="driver-form" onSubmit={handleSubmit}>
          <h2>Sign Up To Driver</h2>
          <input
            type="text"
            placeholder="Enter Your First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="radio-gender">
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
          </div>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="Password"
            placeholder="Enter Your Password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
          <div>
            <p>Download Our Application!</p>
          </div>
        </form>
      </div>

      <div className="left-side">
        <div className="photo-section">
          <img src={aboutusimg} alt="Sample" />
        </div>
        <div className="playestoredriver">
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
    </div>
  );
};

export default Drivepage;
