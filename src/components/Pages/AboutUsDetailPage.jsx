import React from 'react';
import About from './About.jsx';
const AboutUsDetailPage = () => {
  return (
    <div>
        <div
  className="breadcumb-wrapper"
  style={{
    backgroundImage: `url(/assets/img/bg/breadcumb-bg.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">About Us</h1>
      <ul className="breadcumb-menu">
        <li><a href="/home-solar-energy">Home</a></li>
        <li>About Us</li>
      </ul>
    </div>
  </div>
</div>

      <About/>
    </div>
  );
}

export default AboutUsDetailPage;
