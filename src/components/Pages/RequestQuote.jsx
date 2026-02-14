import React, { useState } from "react";

const RequestQuote = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  });

const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await contact.post("contact.php", formData);
      if (result.status) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: ""
        });

        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert(result.message);
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="ebx__quote-universe">
      {/* Animated Background Layers - Light Theme */}
      <div className="ebx__quote-cosmos">
        <div className="ebx__quote-nebula"></div>
        <div className="ebx__quote-stars"></div>
        <div className="ebx__quote-energy">
          <div className="ebx__energy-particle"></div>
          <div className="ebx__energy-particle"></div>
          <div className="ebx__energy-particle"></div>
          <div className="ebx__energy-particle"></div>
          <div className="ebx__energy-particle"></div>
        </div>
        <div className="ebx__quote-solar-panels"></div>
      </div>

      <div className="ebx__quote-container">
        <div className="ebx__quote-grid">
          {/* Left Side - Premium Content */}
          <div className="ebx__quote-legacy">
            <div className="ebx__legacy-badge">
              <span className="ebx__badge-icon">⚡</span>
              <span className="ebx__badge-text">REQUEST A QUOTE</span>
            </div>

            <h2 className="ebx__legacy-title">
              Transform Your Energy Future
              <span className="ebx__title-highlight">Today</span>
            </h2>

            <div className="ebx__legacy-description">
              <p>Talk About How We Can Help You Reduce Your Energy Costs and successfully manage your carbon emissions with investment free solar technologies.</p>
            </div>

            {/* Premium Stats */}
            <div className="ebx__legacy-stats">
              <div className="ebx__stat-item">
                <div className="ebx__stat-number">
                  <span className="ebx__stat-value">2000+</span>
                </div>
                <div className="ebx__stat-label">Installations Complete</div>
              </div>
              <div className="ebx__stat-divider"></div>
              <div className="ebx__stat-item">
                <div className="ebx__stat-number">
                  <span className="ebx__stat-value">₹15Cr+</span>
                </div>
                <div className="ebx__stat-label">Energy Savings</div>
              </div>
              <div className="ebx__stat-divider"></div>
              <div className="ebx__stat-item">
                <div className="ebx__stat-number">
                  <span className="ebx__stat-value">24/7</span>
                </div>
                <div className="ebx__stat-label">Telugu Support</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="ebx__legacy-trust">
              <div className="ebx__trust-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>NEDCAP Empaneled</span>
              </div>
              <div className="ebx__trust-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#FF9500" strokeWidth="1.5"/>
                  <path d="M12 8V12L15 15" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>DISCOM Approved</span>
              </div>
            </div>
          </div>

          {/* Right Side - Premium Form */}
          <div className="ebx__quote-sanctum">
            <div className="ebx__sanctum-header">
              <div className="ebx__header-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H9" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M15 4H19V8" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M21 3L12 12" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="17" cy="7" r="1" fill="#FF9500"/>
                </svg>
              </div>
              <h3 className="ebx__sanctum-title">Get Instant Quote</h3>
              <p className="ebx__sanctum-subtitle">We'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="ebx__quote-form">
              <div className="ebx__form-galaxy">
                <div className="ebx__form-field">
                  <div className="ebx__field-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#1E3A5F" strokeWidth="1.5"/>
                      <path d="M22 6L12 13L2 6" stroke="#1E3A5F" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="ebx__field-input"
                    name="name"
                    placeholder="Company Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ebx__form-field">
                  <div className="ebx__field-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#1E3A5F" strokeWidth="1.5"/>
                      <path d="M22 6L12 13L2 6" stroke="#1E3A5F" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="ebx__field-input"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ebx__form-field">
                  <div className="ebx__field-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="#1E3A5F" strokeWidth="1.5"/>
                      <circle cx="12" cy="18" r="1" fill="#1E3A5F"/>
                    </svg>
                  </div>
                  <input
                    type="tel"
                    className="ebx__field-input"
                    name="number"
                    placeholder="Phone Number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ebx__form-field">
                  <div className="ebx__field-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="#1E3A5F" strokeWidth="1.5"/>
                      <circle cx="12" cy="18" r="1" fill="#1E3A5F"/>
                    </svg>
                  </div>
                 <input
                    type="text"
                    className="ebx__field-input"
                    name="subject"
                    placeholder="Subject (e.g. 100KW Solar Plant)"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                 

                <div className="ebx__form-field">
                  <div className="ebx__field-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#1E3A5F" strokeWidth="1.5"/>
                      <path d="M6 8H18" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M6 12H14" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <textarea
                    name="message"
                    rows="3"
                    className="ebx__field-input ebx__field-textarea"
                    placeholder="Tell us about your energy requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="ebx__form-constellation">
                <button type="submit" className="ebx__submit-btn">
                  <span className="ebx__btn-text">Send Your Request</span>
                  <span className="ebx__btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="white" strokeWidth="1.5"/>
                      <path d="M14 7L19 12L14 17" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <div className="ebx__btn-energy"></div>
                </button>
              </div>

              {isSubmitted && (
                <div className="ebx__form-success">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="1.5"/>
                    <path d="M8 12L11 15L16 9" stroke="#10B981" strokeWidth="1.5"/>
                  </svg>
                  <span>Thank you! We'll contact you shortly.</span>
                </div>
              )}

              <p className="ebx__form-privacy">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default RequestQuote;