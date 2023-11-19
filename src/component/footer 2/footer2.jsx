import React from 'react';
import './footer2.scss';
import Logo from '../../image/Pool_Logo.png';
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const Footer2 = () => {
  return (
    <>
      <footer className="main-footer">{/* Your main footer content */}</footer>
      <footer className="center-footer">
        <p>© 2023 Pool Technology</p>
        <div className="logo">
          <img src={Logo} alt="" />

          {/* Use any icon or text for the button */}
        </div>
      </footer>
    </>
  );
};

export default Footer2;
