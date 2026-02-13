import React, { useState } from "react";

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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

      <style jsx>{`
        /* ===== EASTERN BEY QUOTE SECTION - LIGHT THEME ===== */
        .ebx__quote-universe {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(145deg, #F8FAFC, #F1F5F9);
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* ===== ANIMATED COSMIC BACKGROUND - LIGHT ===== */
        .ebx__quote-cosmos {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .ebx__quote-nebula {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(255,149,0,0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 30%, rgba(139,92,246,0.03) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(16,185,129,0.03) 0%, transparent 50%),
                      radial-gradient(circle at 90% 70%, rgba(236,72,153,0.03) 0%, transparent 50%);
        }

        .ebx__quote-stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 10px 30px, #64748B, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 30px 70px, #FF9500, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 70px 120px, #8B5CF6, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 40px, #64748B, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 180px 90px, #10B981, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 220px 150px, #EC4899, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 280px 60px, #64748B, rgba(0,0,0,0));
          background-size: 300px 300px;
          opacity: 0.1;
          animation: starFloat 20s linear infinite;
        }

        @keyframes starFloat {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-30px) translateX(20px); }
        }

        .ebx__quote-energy {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .ebx__energy-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FF9500;
          border-radius: 50%;
          opacity: 0.2;
          animation: energyFlow 15s linear infinite;
        }

        .ebx__energy-particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .ebx__energy-particle:nth-child(2) { top: 60%; right: 15%; animation-delay: 2s; background: #8B5CF6; }
        .ebx__energy-particle:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 4s; background: #10B981; }
        .ebx__energy-particle:nth-child(4) { top: 40%; right: 30%; animation-delay: 6s; background: #EC4899; }
        .ebx__energy-particle:nth-child(5) { bottom: 20%; left: 40%; animation-delay: 8s; background: #FF9500; }

        @keyframes energyFlow {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-50px) translateX(30px); opacity: 0.4; }
          100% { transform: translateY(-100px) translateX(60px); opacity: 0; }
        }

        .ebx__quote-solar-panels {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(transparent, rgba(255,149,0,0.02));
          mask-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="0" y="0" fill="black"/><rect width="20" height="20" x="25" y="0" fill="black"/><rect width="20" height="20" x="50" y="0" fill="black"/><rect width="20" height="20" x="75" y="0" fill="black"/><rect width="20" height="20" x="0" y="25" fill="black"/><rect width="20" height="20" x="25" y="25" fill="black"/><rect width="20" height="20" x="50" y="25" fill="black"/><rect width="20" height="20" x="75" y="25" fill="black"/></svg>');
          mask-size: 100px 50px;
          mask-repeat: repeat;
          opacity: 0.05;
        }

        .ebx__quote-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        .ebx__quote-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ===== LEFT SIDE - LEGACY CONTENT ===== */
        .ebx__quote-legacy {
          position: relative;
          z-index: 20;
        }

        .ebx__legacy-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 24px;
          background: rgba(255,149,0,0.08);
          border: 1px solid rgba(255,149,0,0.2);
          border-radius: 60px;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          animation: badgePulse 3s infinite;
        }

        @keyframes badgePulse {
          0%, 100% { border-color: rgba(255,149,0,0.2); }
          50% { border-color: rgba(255,149,0,0.4); }
        }

        .ebx__badge-icon {
          font-size: 18px;
          color: #FF9500;
        }

        .ebx__badge-text {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #FF9500;
          text-transform: uppercase;
        }

        .ebx__legacy-title {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          color: #1E3A5F;
          margin-bottom: 25px;
          letter-spacing: -1.5px;
        }

        .ebx__title-highlight {
          display: block;
          color: #FF9500;
          position: relative;
          margin-top: 8px;
        }

       .ebx__title-highlight::before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: -14px;
    padding: 31px;
    width: 100%;
    height: 20px;
    background: rgba(255, 149, 0, 0.1);
    z-index: -1;
    border-radius: 20px;
}

        .ebx__legacy-description {
          margin-bottom: 40px;
        }

        .ebx__legacy-description p {
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
          margin: 0;
        }

        /* ===== STATS ===== */
        .ebx__legacy-stats {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 40px;
          padding: 25px 30px;
          background: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .ebx__stat-item {
          flex: 1;
        }

        .ebx__stat-number {
          margin-bottom: 8px;
        }

        .ebx__stat-value {
          font-size: 32px;
          font-weight: 800;
          color: #FF9500;
        }

        .ebx__stat-label {
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          line-height: 1.5;
        }

        .ebx__stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(0,0,0,0.1);
        }

        /* ===== TRUST BADGES ===== */
        .ebx__legacy-trust {
          display: flex;
          gap: 30px;
        }

        .ebx__trust-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: white;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 40px;
          font-size: 14px;
          font-weight: 500;
          color: #1E3A5F;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .ebx__trust-badge:hover {
          background: rgba(255,149,0,0.04);
          border-color: #FF9500;
          transform: translateY(-2px);
        }

        /* ===== RIGHT SIDE - FORM SANCTUM ===== */
        .ebx__quote-sanctum {
          background: white;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 32px;
          padding: 40px;
          position: relative;
          z-index: 20;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .ebx__quote-sanctum::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #FF9500, #8B5CF6, #10B981, #EC4899);
          opacity: 0.3;
        }

        .ebx__sanctum-header {
          text-align: center;
          margin-bottom: 35px;
          position: relative;
        }

        .ebx__header-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(145deg, rgba(255,149,0,0.08), rgba(255,149,0,0.02));
          border: 1px solid rgba(255,149,0,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          position: relative;
          animation: iconPulse 2s infinite;
        }

        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,149,0,0.2); }
          50% { box-shadow: 0 0 0 10px rgba(255,149,0,0); }
        }

        .ebx__sanctum-title {
          font-size: 28px;
          font-weight: 700;
          color: #1E3A5F;
          margin-bottom: 10px;
        }

        .ebx__sanctum-subtitle {
          font-size: 15px;
          color: #64748B;
          margin: 0;
        }

        /* ===== FORM STYLES ===== */
        .ebx__quote-form {
          position: relative;
        }

        .ebx__form-galaxy {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }

        .ebx__form-field {
          position: relative;
        }

        .ebx__field-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .ebx__form-field:focus-within .ebx__field-icon {
          color: #FF9500;
        }

        .ebx__field-input {
          width: 100%;
          padding: 16px 20px 16px 50px;
          background: #F8FAFC;
          border: 1.5px solid rgba(0,0,0,0.05);
          border-radius: 16px;
          font-size: 16px;
          color: #1E3A5F;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .ebx__field-input:focus {
          outline: none;
          border-color: #FF9500;
          background: white;
          box-shadow: 0 0 0 4px rgba(255,149,0,0.08);
        }

        .ebx__field-input::placeholder {
          color: #94A3B8;
          font-weight: 400;
        }

        .ebx__field-textarea {
          resize: none;
          padding-top: 16px;
        }

        .ebx__form-field:has(.ebx__field-textarea) .ebx__field-icon {
          top: 22px;
          transform: none;
        }

        /* ===== SUBMIT BUTTON ===== */
        .ebx__submit-btn {
          width: 100%;
          padding: 18px 30px;
          background: linear-gradient(145deg, #FF9500, #FFB347);
          border: none;
          border-radius: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .ebx__btn-text {
          font-size: 16px;
          font-weight: 700;
          color: white;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 2;
        }

        .ebx__btn-icon {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .ebx__btn-energy {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.6s ease;
          border-radius: 50%;
        }

        .ebx__submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -10px rgba(255,149,0,0.3);
        }

        .ebx__submit-btn:hover .ebx__btn-icon {
          transform: translateX(6px);
        }

        .ebx__submit-btn:hover .ebx__btn-energy {
          transform: translate(-50%, -50%) scale(2);
        }

        /* ===== SUCCESS MESSAGE ===== */
        .ebx__form-success {
          margin-top: 25px;
          padding: 16px 20px;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #065F46;
          animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== PRIVACY TEXT ===== */
        .ebx__form-privacy {
          margin-top: 20px;
          font-size: 13px;
          color: #94A3B8;
          text-align: center;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .ebx__quote-grid {
            gap: 40px;
          }

          .ebx__legacy-title {
            font-size: 44px;
          }

          .ebx__stat-value {
            font-size: 28px;
          }
        }

        @media (max-width: 992px) {
          .ebx__quote-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ebx__legacy-title {
            font-size: 48px;
          }

          .ebx__legacy-stats {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .ebx__quote-universe {
            padding: 70px 0;
          }

          .ebx__quote-container {
            padding: 0 24px;
          }

          .ebx__legacy-title {
            font-size: 40px;
          }

          .ebx__legacy-stats {
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .ebx__stat-divider {
            display: none;
          }

          .ebx__stat-item {
            width: 100%;
            text-align: center;
          }

          .ebx__legacy-trust {
            flex-direction: column;
            gap: 15px;
          }

          .ebx__quote-sanctum {
            padding: 30px 25px;
          }

          .ebx__sanctum-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .ebx__legacy-title {
            font-size: 32px;
          }

          .ebx__legacy-description p {
            font-size: 16px;
          }

          .ebx__stat-value {
            font-size: 24px;
          }

          .ebx__badge-text {
            font-size: 11px;
            letter-spacing: 1px;
          }

          .ebx__quote-sanctum {
            padding: 25px 20px;
          }

          .ebx__field-input {
            padding: 14px 16px 14px 45px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default RequestQuote;