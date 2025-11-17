import React, { useState } from "react";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("Residential");
  const [formData, setFormData] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category:", activeTab);
    console.log("Form Data:", formData);
  };

  // UI for tabs
  const renderTabs = () => (
    <div className="tabs mb-4 d-flex gap-3">
      {["Residential", "Housing Society", "Commercial"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded fw-bold ${
            activeTab === tab ? "btn btn-primary" : "btn btn-outline-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  // -------------------- FORMS --------------------

  // Residential form
  const ResidentialForm = () => (
    <>
      <label className="fw-bold">Full Name *</label>
      <input
        type="text"
        name="fullName"
        className="form-control mb-3"
        placeholder="Enter Full Name"
        onChange={handleChange}
      />

      <label className="fw-bold">WhatsApp Number *</label>
      <input
        type="text"
        name="whatsapp"
        className="form-control mb-3"
        placeholder="Enter WhatsApp Number"
        onChange={handleChange}
      />

      <label className="fw-bold">Pin Code *</label>
      <input
        type="text"
        name="pincode"
        className="form-control mb-3"
        placeholder="Enter Pin Code"
        onChange={handleChange}
      />

      <label className="fw-bold">What is your average monthly bill? *</label>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {[
          "Less than ₹1500",
          "₹1500 – ₹2500",
          "₹2500 – ₹4000",
          "₹4000 – ₹8000",
          "More than ₹8000",
        ].map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => setFormData({ ...formData, bill: val })}
            className={`btn ${
              formData.bill === val ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {val}
          </button>
        ))}
      </div>
    </>
  );

  // Housing Society form
  const HousingSocietyForm = () => (
    <>
      <label className="fw-bold">Full Name *</label>
      <input
        type="text"
        name="fullName"
        className="form-control mb-3"
        placeholder="Enter Full Name"
        onChange={handleChange}
      />

      <label className="fw-bold">Name of Housing Society *</label>
      <input
        type="text"
        name="societyName"
        className="form-control mb-3"
        placeholder="Enter Housing Society Name"
        onChange={handleChange}
      />

      <label className="fw-bold">Pin Code *</label>
      <input
        type="text"
        name="pincode"
        className="form-control mb-3"
        placeholder="Enter Pin Code"
        onChange={handleChange}
      />

      <div className="row">
        <div className="col-md-6">
          <label className="fw-bold">WhatsApp Number *</label>
          <input
            type="text"
            name="whatsapp"
            className="form-control mb-3"
            placeholder="Enter WhatsApp Number"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="fw-bold">Monthly Electricity Bill *</label>
          <select
            className="form-select mb-3"
            name="monthlyBill"
            onChange={handleChange}
          >
            <option>Select Bill Range</option>
            <option value="0 - 50000">0 - 50000</option>
            <option value="50000 - 100000">50000 - 100000</option>
          </select>
        </div>
      </div>

      <label className="fw-bold">What is your designation in Housing Society? *</label>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {["Management committee member", "Resident", "Builder", "Facility Manager"].map(
          (val) => (
            <button
              key={val}
              type="button"
              onClick={() => setFormData({ ...formData, designation: val })}
              className={`btn ${
                formData.designation === val
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
            >
              {val}
            </button>
          )
        )}
      </div>

      <label className="fw-bold">AGM approval status *</label>
      <select
        className="form-select mb-4"
        name="agmStatus"
        onChange={handleChange}
      >
        <option>Select Approval Status</option>
        <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        <option value="Not Started">Not Started</option>
      </select>
    </>
  );

  // Commercial form
  const CommercialForm = () => (
    <>
      <label className="fw-bold">Full Name *</label>
      <input
        type="text"
        name="fullName"
        className="form-control mb-3"
        placeholder="Enter Full Name"
        onChange={handleChange}
      />

      <label className="fw-bold">Company Name *</label>
      <input
        type="text"
        name="companyName"
        className="form-control mb-3"
        placeholder="Enter Company Name"
        onChange={handleChange}
      />

      <label className="fw-bold">City *</label>
      <input
        type="text"
        name="city"
        className="form-control mb-3"
        placeholder="Enter City"
        onChange={handleChange}
      />

      <label className="fw-bold">Pin Code *</label>
      <input
        type="text"
        name="pincode"
        className="form-control mb-3"
        placeholder="Enter Pin Code"
        onChange={handleChange}
      />

      <label className="fw-bold">WhatsApp Number *</label>
      <input
        type="text"
        name="whatsapp"
        className="form-control mb-3"
        placeholder="Enter WhatsApp Number"
        onChange={handleChange}
      />

      <label className="fw-bold">Average Monthly Bill *</label>
      <input
        type="text"
        name="avgBill"
        className="form-control mb-3"
        placeholder="Enter Approx Monthly Bill"
        onChange={handleChange}
      />
    </>
  );

  // Select which form to show
  const renderForm = () => {
    if (activeTab === "Residential") return <ResidentialForm />;
    if (activeTab === "Housing Society") return <HousingSocietyForm />;
    return <CommercialForm />;
  };

  // -------------------- MAIN UI --------------------
  return (
    <div className="container my-5 p-4 shadow rounded bg-white" style={{ maxWidth: "750px", margin: "auto" }}>
      {renderTabs()}

      <form onSubmit={handleSubmit}>
        {renderForm()}

        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" id="agree" />
          <label className="form-check-label">
            I agree to terms of service & privacy policy
          </label>
        </div>

        <button className="btn btn-primary w-100 py-2 fw-bold">
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default Appointment;
