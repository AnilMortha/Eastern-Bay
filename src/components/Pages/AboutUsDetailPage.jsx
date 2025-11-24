import React from "react";

const AboutUsDetailPage = () => {
  return (
    <>
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
              <li>
                <a href="/home-solar-energy">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main About Section */}
      <section className="about-page section-padding">
        <div className="container">
          <div className="row py-4 align-items-center">
            {/* Image */}
            <div className="col-lg-6">
              <img
                src="/assets/img/aboutus.jpg"
                className="img-fluid rounded"
                alt="About Solar"
              />
            </div>

            {/* Text */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p className="mb-3">
                At <strong>My Solar Solutions</strong>, we are committed to
                building a cleaner, greener, and more sustainable future through
                advanced, high-efficiency solar systems. Our mission is to make
                renewable energy accessible, affordable, and reliable for every
                home and business.
              </p>

              <p className="mb-3">
                With years of expertise in solar installations, engineering, and
                customer support, we ensure seamless project execution—end to
                end.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="row mt-5 gy-4">
            <div className="col-lg-6">
              <div className="p-4 bg-light rounded shadow-sm">
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p>
                  To deliver innovative solar solutions that help customers
                  reduce electricity costs, achieve energy independence, and
                  contribute to a sustainable planet.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 bg-light rounded shadow-sm">
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p>
                  To become a leading solar energy provider by empowering
                  communities with dependable clean energy for a brighter
                  tomorrow.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <section className="mt-5">
            <h2 className="fw-bold mb-4 text-center">Why Choose Us</h2>
            <div className="row gy-4">
              <div className="col-md-3">
                <div className="p-4 bg-white shadow-sm rounded text-center">
                  <h4 className="fw-bold">Expert Team</h4>
                  <p>Trained engineers & certified professionals.</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-4 bg-white shadow-sm rounded text-center">
                  <h4 className="fw-bold">Quality Panels</h4>
                  <p>High-efficiency & long-lasting solar modules.</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-4 bg-white shadow-sm rounded text-center">
                  <h4 className="fw-bold">Affordable Pricing</h4>
                  <p>Best value with transparent costing.</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="p-4 bg-white shadow-sm rounded text-center">
                  <h4 className="fw-bold">Quick Installation</h4>
                  <p>Fast & professional solar setup.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center my-5 p-5 rounded aboutusCTA">
            <h2 className="fw-bold mb-3">Ready To Switch To Solar?</h2>
            <p>
              Let us help you find the perfect solar solution for your needs.
            </p>
            <a
              href="/contact"
              className="th-btn black-btn th-icon bg-white text-dark mt-3"
            >
              Contact Us
            </a>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutUsDetailPage;
