import React, { useState } from 'react';
import './contact.scss';
import Footer2 from '../../component/footer 2/footer2';
import logo from '../../image/Pool_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log('Form submitted:', { name, email, comment });
  };

  return (
    <div className="contact-container">
      <img src={logo} alt="Company Logo" className="background-logo" />
      <div className="left-side">
        <p>
          <FontAwesomeIcon icon={faPhone} /> Call Us
        </p>

        <a> +251115584295</a>
        <p>
          <FontAwesomeIcon icon={faMapMarker} /> Location
        </p>

        <a>Addis Ababa, Bambis Tsehay mesel Tower-3rd Floor</a>
      </div>
      <div className="right-side">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Enter Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
