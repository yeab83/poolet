import React from 'react';
import './footer1.scss';
import {
  InstagramOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  FacebookFilled,
} from '@ant-design/icons';

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="column">
        <br />
        <br />

        <p>Follow us on social media:</p>
        <div className="social-icons">
          <a href="#">
            <FacebookFilled />
          </a>
          <a href="#">
            <InstagramOutlined />
          </a>
          <a href="#">
            <TwitterOutlined />
          </a>
        </div>
        <div className="btn-button1">
          <button className="button1">find our location</button>
        </div>
      </div>
      <div className="column">
        <a href="#">
          <WhatsAppOutlined />
        </a>
        <p>WhatsApp Support</p>
        <div className="socialtext">
          Add us on WhatsApp & send <br />
          queries for instant reply.
        </div>
        <div className="btn-button1">
          <button className="button1">251948342002</button>
        </div>
      </div>
      <div className="column">
        <br />
        <br />

        <p>Live Chat</p>
        <a href="#">
          <WhatsAppOutlined />
        </a>
        <div className="btn-button1">
          <button className="button1">Send Messag</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
