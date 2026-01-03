import React from "react";

const OnGrid = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="inner-hero ongrid-hero py-5 text-white text-center"
      style={{
          background: "url('/assets/img/bg/breadcumb-bg.jpg') center/cover no-repeat",
        }}
      >
        <div className="container py-5">
          <h1 className="display-5 fw-bold text-white">On-Grid Solar System</h1>
          <p className="mt-3 fs-5 text-white">
            Smart • Efficient • Cost-Saving Solar Power Connected Directly to Your Electricity Grid.
          </p>
        </div>
      </section>

      {/* What is On Grid */}
      <section className="section-padding my-30">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-6">
              <img
                src="/assets/img/ongrid.jpg"
                alt="On Grid Solar"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">What is an On-Grid Solar System?</h2>
              <p>
                An <strong>on-grid solar system</strong>, also known as a
                grid-tied system, works directly with your electricity grid.
                When your solar panels generate more power than needed, the
                excess electricity is sent back to the grid — and you earn
                credits through **Net Metering**.
              </p>

              <p>
                It is the most popular and cost-effective solar solution for
                homes, commercial buildings, and industries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">How On-Grid Solar Works</h2>

          <div className="row text-center gy-4">

            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold mb-2">1. Sunlight to Electricity</h5>
                <p>Solar panels convert sunlight into DC power.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold mb-2">2. Inverter Conversion</h5>
                <p>Inverter converts DC into usable AC power.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold mb-2">3. Power Your Home</h5>
                <p>AC power runs your home appliances.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="fw-bold mb-2">4. Excess to Grid</h5>
                <p>Extra units go to the grid & earn credits.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding my-30">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Benefits of On-Grid Solar</h2>

          <div className="row py-4">

            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">Net Metering Benefits</h5>
                <p>Earn credits for unused power sent back to the grid.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">Highly Cost-Effective</h5>
                <p>Lowest installation cost compared to other systems.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                <h5 className="fw-bold">Zero Battery Required</h5>
                <p>Runs directly on grid power, reducing maintenance.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-5 text-white ongridlist">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">On-Grid vs Off-Grid</h2>

          <div className="row gy-4">

            <div className="col-md-6">
              <div className="p-4 bg-white text-dark rounded shadow-sm h-100">
                <h4 className="fw-bold mb-3">On-Grid Solar</h4>
                <ul>
                  <li>✔ Works with electricity grid</li>
                  <li>✔ No battery required</li>
                  <li>✔ Net metering available</li>
                  <li>✔ Best for homes & commercial</li>
                  <li>✔ Lowest system cost</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 bg-white text-dark rounded shadow-sm h-100">
                <h4 className="fw-bold mb-3">Off-Grid Solar</h4>
                <ul>
                  <li>✔ Works without electricity grid</li>
                  <li>✔ Requires battery backup</li>
                  <li>✔ Suitable for remote areas</li>
                  <li>✔ Slightly higher investment</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Interested in Installing On-Grid Solar?</h2>
          <p className="mb-4">
            Contact us for a free site visit, pricing, and solar savings calculation.
          </p>
          <a href="/Appointment" className="th-btn black-btn th-icon">
            <span className="btn-text" data-front="Get Free Quote" data-back="Get Free Quote"></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default OnGrid;
