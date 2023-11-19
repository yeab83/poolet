import React from 'react';
import './cars_and_text.scss';
import cars from '../../image/car1.png';
import cars2 from '../../image/car2.png';
import cars3 from '../../image/car3.png';
import seat from '../../image/seat.png';
import edit from '../../image/edit.png';

const Cars_and_text = () => {
  return (
    <div className="new">
      <div className="top">
        <h1>Available Services</h1>
      </div>
      <div className="wrapper">
        <div className="carscontainer">
          <div className="carsimage-half">
            <img src={cars} alt="Half Image" />
          </div>
          <div className="cartext-half">
            <h1>POOL</h1>
            <div className="details">
              <div className="detail">
                <div className="icon">
                  <img src={seat} alt="" />
                </div>
                <a>Seat: 4</a>
              </div>
              <div className="detail">
                <div className="icon">
                  <img src={edit} alt="" />
                </div>
                <a>Suitcase: 2</a>
              </div>
            </div>
            <p>
              economy ride best for daily ride,
              <br />
              also can order with 3 other friends
            </p>
            <button className="button">Book Now</button>
          </div>
        </div>
        <div className="carscontainer">
          <div className="carsimage-half">
            <img src={cars2} alt="Half Image" />
          </div>
          <div className="cartext-half">
            <h1>SUV/MINIVAN</h1>
            <div className="details">
              <div className="detail">
                <div className="icon">
                  <img src={seat} alt="" />
                </div>
                <a>Seats: 6/7</a>
              </div>
              <div className="detail">
                <div className="icon">
                  <img src={edit} alt="" />
                </div>
                <a>Suitcase: 2</a>
              </div>
            </div>
            <p>
              economy ride best for daily ride,
              <br />
              also can order with 3 other friends
            </p>
            <button className="button">Book Now</button>
          </div>
        </div>

        <div className="carscontainer">
          <div className="carsimage-half">
            <img src={cars3} alt="Half Image" />
          </div>
          <div className="cartext-half">
            <h1>Minibus</h1>
            <div className="details">
              <div className="detail">
                <div className="icon">
                  <img src={seat} alt="" />
                </div>
                <a>Seats: 12/15</a>
              </div>
              <div className="detail">
                <div className="icon">
                  <img src={edit} alt="" />
                </div>
                <a>Suitcase: 2</a>
              </div>
            </div>
            <p>
              economy ride best for daily ride,
              <br />
              also can order with 3 other friends
            </p>
            <button className="button">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars_and_text;
