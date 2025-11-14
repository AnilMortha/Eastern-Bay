import React from "react";

const About = () => {
  return (
    <section className="about-area overflow-hidden space-top" id="about-sec">
      <div className="container">
        {/* Title Section */}
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7">
            <div className="title-area mb-40 text-center">
              <span className="sub-title">Solar - Solar & Renewable Energy</span>
              <h2 className="sec-title">
                We Strive To Lead The Way In The Solar Energy Industry.
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row gy-4 align-items-center">
          {/* Image Side */}
          <div className="col-xl-7 mb-30 mb-xl-0">
            <div className="img-box1 position-relative">
              <div className="img1 th-parallax">
                <img
                  src="/assets/img/normal/about_1_1.jpg"
                  alt="About"
                  className="img-fluid"
                />
              </div>

              <div className="about-wrapp">
                <div className="discount-wrapp">
                  <a
                    href="/"
                    className="play-btn popup-video"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <div className="discount-tag">
                    <span className="discount-anime">
                      Solar Energy Since 1996
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="col-xl-5">
            <div className="ps-xxl-5 ms-xxl-5 me-xl-2">
              <p className="mb-25">
                Solar panels with PV cells convert sunlight directly into
                electricity. PV panels are often installed on rooftops, in solar
                farms, and even in smaller portable chargers. When sunlight hits
                the cells.
              </p>

              {/* Checklist */}
              <div className="checklist list-two-column mb-20">
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Clean and Renewable
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Energy Independence
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Low Maintenance
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Solar Scalability
                  </li>
                </ul>
              </div>

              {/* Profile */}
              {/* <div className="about-profile">
                <div className="signature">
                  <img
                    src="/assets/img/normal/signature.svg"
                    alt="signature"
                  />
                </div>
                <h3 className="box-title">Alines Jannie</h3>
                <p className="box-text">Director of Renewable Group</p>
              </div> */}

              {/* Button */}
              <div className="btn-group mt-30 justify-content-start">
                <a href="/contact" className="th-btn black-btn th-icon">
                  <span
                    className="btn-text"
                    data-back="More About Us"
                    data-front="More About Us"
                  ></span>
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
