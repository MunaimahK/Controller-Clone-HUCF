import React from "react";
import Navbar from "./Navbar";
import bannerImg from "./banner-globe.png";

const Home = () => {
  const logo = process.env.HOME_PAGE_IMAGE;

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h1 className="primary-heading">Hack@UCF</h1>
          <p className="primary-text">Let's get Hacking</p>
        </div>
        <div className="home-image-section">
          <img
            className="home-img"
            // src = {logo}
            src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-1/326217856_972910493676296_8537314512659876607_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mkAQmTM5zvkAb6U_4nO&_nc_ht=scontent.ftpa1-2.fna&oh=00_AfC4gDVATbzxbmb30rOEp8vUAV0qCzROBVyu37CGZP3s9w&oe=66261A89"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
