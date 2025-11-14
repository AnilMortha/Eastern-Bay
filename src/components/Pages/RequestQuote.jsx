import React from "react";

const RequestQuote = () => {
  return (
    <section className="overflow-hidden" style={{paddingTop:"20px"}}>
      <div className="container">
        <div className="appointment-area position-relative">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-6">
              <div className="title-area mb-0 text-xl-start pe-xxl-5 me-xxl-5 space">
                <span className="sub-title">Request A Quote</span>
                <h2 className="sec-title text-white">
                  Talk About How We Can Help You Reduce Your Energy
                </h2>
                <p className="sec-desc me-xl-5">
                  Costs and successfully manage your carbon emissions with
                  investment free solar technologies.
                </p>
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="col-lg-6">
              <div className="appointment-area-wrapper">
                <form
                  action="https://html.themehour.net/solar/demo/mail.php"
                  method="POST"
                  className="appointment-form input-smoke ajax-contact"
                >
                  <div className="row">
                    <div className="form-group col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group col-12">
                      <input
                        type="tel"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="3"
                        className="form-control"
                        placeholder="Write Messages..."
                      ></textarea>
                    </div>
                    <div className="form-btn col-12">
                      <button type="submit" className="th-btn fw-btn">
                        <span
                          className="btn-text"
                          data-back="Send Messages"
                          data-front="Send Messages"
                        ></span>
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>

          {/* Shape Image */}
          <div
            className="shape-mockup d-none d-xxl-block"
            data-bottom="0%"
            data-right="-10%"
          >
            <img src="assets/img/shape/shape-2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;
