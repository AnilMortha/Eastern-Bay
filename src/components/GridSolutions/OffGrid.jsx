import React from "react";

const OffGrid = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="inner-hero text-white py-5"
        style={{
          background: "url('/assets/img/bg/breadcumb-bg.jpg') center/cover no-repeat",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="fw-bold display-5 text-white">Off-Grid Solar Solutions</h1>
          <p className="mt-3 fs-5 text-white">
            100% independent power system — ideal for remote areas, farms & homes without grid access.
          </p>
        </div>
      </section>

      {/* What is Off Grid */}
      <section className="section-padding my-30">
        <div className="container">
          <div className="row gy-4 align-items-center">

            <div className="col-lg-6">
              <img src="/assets/img/offgrid.jpg" alt="" className="img-fluid rounded shadow" />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">What is an Off-Grid Solar System?</h2>
              <p>
                An off-grid solar system allows you to produce your own electricity
                without depending on the government power supply. Energy generated
                from solar panels is stored in batteries and used whenever needed,
                ensuring complete energy independence day and night.
              </p>
              <p>
                Perfect for remote homes, farmhouses, rural areas, and locations with
                frequent power cuts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-light py-5 my-30">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">How Off-Grid Solar Works</h2>

          <div className="row gy-4 text-center">

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold mt-3">Solar Panels</h5>
                <p>Capture sunlight and convert it to DC electricity.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold mt-3">Charge Controller</h5>
                <p>Regulates power from panels to protect batteries.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold mt-3">Battery Bank</h5>
                <p>Stores electricity for night-time & backup usage.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="fw-bold mt-3">Off-Grid Inverter</h5>
                <p>Converts stored DC power into usable AC power.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Benefits of Off-Grid Solar</h2>

          <div className="row gy-4">
            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="fw-bold">✔ 100% Independence</h4>
                <p>No reliance on electricity boards or rising power tariffs.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="fw-bold">✔ Zero Power Cuts</h4>
                <p>Stored energy ensures uninterrupted supply 24/7.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="fw-bold">✔ Ideal for Remote Areas</h4>
                <p>Works efficiently where no grid power is available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="bg-light py-5 my-30">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">System Components</h2>

          <div className="row gy-4">
            <div className="col-md-3 text-center">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#47b2d6" d="M121.8 32c-30 0-56 20.8-62.5 50.1l-49.7 224C.7 346.1 31.1 384 72 384h184.1v64h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64v-64h184.1c40.9 0 71.4-37.9 62.5-77.9l-49.8-224C510.4 52.8 484.5 32 454.5 32zm123.8 64h85.2l7.3 88h-99.8zm-55.5 88h-87.8l19.6-88h75.6l-7.3 88zm-98.5 48h94.5l-7.3 88H72.1l19.6-88zm142.6 0H342l7.3 88H226.8l7.3-88zm156 0h94.5l19.6 88H397.6l-7.3-88zm83.8-48h-87.8l-7.3-88h75.6l19.6 88z"/></svg>
              <h6 className="fw-bold mt-2">Solar Panels</h6>
            </div>

            <div className="col-md-3 text-center">
              
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill=" #47b2d6" d="M8.042 14.227h2.534a.23.23 0 0 1 .23.23v1.737a.23.23 0 0 1-.23.23H8.042a.23.23 0 0 1-.23-.23v-1.737a.23.23 0 0 1 .23-.23m-1.13 5.825a31.825 31.825 0 0 0 4.931.3a32.27 32.27 0 0 0 4.963-.3a.726.726 0 0 0 .615-.769v-.266h-11.3v.255a.885.885 0 0 0 .791.78m10.509-17.83h-.728A47.373 47.373 0 0 0 11.95 2c-2.833 0-4.843.161-5.495.221h-.334v16.494h11.3zM12.2 9.5v-.151c1.781 0 3.585.38 3.585 1.106c0 .726-1.8 1.091-3.588 1.091s-3.585-.375-3.585-1.091s1.8-1.106 3.585-1.106V9.5Zm-1.627 4.424a.534.534 0 0 1 .533.534v1.736a.533.533 0 0 1-.533.533h-2.53a.534.534 0 0 1-.534-.533v-1.736a.535.535 0 0 1 .534-.534zm9.254 4.67V4.224l-2.04-1.889l-.063-.006v16.386h2.1v-.121zM5.818 2.7L4.173 4.215v14.5h1.646zm11.906 16.573a1.028 1.028 0 0 1-.875 1.08a32.624 32.624 0 0 1-5.006.3h-.535a32.091 32.091 0 0 1-4.432-.309a1.189 1.189 0 0 1-1.057-1.065v-.27H4.178C4.241 21.611 5.03 22 11.949 22c6.953 0 7.8-.427 7.872-2.982h-2.1z" class="cls-1"/></svg>
              <h6 className="fw-bold mt-2">Off-Grid Inverter</h6>
            </div>

            <div className="col-md-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#47b2d6" d="M18.058 9.038v-.3h-12.4v3.5h12.4zm-12.4 8.4h-.7v.4h.7v.3h-.7v.4h.7v.3h-.7v.4h.7v.1a1.367 1.367 0 0 0 1.4 1.4h9.6a1.367 1.367 0 0 0 1.4-1.4v-2.6h-12.4zm12.4-13a1.211 1.211 0 0 0-1.3-1.3h-.2v-.8h-.5v.8h-9a1.415 1.415 0 0 0-1.4 1.3v3.8h12.4zm-4.9 1.5h-2.6a.9.9 0 0 1-.9-.9c.1-.5.4-.9.9-.9h2.6a.9.9 0 1 1 0 1.8m4.9 9v-2.2h-12.4v3.6h12.4z"/></svg>
              <h6 className="fw-bold mt-2">Lithium/Lead Batteries</h6>
            </div>

            <div className="col-md-3 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#47b2d6" d="M17.757 11.771h3.257v.904h-3.257zm0 1.149h3.257v.904h-3.257zm0 1.121h3.257v.904h-3.257zm0 1.12h3.257v.904h-3.257zm.008 1.39a.635.635 0 0 0 .635.635h2a.636.636 0 0 0 .635-.635v-.269h-3.27zm3.287-9.609h-.122v-.337a.154.154 0 0 0-.153-.153h-2.783a.154.154 0 0 0-.153.153v.337h-.091a.947.947 0 0 0-.948.947v9.153c-1.238-1.843-1.4-1.754-1.517-1.694c-.117.06-.091.186-.064.418a5.429 5.429 0 0 1 .041.907c-.025.539-.045 1.005-.322 1.19a1.082 1.082 0 0 1-.851 0a1.839 1.839 0 0 1-.549-.295c.01.008.022.013.032.021l2.771-5.284l-.076-.219l-3.083 5.9H2.08l.117.256h11.035l.237-.451a2.456 2.456 0 0 0 .569.257a1.721 1.721 0 0 0 .658.1a.744.744 0 0 0 .345-.117c.355-.238.378-.748.4-1.339a5.426 5.426 0 0 0-.042-.937a2.117 2.117 0 0 1-.018-.216a9.472 9.472 0 0 1 1.457 1.923a.944.944 0 0 0 .908.691h3.3A.947.947 0 0 0 22 17.2V7.889a.947.947 0 0 0-.948-.947m.168 9.721a.726.726 0 0 1-.726.726h-2.217a.726.726 0 0 1-.726-.726V8.32a.726.726 0 0 1 .726-.726h2.217a.726.726 0 0 1 .726.726ZM11.153 9.356a.059.059 0 0 0 .077-.035l.415-1.14a.061.061 0 0 0-.036-.077a.059.059 0 0 0-.076.036l-.415 1.14a.058.058 0 0 0 .035.076m.835.428l.779-.929a.061.061 0 0 0-.007-.085a.06.06 0 0 0-.084.008l-.78.929a.059.059 0 0 0 .008.084a.06.06 0 0 0 .084-.007m.472.672a.059.059 0 0 0 .081.022l1.051-.606a.06.06 0 0 0 .021-.082a.059.059 0 0 0-.081-.022l-1.05.606a.06.06 0 0 0-.022.082m.295.815a.06.06 0 0 0 .069.049l1.2-.211a.06.06 0 0 0 .048-.069a.06.06 0 0 0-.072-.049l-1.2.209a.06.06 0 0 0-.045.071m-6.18-.171l1.194.211a.06.06 0 0 0 .021-.118l-1.2-.21a.06.06 0 1 0-.02.117Zm1.479-.629a.06.06 0 0 0 .082-.022a.059.059 0 0 0-.022-.081l-1.05-.607a.06.06 0 1 0-.06.1zm.556-.693a.059.059 0 0 0 .084.008A.06.06 0 0 0 8.7 9.7l-.78-.929a.06.06 0 1 0-.091.076Zm.836-.424a.06.06 0 0 0 .035-.077l-.414-1.14a.06.06 0 0 0-.113.041l.415 1.14a.061.061 0 0 0 .077.036M10.3 9.2a.059.059 0 0 0 .06-.059V7.932a.06.06 0 1 0-.12 0v1.213a.059.059 0 0 0 .06.055m-3.486 2.476a.044.044 0 0 0-.033.014a.044.044 0 0 0-.014.034a.047.047 0 0 0 .047.047h6.963a.048.048 0 0 0 .034-.014a.044.044 0 0 0 .014-.033a.047.047 0 0 0-.048-.048h-1.285a2.2 2.2 0 0 0-4.393 0zm9.406.25H5.019L2 17.85h11.122zm-.643.441l-1.224 2.341h-.221l1.222-2.341zm-.336 0l-1.222 2.341h-.238L15 12.367Zm-.352 0l-1.221 2.341h-.221l1.22-2.341zm-.335 0l-1.22 2.341H13.1l1.22-2.341zm-.346 0l-1.219 2.341h-.222l1.219-2.341zm-.335 0l-1.219 2.341h-.238l1.218-2.341zm-.352 0L12.3 14.708h-.221l1.221-2.341Zm-.6 0l-1.216 2.341h-.221l1.216-2.341Zm-.335 0l-1.215 2.341h-.238l1.214-2.341zm-.352 0l-1.214 2.341h-.22l1.214-2.341zm-.335 0l-1.213 2.341h-.233l1.212-2.341zm-.347 0l-1.212 2.341h-.221l1.211-2.341zm-.335 0l-1.211 2.341h-.238l1.21-2.341zm-.352 0l-1.21 2.341h-.221l1.209-2.341zm-.631 0l-1.209 2.341H8.8l1.207-2.341zm-.336 0l-1.207 2.341h-.238l1.206-2.341zm-.352 0L8.34 14.708h-.222l1.206-2.341zm-.335 0l-1.2 2.341h-.238l1.205-2.341zm-.346 0l-1.2 2.341h-.226l1.2-2.341zm-.335 0l-1.2 2.341h-.242l1.2-2.341zm-.352 0l-1.2 2.341h-.224l1.2-2.341zm-.632 0l-1.2 2.341h-.222l1.2-2.341zm-.335 0l-1.2 2.341h-.238l1.2-2.341zm-.352 0l-1.2 2.341h-.22l1.2-2.341zm-.335 0l-1.2 2.341h-.231l1.2-2.341zm-.347 0l-1.2 2.341h-.218l1.2-2.341zm-.335 0l-1.2 2.341h-.234L5.6 12.367Zm-.574 0h.222L4.3 14.708h-.226Zm-2.584 5.065l1.195-2.341H4.1l-1.195 2.341zm.333 0l1.2-2.341h.238l-1.2 2.341zm.35 0l1.2-2.341h.221l-1.2 2.341zm.333 0l1.2-2.341h.23l-1.2 2.341zm.345 0l1.2-2.341h.221l-1.2 2.341zm.333 0l1.2-2.341h.238l-1.2 2.341zm.349 0l1.2-2.341h.221l-1.2 2.341zm.629 0l1.2-2.341h.222l-1.2 2.341zm.333 0l1.2-2.341h.241l-1.2 2.341zm.349 0l1.2-2.341h.222l-1.2 2.341zm.334 0l1.2-2.341h.233L6.6 17.432Zm.344 0l1.206-2.341h.221l-1.206 2.341zm.333 0l1.207-2.341h.238l-1.208 2.341zm.35 0l1.207-2.341h.222l-1.209 2.341zm.628 0l1.209-2.341h.222l-1.211 2.341zm.333 0l1.21-2.341h.238L8.6 17.432Zm.35 0l1.211-2.341h.221L8.93 17.432Zm.333 0l1.212-2.341h.233l-1.213 2.341zm.344 0l1.213-2.341h.222l-1.214 2.341zm.333 0l1.214-2.341h.238l-1.214 2.341zm.35 0l1.215-2.341h.221l-1.215 2.341zm.6 0l1.217-2.341h.213l-1.217 2.341zm.333 0l1.218-2.341h.238l-1.218 2.341zm.35 0l1.219-2.341h.221l-1.223 2.341zm.333 0l1.22-2.341h.233l-1.221 2.341zm.344 0l1.221-2.341h.222l-1.222 2.341zm.333 0l1.222-2.341h.238L12.6 17.432Zm.35 0l1.223-2.341h.221l-1.227 2.341z"/></svg>
              <h6 className="fw-bold mt-2">Charge Controller</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding my-30">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Why Choose Us</h2>

          <div className="row gy-4 text-center">
            <div className="col-md-4">
              <div className="py-4 px-2 shadow-sm rounded bg-white">
                <h4 className="fw-bold">Expert Installation</h4>
                <p>Handled by certified solar engineers.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="py-4 px-2 shadow-sm rounded bg-white">
                <h4 className="fw-bold">Premium Components</h4>
                <p>High-efficiency panels & long-life batteries.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="py-4 px-2 shadow-sm rounded bg-white">
                <h4 className="fw-bold">24/7 Support</h4>
                <p>Dedicated service for maintenance & all.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-white text-center py-5" style={{background:'#c1c1ff'}}>
        <h2 className="fw-bold mb-3">Switch To Reliable Off-Grid Solar</h2>
        <p className="mb-4">Get a custom quote based on your power usage.</p>
        <a href="/contact" className="th-btn black-btn th-icon bg-white text-dark px-4 py-2 rounded">
          Contact Us
        </a>
      </section>
    </>
  );
};

export default OffGrid;
