import React,{useState} from "react";

const Residential = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="residential-section">
      <div className="container">

        <div className="row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="residential-content">
              <span className="subtitle">Residential Solar Solutions</span>

              <h2>
                Power Your Home With <span>Clean Solar Energy</span>
              </h2>

              <p>
                At <strong>My Solar Solutions</strong>, we empower homes with clean,
                affordable, and high-efficiency solar power. Our expert team handles
                everything from system design to installation and maintenance,
                ensuring a smooth transition to renewable energy.
              </p>

              <p>
                We provide customized solar systems for homes with both
                <strong> On-Grid</strong> and <strong> Off-Grid</strong> solutions to
                suit your power needs and budget.
              </p>

              {/* FEATURES */}
              <ul className="features-list">
                <li>✔ Customized design for your roof</li>
                <li>✔ Fast & professional installation</li>
                <li>✔ Low maintenance solutions</li>
                <li>✔ Affordable pricing & EMI options</li>
                <li>✔ 5+ years service support</li>
              </ul>

              <button className="btn solar-btn" onClick={() => setShow(true)}>
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <div className="residential-img">
              <img
                src="/assets/img/home.webp"
                alt="Residential Solar"
                className="img-fluid"
              />
            </div>
          </div>

        </div>

      </div>
      {show && (
        <div className="modal-backdrop-custom">
          <div className="consult-modal">

            <h3>Free Solar Consultation</h3>
            <p>Fill your details & our team will contact you shortly.</p>

            <form className="consult-form">
              <input type="text" placeholder="Your Name" />
              <input type="tel" placeholder="Mobile Number" />
              <input type="text" placeholder="City / Location" />
              <select>
                <option value="">Select Type</option>
                <option>Individual</option>
                <option>Apartments</option>
                <option>Group Housing</option>
              </select>

              <button type="submit">Submit Request</button>
            </form>

            <span className="close-btn" onClick={() => setShow(false)}>
              ✕
            </span>

          </div>
        </div>
      )}
      
    </section>
  );
};

export default Residential;
