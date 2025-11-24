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
                Building A Cleaner And Energy-Independent Future
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row gy-4 align-items-center">
          {/* Image Side */}
          <div className="col-xl-5 mb-30 mb-xl-0">
            <div className="img-box1 position-relative">
              <div className="img1 th-parallax">
                <img
                  src="/assets/img/aboutus.jpg"
                  alt="About"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="col-xl-7">
            <div className="">
              <p className="mb-25">
                At <strong>My Solar Solutions</strong>, we empower homes,
                businesses, and communities with clean, affordable, and
                high-efficiency solar energy. Our expert team delivers
                end-to-end services—from design and installation to maintenance—
                ensuring a smooth and reliable renewable energy experience.
              </p>

              <p className="mb-25">
                We specialize in Home, Commercial, and Housing Society solar
                systems, offering both Off-Grid and On-Grid solutions tailored
                to your power needs.
              </p>

              {/* Checklist */}
              <div className="checklist list-two-column mb-20">
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Clean & Renewable Energy
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Lower Electricity Bills
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Reliable & Low Maintenance
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-badge-check"></i>
                    Tailored Off-Grid / On-Grid Systems
                  </li>
                </ul>
              </div>

              {/* Button */}
              <div className="btn-group mt-30 justify-content-start">
                <a href="/about" className="th-btn black-btn th-icon">
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
