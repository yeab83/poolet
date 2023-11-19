import React from 'react';
import './carts.scss';
import better from '../../image/better.svg';
import fast from '../../image/fast.svg';
import sec from '../../image/sec.svg';
import { Card } from 'antd';

const Carts = () => {
  return (
    <div className="dashboardpage">
      <div className="wrapper">
        <div className="card-holder">
          <div className="wrapper">
            <Card>
              <h1>Faster pick-up</h1>
              <h3>We have your contract already prepared</h3>
              <div className="carticon">
                <img src={fast} alt="" />
              </div>
            </Card>
            <Card>
              <h1>Secured and Safe</h1>
              <h3>find the safest and finest ride</h3>
              <div className="carticon">
                <img src={sec} alt="" />
              </div>
            </Card>
            <Card>
              <h1>Better service</h1>
              <h3>We know you better, we serve you better</h3>
              <div className="carticon">
                <img src={better} alt="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
