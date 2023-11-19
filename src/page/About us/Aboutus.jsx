import React from 'react';
import './aboutus.scss';
import sampleImage from '../../image/aboutus.png'; // Replace with your image path

const Aboutus = () => {
  return (
    <div className="all-container">
      <div className="content-container">
        <div className="paragraph-section">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            hendrerit libero sed suscipit feugiat. Maecenas tristique egestas
            ante non tincidunt. Etiam non arcu ut ante pulvinar consequat vel
            vitae nisi. Maecenas iaculis felis eget ex faucibus, quis sagittis
            eros blandit. Nulla ut tincidunt quam. Mauris vitae eros at ipsum
            hendrerit efficitur sed a nisl. Nullam tristique dui non eros auctor
            malesuada. Praesent auctor sem augue, in hendrerit ante vehicula at.
          </p>
          <button type="submit">Join Us</button>
          <h1>MISSION</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            hendrerit libero sed suscipit feugiat. Maecenas tristique egestas
            ante non tincidunt. Etiam non arcu ut ante pulvinar consequat vel
            vitae nisi. Maecenas iaculis felis eget ex faucibus, quis sagittis
            eros blandit. Nulla ut tincidunt quam. Mauris vitae eros at ipsum
            hendrerit efficitur sed a nisl. Nullam tristique dui non eros auctor
            malesuada. Praesent auctor sem augue, in hendrerit ante vehicula at.
          </p>
          <h1>MISSION</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            hendrerit libero sed suscipit feugiat. Maecenas tristique egestas
            ante non tincidunt. Etiam non arcu ut ante pulvinar consequat vel
            vitae nisi. Maecenas iaculis felis eget ex faucibus, quis sagittis
            eros blandit. Nulla ut tincidunt quam. Mauris vitae eros at ipsum
            hendrerit efficitur sed a nisl. Nullam tristique dui non eros auctor
            malesuada. Praesent auctor sem augue, in hendrerit ante vehicula at.
          </p>
        </div>
        <div className="photo-section">
          <img src={sampleImage} alt="Sample" />
        </div>
      </div>
      <div className="paragraph-container">
        <h2>What makes Pool Different?</h2>
        <div className="paragraph-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            hendrerit libero sed suscipit feugiat. Maecenas tristique egestas
            ante non tincidunt. Etiam non arcu ut ante pulvinar consequat vel
            vitae nisi. Maecenas iaculis felis eget ex faucibus, quis sagittis
            eros blandit. Nulla ut tincidunt quam. Mauris vitae eros at ipsum
            hendrerit efficitur sed a nisl. Nullam tristique dui non eros auctor
            malesuada. Praesent auctor sem augue, in hendrerit ante vehicula at.
            Duis sem nisl, porttitor nec elementum et, fringilla ac ligula.
            Aenean facilisis sem vel diam blandit tincidunt. Sed fringilla nisi
            a ante suscipit fringilla ac ut ex. Maecenas ac mi et justo pretium
            imperdiet. Pellentesque sodales lectus ac felis condimentum
            imperdiet porttitor et libero. Donec non magna eget ante cursus
            vehicula ut sit amet felis. In laoreet sollicitudin ex vel placerat.
            Nullam sed tempus felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
