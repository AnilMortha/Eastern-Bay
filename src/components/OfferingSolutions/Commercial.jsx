import React, { useState } from "react";
import { Link } from "react-router-dom";

const Commercial = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Custom SVG Icons
  const icons = {
    factory: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="8" width="16" height="12" rx="1" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 12H10" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 12H16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 16H10" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 16H16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 4V8" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    office: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V8L12 4L20 8V20" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <rect x="8" y="12" width="8" height="8" rx="1" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    warehouse: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M3 13L12 7L21 13V20H3V13Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 16H16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    school: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M6 11V16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 11V16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    rupee: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 6H18M6 12H16M14 18L8 12" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    calendar: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M8 2V6" stroke="white" strokeWidth="1.5"/>
        <path d="M16 2V6" stroke="white" strokeWidth="1.5"/>
        <path d="M3 10H21" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    location: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    check: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17L4 12" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    arrow: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19" stroke="white" strokeWidth="1.5"/>
        <path d="M14 7L19 12L14 17" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    close: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#0A1A2A" strokeWidth="1.5"/>
        <path d="M6 6L18 18" stroke="#0A1A2A" strokeWidth="1.5"/>
      </svg>
    ),
    building: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 8H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 8H16" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M8 12H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 12H16" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    energy: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    support: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 8V12L15 15" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    )
  };

  const businessTypes = [
    { id: 1, name: "Offices & IT Parks", icon: icons.office },
    { id: 2, name: "Factories & Manufacturing", icon: icons.factory },
    { id: 3, name: "Warehouses & Logistics", icon: icons.warehouse },
    { id: 4, name: "Schools & Educational", icon: icons.school },
    { id: 5, name: "Shopping Malls", icon: icons.building },
    { id: 6, name: "Hotels & Hospitals", icon: icons.building }
  ];

  const benefits = [
    {
      id: 1,
      title: "30-50% Operational Cost Reduction",
      desc: "Significant savings on monthly electricity bills for businesses",
      icon: icons.rupee
    },
    {
      id: 2,
      title: "80% Depreciation Benefit",
      desc: "Tax benefits under Income Tax Act for commercial installations",
      icon: icons.check
    },
    {
      id: 3,
      title: "Quick ROI: 3-4 Years",
      desc: "Fast payback period for commercial solar investments",
      icon: icons.energy
    },
    {
      id: 4,
      title: "AP Government Approvals",
      desc: "NEDCAP & DISCOM approvals handled by our team",
      icon: icons.location
    }
  ];

  const stats = [
    { id: 1, value: "50+", label: "Commercial Installations" },
    { id: 2, value: "2.5MW", label: "Total Capacity Installed" },
    { id: 3, value: "₹45L", label: "Annual Savings for Clients" }
  ];

  return (
    <div className="ebc__master">
      
      {/* ===== HERO SECTION ===== */}
      <section className="ebc__hero">
        <div className="ebc__heroBg"></div>
        <div className="ebc__container">
          <div className="ebc__heroGrid">
            <div className="ebc__heroContent">
              <div className="ebc__heroBadge">
                <span className="ebc__badgePulse"></span>
                <span>COMMERCIAL SOLAR • ANDHRA PRADESH</span>
              </div>
              <h1 className="ebc__heroTitle">
                Commercial Solar <span>Solutions for AP Businesses</span>
              </h1>
              <p className="ebc__heroDesc">
                Power your office, factory, or warehouse with clean energy. 
                Reduce operational costs by 30-50% with custom-designed 
                on-grid and off-grid systems.
              </p>

              {/* Stats */}
              <div className="ebc__heroStats">
                {stats.map(stat => (
                  <div key={stat.id} className="ebc__stat">
                    <span className="ebc__statValue">{stat.value}</span>
                    <span className="ebc__statLabel">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="ebc__heroCTA">
                <button className="ebc__btn ebc__btn--primary" onClick={() => setShowQuoteModal(true)}>
                  <span>Get Free Quote</span>
                  {icons.arrow}
                </button>
                <button className="ebc__btn ebc__btn--secondary" onClick={() => setShowContactModal(true)}>
                  <span>Talk to Expert</span>
                </button>
              </div>
              <p className="ebc__heroNote">Get accurate pricing based on your roof size and electricity requirement</p>
            </div>

            <div className="ebc__heroImage">
              <img src="/assets/img/commercial.jpg" alt="Commercial Solar Installation" />
              <div className="ebc__imageBadge">
                <span className="ebc__badgeIcon">{icons.location}</span>
                <span>Serving Businesses Across AP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUSINESS TYPES ===== */}
      <section className="ebc__business">
        <div className="ebc__container">
          <div className="ebc__sectionHeader">
            <span className="ebc__sectionTag">WE SERVE ALL BUSINESSES</span>
            <h2 className="ebc__sectionTitle">Tailored Solar Solutions for <span>Every Industry</span></h2>
          </div>

          <div className="ebc__businessGrid">
            {businessTypes.map(type => (
              <div key={type.id} className="ebc__businessCard">
                <div className="ebc__businessIcon">{type.icon}</div>
                <h3 className="ebc__businessName">{type.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="ebc__features">
        <div className="ebc__container">
          <div className="ebc__featuresGrid">
            <div className="ebc__featureCard">
              <div className="ebc__featureIcon">{icons.energy}</div>
              <h4>High Power Output</h4>
              <p>Generate maximum energy with advanced panel technology designed for commercial-scale systems</p>
            </div>
            <div className="ebc__featureCard">
              <div className="ebc__featureIcon">{icons.rupee}</div>
              <h4>Lower Energy Costs</h4>
              <p>Reduce electricity bills significantly and gain fast returns on your solar investment</p>
            </div>
            <div className="ebc__featureCard">
              <div className="ebc__featureIcon">{icons.support}</div>
              <h4>End-to-End Service</h4>
              <p>Complete support — site survey, design, installation, maintenance, and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="ebc__benefits">
        <div className="ebc__container">
          <div className="ebc__benefitsGrid">
            {benefits.map(benefit => (
              <div key={benefit.id} className="ebc__benefitCard">
                <div className="ebc__benefitIcon">{benefit.icon}</div>
                <div className="ebc__benefitContent">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AP SERVICE AREA ===== */}
      <section className="ebc__service">
        <div className="ebc__container">
          <div className="ebc__serviceContent">
            <h2 className="ebc__serviceTitle">Serving <span>Andhra Pradesh</span> Businesses</h2>
            <p className="ebc__serviceDesc">
              From Visakhapatnam to Tirupati, Vijayawada to Kakinada — 
              we've installed commercial solar systems across all 13 districts.
            </p>
            <div className="ebc__serviceCities">
              <span className="ebc__city">విశాఖపట్నం</span>
              <span className="ebc__city">విజయవాడ</span>
              <span className="ebc__city">గుంటూరు</span>
              <span className="ebc__city">తిరుపతి</span>
              <span className="ebc__city">కాకినాడ</span>
              <span className="ebc__city">రాజమండ్రి</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="ebc__cta">
        <div className="ebc__container">
          <div className="ebc__ctaCard">
            <h2 className="ebc__ctaTitle">Power Your Business With Solar</h2>
            <p className="ebc__ctaDesc">
              Join hundreds of businesses switching to renewable energy. 
              Free site inspection • Custom design • AP government approvals
            </p>
            <div className="ebc__ctaButtons">
              <button className="ebc__ctaButton ebc__ctaButton--primary" onClick={() => setShowQuoteModal(true)}>
                <span className="ebc__ctaIcon">{icons.calendar}</span>
                <span>Get Free Quote</span>
                <span className="ebc__ctaArrow">{icons.arrow}</span>
              </button>
              <button className="ebc__ctaButton ebc__ctaButton--secondary" onClick={() => setShowContactModal(true)}>
                <span>Contact Experts</span>
              </button>
            </div>
            <p className="ebc__ctaNote">Speak to certified solar professionals for free consultation</p>
          </div>
        </div>
      </section>

      {/* ===== QUOTE MODAL ===== */}
      {showQuoteModal && (
        <div className="ebc__modalOverlay">
          <div className="ebc__modal ebc__modal--large">
            <button className="ebc__modalClose" onClick={() => setShowQuoteModal(false)}>
              {icons.close}
            </button>
            
            <div className="ebc__modalHeader">
              <h3>Get Free Commercial Solar Quote</h3>
              <p>Fill details for accurate pricing based on your business requirement</p>
            </div>

            <form className="ebc__modalForm">
              <div className="ebc__formRow">
                <div className="ebc__formGroup">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="ebc__formGroup">
                  <input type="tel" placeholder="Mobile Number" required />
                </div>
              </div>

              <div className="ebc__formRow">
                <div className="ebc__formGroup">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="ebc__formGroup">
                  <input type="text" placeholder="City / Location" required />
                </div>
              </div>

              <div className="ebc__formRow">
                <div className="ebc__formGroup">
                  <select required>
                    <option value="">Business Type</option>
                    <option>Office / IT Park</option>
                    <option>Factory / Manufacturing</option>
                    <option>Warehouse / Logistics</option>
                    <option>School / Educational</option>
                    <option>Shopping Mall</option>
                    <option>Hotel / Hospital</option>
                  </select>
                </div>
                <div className="ebc__formGroup">
                  <select required>
                    <option value="">System Type</option>
                    <option>On-Grid (Grid Connected)</option>
                    <option>Off-Grid (With Battery)</option>
                    <option>Hybrid System</option>
                  </select>
                </div>
              </div>

              <div className="ebc__formRow">
                <div className="ebc__formGroup">
                  <input type="text" placeholder="Approximate Monthly Bill (₹)" />
                </div>
                <div className="ebc__formGroup">
                  <input type="text" placeholder="Roof Area (sq.ft)" />
                </div>
              </div>

              <div className="ebc__formGroup">
                <textarea placeholder="Your Requirement (Optional)" rows="3"></textarea>
              </div>

              <button type="submit" className="ebc__modalSubmit">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===== CONTACT MODAL ===== */}
      {showContactModal && (
        <div className="ebc__modalOverlay">
          <div className="ebc__modal">
            <button className="ebc__modalClose" onClick={() => setShowContactModal(false)}>
              {icons.close}
            </button>
            
            <div className="ebc__modalHeader">
              <h3>Contact Our Experts</h3>
              <p>Speak to certified solar professionals</p>
            </div>

            <form className="ebc__modalForm">
              <div className="ebc__formGroup">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="ebc__formGroup">
                <input type="tel" placeholder="Mobile Number" required />
              </div>
              <div className="ebc__formGroup">
                <input type="text" placeholder="City" required />
              </div>
              <div className="ebc__formGroup">
                <select required>
                  <option value="">Select Requirement</option>
                  <option>New Installation</option>
                  <option>Price Enquiry</option>
                  <option>Maintenance</option>
                  <option>Site Survey</option>
                </select>
              </div>
              <div className="ebc__formGroup">
                <textarea placeholder="Message (Optional)" rows="2"></textarea>
              </div>
              <button type="submit" className="ebc__modalSubmit">
                Request Callback
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== COMMERCIAL PAGE - EASTERN BEY ===== */
        /* PREFIX: ebc__ - 100% UNIQUE */
        
        .ebc__master {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        .ebc__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ===== HERO SECTION ===== */
        .ebc__hero {
          position: relative;
          padding-top: 150px ;
          background: linear-gradient(145deg, #F8FAFC, white);
        }

        .ebc__heroGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .ebc__heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,149,0,0.08);
          padding: 10px 22px;
          border-radius: 50px;
          margin-bottom: 30px;
          border: 1px solid rgba(255,149,0,0.2);
        }

        .ebc__badgePulse {
          width: 8px;
          height: 8px;
          background: #FF9500;
          border-radius: 50%;
          animation: ebcPulse 2s infinite;
        }

        .ebc__heroTitle {
          font-size: 48px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ebc__heroTitle span {
          color: #FF9500;
          position: relative;
        }

        .ebc__heroTitle span::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(255,149,0,0.12);
          z-index: -1;
        }

        .ebc__heroDesc {
          font-size: 17px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 30px;
        }

        .ebc__heroStats {
          display: flex;
          gap: 40px;
          margin-bottom: 35px;
        }

        .ebc__statValue {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: #FF9500;
          line-height: 1;
          margin-bottom: 5px;
        }

        .ebc__statLabel {
          font-size: 14px;
          color: #64748B;
        }

        .ebc__heroCTA {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
        }

        .ebc__btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ebc__btn--primary {
          background: #FF9500;
          color: white;
        }

        .ebc__btn--primary:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,149,0,0.3);
        }

        .ebc__btn--secondary {
          background: transparent;
          color: #0A1A2A;
          border: 2px solid rgba(0,0,0,0.1);
        }

        .ebc__btn--secondary:hover {
          border-color: #FF9500;
          color: #FF9500;
          transform: translateY(-3px);
        }

        .ebc__heroNote {
          font-size: 14px;
          color: #FF9500;
          font-style: italic;
        }

        .ebc__heroImage {
          position: relative;
        }

        .ebc__heroImage img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .ebc__imageBadge {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: white;
          padding: 14px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,149,0,0.2);
        }

        /* ===== BUSINESS TYPES ===== */
        .ebc__business {
          padding: 80px 0;
          background: white;
        }

        .ebc__sectionHeader {
          text-align: center;
          margin-bottom: 50px;
        }

        .ebc__sectionTag {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #FF9500;
          background: rgba(255,149,0,0.08);
          padding: 8px 20px;
          border-radius: 4px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .ebc__sectionTitle {
          font-size: 38px;
          font-weight: 800;
          color: #0A1A2A;
        }

        .ebc__sectionTitle span {
          color: #FF9500;
        }

        .ebc__businessGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .ebc__businessCard {
          background: #F9FAFB;
          padding: 35px 25px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .ebc__businessCard:hover {
          background: white;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(255,149,0,0.04);
          border: 1px solid rgba(255,149,0,0.15);
        }

        .ebc__businessIcon {
          margin-bottom: 20px;
        }

        .ebc__businessName {
          font-size: 18px;
          font-weight: 600;
          color: #0A1A2A;
          margin: 0;
        }

        /* ===== FEATURES ===== */
        .ebc__features {
          padding: 60px 0;
          background: linear-gradient(145deg, #F9FAFB, white);
        }

        .ebc__featuresGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .ebc__featureCard {
          background: white;
          padding: 35px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.01);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .ebc__featureIcon {
          margin-bottom: 20px;
        }

        .ebc__featureCard h4 {
          font-size: 20px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 12px;
        }

        .ebc__featureCard p {
          font-size: 14px;
          line-height: 1.7;
          color: #64748B;
          margin: 0;
        }

        /* ===== BENEFITS ===== */
        .ebc__benefits {
          padding: 80px 0;
          background: white;
        }

        .ebc__benefitsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .ebc__benefitCard {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 30px;
          background: #F9FAFB;
          border-radius: 24px;
          transition: all 0.3s ease;
        }

        .ebc__benefitCard:hover {
          background: white;
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(255,149,0,0.04);
        }

        .ebc__benefitContent h4 {
          font-size: 20px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 8px;
        }

        .ebc__benefitContent p {
          font-size: 14px;
          color: #64748B;
          margin: 0;
        }

        /* ===== SERVICE AREA ===== */
        .ebc__service {
          padding: 60px 0;
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          color: white;
        }

        .ebc__serviceContent {
          text-align: center;
        }

        .ebc__serviceTitle {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .ebc__serviceTitle span {
          color: #FF9500;
        }

        .ebc__serviceDesc {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .ebc__serviceCities {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ebc__city {
          font-family: 'Noto Sans Telugu', sans-serif;
          font-size: 18px;
          font-weight: 600;
          padding: 12px 24px;
          background: rgba(255,255,255,0.05);
          border-radius: 50px;
          border: 1px solid rgba(255,149,0,0.2);
        }

        /* ===== CTA SECTION ===== */
        .ebc__cta {
          padding: 80px 0;
          background: white;
        }

        .ebc__ctaCard {
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          padding: 60px;
          border-radius: 48px;
          text-align: center;
          color: white;
        }

        .ebc__ctaTitle {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
        }

        .ebc__ctaDesc {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 35px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .ebc__ctaButtons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 20px;
        }

        .ebc__ctaButton {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 36px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ebc__ctaButton--primary {
          background: #FF9500;
          color: white;
        }

        .ebc__ctaButton--primary:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(255,149,0,0.3);
        }

        .ebc__ctaButton--secondary {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .ebc__ctaButton--secondary:hover {
          background: rgba(255,149,0,0.2);
          border-color: #FF9500;
          transform: translateY(-3px);
        }

        .ebc__ctaNote {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        /* ===== MODALS ===== */
        .ebc__modalOverlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          backdrop-filter: blur(5px);
        }

        .ebc__modal {
          background: white;
          padding: 45px;
          border-radius: 32px;
          max-width: 500px;
          width: 90%;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .ebc__modal--large {
          max-width: 700px;
        }

        .ebc__modalClose {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .ebc__modalClose:hover {
          background: #F1F5F9;
        }

        .ebc__modalHeader {
          text-align: center;
          margin-bottom: 30px;
        }

        .ebc__modalHeader h3 {
          font-size: 26px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 8px;
        }

        .ebc__modalHeader p {
          color: #64748B;
        }

        .ebc__modalForm {
          width: 100%;
        }

        .ebc__formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }

        .ebc__formGroup {
          margin-bottom: 15px;
        }

        .ebc__formGroup input,
        .ebc__formGroup select,
        .ebc__formGroup textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          font-size: 15px;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .ebc__formGroup input:focus,
        .ebc__formGroup select:focus,
        .ebc__formGroup textarea:focus {
          outline: none;
          border-color: #FF9500;
          box-shadow: 0 0 0 3px rgba(255,149,0,0.1);
        }

        .ebc__modalSubmit {
          width: 100%;
          padding: 16px;
          background: #FF9500;
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .ebc__modalSubmit:hover {
          background: #F97316;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,149,0,0.2);
        }

        /* ===== ANIMATIONS ===== */
        @keyframes ebcPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ebc__heroGrid {
            grid-template-columns: 1fr;
          }

          .ebc__businessGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebc__featuresGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebc__benefitsGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .ebc__container {
            padding: 0 24px;
          }

          .ebc__heroTitle {
            font-size: 36px;
          }

          .ebc__heroStats {
            flex-direction: column;
            gap: 20px;
          }

          .ebc__heroCTA {
            flex-direction: column;
          }

          .ebc__businessGrid {
            grid-template-columns: 1fr;
          }

          .ebc__featuresGrid {
            grid-template-columns: 1fr;
          }

          .ebc__ctaCard {
            padding: 40px 24px;
          }

          .ebc__ctaTitle {
            font-size: 32px;
          }

          .ebc__ctaButtons {
            flex-direction: column;
          }

          .ebc__serviceCities {
            flex-direction: column;
            align-items: center;
          }

          .ebc__formRow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Commercial;