import React,{useState} from "react";

const Commercial = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="commercial-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6 col-12">
              <h1>Commercial Solar Solutions</h1>
              <p>
                At <strong>EasternBay Solar</strong>, we empower businesses with
                clean, affordable, and high-efficiency solar energy systems.
                From design to installation and maintenance, our expert team
                ensures a seamless journey toward sustainable power.
              </p>

              <p>
                We specialize in On-Grid and Off-Grid solar solutions
                for offices, factories, warehouses, malls, schools, and
                commercial complexes — customized to meet your power demands.
              </p>

              <button className="btn-quote mb-2" onClick={() => setShowQuote(true)}>Get Free Quote</button>
              <p style={{color:"#009ceb", fontStyle:"italic"}}>"Get accurate pricing based on your roof size and electricity requirement."</p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="hero-image">
                <img
                  src="/assets/img/commercial.jpg"
                  alt="Commercial Solar Panels"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="container">
          <div className="row text-center">

            <div className="col-lg-4 col-md-4 col-12">
              <div className="feature-box">
                <h4>High Power Output</h4>
                <p>
                  Generate maximum energy with advanced panel technology
                  designed for commercial-scale systems.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="feature-box">
                <h4>Lower Energy Costs</h4>
                <p>
                  Reduce electricity bills significantly and gain fast returns
                  on your solar investment.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="feature-box">
                <h4>End-to-End Service</h4>
                <p>
                  Complete support — site survey, design, installation,
                  maintenance, and monitoring.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Power Your Business With Solar</h2>
              <p>
                Join hundreds of businesses switching to renewable energy and
                build a sustainable future.
              </p>

              <button className="btn-contact  mb-2" onClick={() => setShowContact(true)}>Contact Our Experts</button>
              <p>Speak to certified solar professionals for free consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {showQuote && (
        <div className="popup-overlay">
          <div className="popup-box">
            
            <div className="popup-header">
              <h4>Get Free Solar Quote</h4>
              <span className="close-btn" onClick={() => setShowQuote(false)}>✕</span>
            </div>

            <form className="popup-form">
              <div className="row">

                <div className="col-md-6 col-12">
                  <input type="text" placeholder="Full Name" />
                </div>

                <div className="col-md-6 col-12">
                  <input type="tel" placeholder="Mobile Number" />
                </div>

                <div className="col-md-6 col-12">
                  <input type="email" placeholder="Email" />
                </div>

                <div className="col-md-6 col-12">
                  <input type="text" placeholder="City / Location" />
                </div>

                <div className="col-md-6 col-12">
                  <select>
                    <option>Business Type</option>
                    <option>Office</option>
                    <option>Factory</option>
                    <option>Mall</option>
                    <option>School</option>
                    <option>Warehouse</option>
                  </select>
                </div>

                <div className="col-md-6 col-12">
                  <select>
                    <option>System Type</option>
                    <option>On-Grid</option>
                    <option>Off-Grid</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div className="col-12">
                  <textarea placeholder="Your Requirement"></textarea>
                </div>

                <div className="col-12 text-center">
                  <button className="btn-submit">
                    Submit Quote Request
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      )}

      {/* =======================
          CONTACT POPUP MODAL
      ======================== */}

      {showContact && (
        <div className="popup-overlay">
          <div className="popup-box small">

            <div className="popup-header">
              <h4>Contact Our Experts</h4>
              <span className="close-btn" onClick={() => setShowContact(false)}>✕</span>
            </div>

            <form className="popup-form">
              <div className="row">

                <div className="col-12">
                  <input type="text" placeholder="Name" />
                </div>

                <div className="col-12">
                  <input type="tel" placeholder="Mobile Number" />
                </div>

                <div className="col-12">
                  <input type="text" placeholder="City" />
                </div>

                <div className="col-12">
                  <select>
                    <option>Select Requirement</option>
                    <option>Installation</option>
                    <option>Price Enquiry</option>
                    <option>Maintenance</option>
                    <option>Site Survey</option>
                  </select>
                </div>

                <div className="col-12">
                  <textarea placeholder="Message"></textarea>
                </div>

                <div className="col-12 text-center">
                  <button className="btn-submit">
                    Request Callback
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Commercial;
