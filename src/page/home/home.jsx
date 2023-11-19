import React from 'react';
import Header from '../../component/header/header';
import Body from '../../component/head/body';
import Carts from '../../component/carts/carts';
import Cars_and_text from '../../component/cars_and_text/cars_and_text';
import Footer1 from '../../component/footer 1/footer1';
import Footer2 from '../../component/footer 2/footer2';
import TransportationApp from '../../component/transparent/transparent';

const Home = () => {
  return (
    <div>
      <Body />
      <Carts />
      <Cars_and_text />
      <TransportationApp />
    </div>
  );
};

export default Home;
