import React from "react";

const Industrial = () => {
  return (
    <section className="housing-section">
      <div className="container">
        
        {/* Heading */}
        <div className="row mb-4 text-center">
          <div className="col-12">
            <h2 className="section-title">Solar Solutions for Housing Societies</h2>
            <p className="section-subtitle">
              Power your entire community with clean, affordable & reliable solar energy.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="row align-items-center">
          
          {/* Text */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h3 className="content-title">Why Choose Solar for Your Society?</h3>
            <p className="content-text">
              At <strong>My Solar Solutions</strong>, we help housing societies reduce
              electricity bills and dependency on traditional power sources by installing
              high-efficiency On-Grid and Off-Grid solar systems.
            </p>

            <ul className="feature-list">
              <li>✔ Rooftop solar systems for common areas</li>
              <li>✔ Customized power capacity planning</li>
              <li>✔ Net-metering support</li>
              <li>✔ High-quality panels & inverters</li>
              <li>✔ Annual maintenance contracts</li>
            </ul>
          </div>

          {/* Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src="/assets/img/housing.png"
              className="society-image"
              alt="Housing Society Solar Panels"
            />
          </div>

        </div>

        {/* Cards */}
        <div className="row mt-5">
          
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="info-card">
              <h4>On-Grid Systems</h4>
              <p>
                Connect to the electricity grid and reduce monthly bills using
                net-metering benefits.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="info-card">
              <h4>Off-Grid Systems</h4>
              <p>
                Perfect for power backup with batteries to ensure continuous
                electricity supply.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
            <div className="info-card">
              <h4>Complete Maintenance</h4>
              <p>
                We provide regular monitoring, servicing and cleaning to keep
                your system running at peak efficiency.
              </p>
            </div>
          </div>

        </div>
        

        {/* Enquiry Form */}
<div className="row form-section mt-5">
 <div className="col-lg-6 mb-4 form-left">

  <h3 className="form-title">Request a Free Site Survey</h3>

  <p className="form-text">
    Planning solar installation for your housing society?
    Share your details and our team will contact you shortly.
  </p>

  <ul className="form-highlights">
    <li>✔ Free rooftop feasibility check</li>
    <li>✔ Custom solar capacity calculation</li>
    <li>✔ Net-metering support guidance</li>
    <li>✔ ROI & savings estimation</li>
    <li>✔ Quick installation timeline</li>
  </ul>

  <div className="contact-box">
    <p><strong>Call Us:</strong> +91 98765 43210</p>
    <p><strong>Email:</strong> info@mysolarsolutions.com</p>
  </div>

</div>


  <div className="col-lg-6">
    <form className="solar-form">

      <div className="row">
        <div className="col-md-6 mb-3">
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>

        <div className="col-md-6 mb-3">
          <input type="text" className="form-control" placeholder="Mobile Number" />
        </div>
      </div>

      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Email Address" />
      </div>

      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Society Name" />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <input type="text" className="form-control" placeholder="Number of Flats" />
        </div>

        <div className="col-md-6 mb-3">
          <select className="form-control">
            <option>System Type</option>
            <option>On-Grid</option>
            <option>Off-Grid</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <textarea rows="4" className="form-control" placeholder="Message"></textarea>
      </div>

      <button className="submit-btn">
        Submit Enquiry
      </button>

    </form>
  </div>
</div>


      </div>
    </section>
  );
};

export default Industrial;
