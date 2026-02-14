import React, { useState } from "react";
import { Link } from "react-router-dom";

const Residential = () => {
  const [showModal, setShowModal] = useState(false);

  // Custom SVG Icons
  const icons = {
    sun: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 2V4" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 20V22" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 12H2" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 12H20" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    home: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 4L21 9.5V20H3V9.5Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 12H16V20H8V12Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    rupee: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 6H18M6 12H16M14 18L8 12" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    subsidy: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 8V12L15 15" stroke="#FF9500" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="0.5" fill="#FF9500"/>
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
    check: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17L4 12" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    location: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
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
    )
  };

  const features = [
    {
      id: 1,
      text: "Custom design for your roof",
      icon: icons.home
    },
    {
      id: 2,
      text: "PM Surya Ghar Yojana subsidy eligible",
      icon: icons.subsidy
    },
    {
      id: 3,
      text: "Save up to ₹50,000 with AP govt subsidy",
      icon: icons.rupee
    },
    {
      id: 4,
      text: "Zero down payment EMI options",
      icon: icons.calendar
    },
    {
      id: 5,
      text: "NEDCAP & DISCOM approved installation",
      icon: icons.check
    },
    {
      id: 6,
      text: "Service across all 13 AP districts",
      icon: icons.location
    }
  ];

  const benefits = [
    {
      id: 1,
      title: "60-75% Savings",
      desc: "Reduce monthly electricity bills significantly",
      icon: icons.rupee
    },
    {
      id: 2,
      title: "25 Years Warranty",
      desc: "Long-term peace of mind with Tier-1 panels",
      icon: icons.sun
    },
    {
      id: 3,
      title: "Quick Installation",
      desc: "7-10 days from site visit to power generation",
      icon: icons.calendar
    }
  ];

  return (
    <div className="ebr__master">
      
      {/* ===== HERO SECTION ===== */}
      <section className="ebr__hero">
        <div className="ebr__heroBg"></div>
        <div className="ebr__container">
          <div className="ebr__heroGrid">
            <div className="ebr__heroContent">
              <div className="ebr__heroBadge">
                <span className="ebr__badgePulse"></span>
                <span>PM SURYA GHAR YOJANA • NEDCAP APPROVED</span>
              </div>
              <h1 className="ebr__heroTitle">
                Power Your Home With <span>Solar Energy</span>
              </h1>
              <p className="ebr__heroDesc">
                Join 2000+ happy homes across Andhra Pradesh. 
                Generate your own electricity, save on bills, 
                and get government subsidies up to ₹78,000.
              </p>
              
              {/* Scheme Highlight */}
              <div className="ebr__schemeHighlight">
                <div className="ebr__schemeIcon">{icons.subsidy}</div>
                <div className="ebr__schemeContent">
                  <h4>PM Surya Ghar: Muft Bijli Yojana</h4>
                  <p>Central subsidy up to ₹78,000 + AP state subsidy available</p>
                </div>
              </div>

              <div className="ebr__heroStats">
                <div className="ebr__stat">
                  <span className="ebr__statValue">₹78k</span>
                  <span className="ebr__statLabel">Max Subsidy</span>
                </div>
                <div className="ebr__stat">
                  <span className="ebr__statValue">3-4yrs</span>
                  <span className="ebr__statLabel">Payback Period</span>
                </div>
                <div className="ebr__stat">
                  <span className="ebr__statValue">2000+</span>
                  <span className="ebr__statLabel">Happy Homes</span>
                </div>
              </div>

              <div className="ebr__heroCTA">
                <button className="ebr__btn ebr__btn--primary" onClick={() => setShowModal(true)}>
                  <span>Get Free Consultation</span>
                  {icons.arrow}
                </button>
                <Link to="/solar_calculator" className="ebr__btn ebr__btn--secondary">
                  <span>Calculate Savings</span>
                </Link>
              </div>
            </div>

            <div className="ebr__heroImage">
              <img src="/assets/img/home.webp" alt="Residential Solar Installation" />
              <div className="ebr__imageBadge">
                <span className="ebr__badgeIcon">{icons.location}</span>
                <span>Kakinada • Visakahapatnam • Vijayawada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="ebr__features">
        <div className="ebr__container">
          <div className="ebr__featuresHeader">
            <span className="ebr__sectionTag">WHY CHOOSE EASTERN BEY</span>
            <h2 className="ebr__sectionTitle">Complete Residential <span>Solar Solutions</span></h2>
          </div>

          <div className="ebr__featuresGrid">
            {features.map(feature => (
              <div key={feature.id} className="ebr__featureCard">
                <div className="ebr__featureIcon">{feature.icon}</div>
                <p className="ebr__featureText">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCHEME DETAILS ===== */}
      <section className="ebr__scheme">
        <div className="ebr__container">
          <div className="ebr__schemeGrid">
            <div className="ebr__schemeContent">
              <span className="ebr__sectionTag ebr__sectionTag--light">GOVERNMENT SCHEME</span>
              <h2 className="ebr__schemeTitle">
                PM Surya Ghar: Muft Bijli Yojana
              </h2>
              <p className="ebr__schemeDesc">
                Central government scheme for residential solar. Get subsidy directly in your bank account.
              </p>

              <div className="ebr__subsidyTable">
                <div className="ebr__subsidyRow ebr__subsidyRow--header">
                  <span>System Size</span>
                  <span>Subsidy Amount</span>
                </div>
                <div className="ebr__subsidyRow">
                  <span>1kW - 2kW</span>
                  <span className="ebr__subsidyAmount">₹30,000 - ₹60,000</span>
                </div>
                <div className="ebr__subsidyRow">
                  <span>3kW - 5kW</span>
                  <span className="ebr__subsidyAmount">₹78,000 (fixed)</span>
                </div>
                <div className="ebr__subsidyRow">
                  <span>Above 5kW</span>
                  <span className="ebr__subsidyAmount">₹78,000 (max)</span>
                </div>
              </div>

              <div className="ebr__subsidyNote">
                <span className="ebr__noteIcon">{icons.check}</span>
                <span>Additional AP state subsidy available for eligible households</span>
              </div>
            </div>

            <div className="ebr__schemeVisual">
              <div className="ebr__visualCard">
                <h3>How to Apply</h3>
                <ul className="ebr__applySteps">
                  <li>
                    <span className="ebr__stepNum">1</span>
                    <span>Free site inspection by our team</span>
                  </li>
                  <li>
                    <span className="ebr__stepNum">2</span>
                    <span>We handle NEDCAP & DISCOM paperwork</span>
                  </li>
                  <li>
                    <span className="ebr__stepNum">3</span>
                    <span>Installation within 7-10 days</span>
                  </li>
                  <li>
                    <span className="ebr__stepNum">4</span>
                    <span>Subsidy credited to your bank</span>
                  </li>
                </ul>
                <button className="ebr__visualCTA" onClick={() => setShowModal(true)}>
                  Check Eligibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS BAR ===== */}
      <section className="ebr__benefits">
        <div className="ebr__container">
          <div className="ebr__benefitsGrid">
            {benefits.map(benefit => (
              <div key={benefit.id} className="ebr__benefitCard">
                <div className="ebr__benefitIcon">{benefit.icon}</div>
                <div className="ebr__benefitContent">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL STRIP ===== */}
      <section className="ebr__testimonials">
        <div className="ebr__container">
          <div className="ebr__testimonialTrack">
            <div className="ebr__testimonialItem">
              <span className="ebr__testimonialIcon">{icons.location}</span>
              <span className="ebr__testimonialName">శ్రీనివాస్, విశాఖపట్నం</span>
              <span className="ebr__testimonialText">"Monthly bill ₹4500 నుండి ₹800కి తగ్గింది"</span>
            </div>
            <div className="ebr__testimonialItem">
              <span className="ebr__testimonialIcon">{icons.location}</span>
              <span className="ebr__testimonialName">లక్ష్మి, విజయవాడ</span>
              <span className="ebr__testimonialText">"PM Surya Ghar subsidy వచ్చింది. చాలా సంతోషం"</span>
            </div>
            <div className="ebr__testimonialItem">
              <span className="ebr__testimonialIcon">{icons.location}</span>
              <span className="ebr__testimonialName">రమేష్, తిరుపతి</span>
              <span className="ebr__testimonialText">"Installation 3 రోజుల్లో పూర్తి చేశారు"</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="ebr__cta">
        <div className="ebr__container">
          <div className="ebr__ctaCard">
            <h2 className="ebr__ctaTitle">Ready to Go Solar?</h2>
            <p className="ebr__ctaDesc">
              Free site inspection • Subsidy assistance • EMI options available
            </p>
            <button className="ebr__ctaButton" onClick={() => setShowModal(true)}>
              <span className="ebr__ctaIcon">{icons.calendar}</span>
              <span>Book Free Consultation</span>
              <span className="ebr__ctaArrow">{icons.arrow}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== CONSULTATION MODAL ===== */}
      {showModal && (
        <div className="ebr__modalOverlay">
          <div className="ebr__modal">
            <button className="ebr__modalClose" onClick={() => setShowModal(false)}>
              {icons.close}
            </button>
            
            <div className="ebr__modalHeader">
              <h3>Free Solar Consultation</h3>
              <p>Get subsidy details & free quote for your home</p>
            </div>

            <form className="ebr__modalForm">
              <div className="ebr__formGroup">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="ebr__formGroup">
                <input type="tel" placeholder="Mobile Number" required />
              </div>
              <div className="ebr__formGroup">
                <input type="text" placeholder="District / City" required />
              </div>
              <div className="ebr__formGroup">
                <select required>
                  <option value="">Select Home Type</option>
                  <option>Individual House</option>
                  <option>Apartment / Flat</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="ebr__formGroup">
                <select>
                  <option value="">Interested in PM Surya Ghar Scheme?</option>
                  <option>Yes, check eligibility</option>
                  <option>Just want solar quote</option>
                </select>
              </div>
              <button type="submit" className="ebr__modalSubmit">
                Submit Request
              </button>
            </form>

            <p className="ebr__modalNote">
              We'll contact you within 24 hours • తెలుగులో మాట్లాడండి
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== RESIDENTIAL PAGE - EASTERN BEY ===== */
        /* PREFIX: ebr__ - 100% UNIQUE */
        
        .ebr__master {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        .ebr__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ===== HERO SECTION ===== */
        .ebr__hero {
          position: relative;
          padding-top: 150px ;
          background: linear-gradient(145deg, #F8FAFC, white);
        }

        .ebr__heroGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .ebr__heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,149,0,0.08);
          padding: 10px 22px;
          border-radius: 50px;
          margin-bottom: 30px;
          border: 1px solid rgba(255,149,0,0.2);
        }

        .ebr__badgePulse {
          width: 8px;
          height: 8px;
          background: #FF9500;
          border-radius: 50%;
          animation: ebrPulse 2s infinite;
        }

        .ebr__heroTitle {
          font-size: 48px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ebr__heroTitle span {
          color: #FF9500;
          position: relative;
        }

        .ebr__heroTitle span::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(255,149,0,0.12);
          z-index: -1;
        }

        .ebr__heroDesc {
          font-size: 17px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 30px;
        }

        /* Scheme Highlight */
        .ebr__schemeHighlight {
          display: flex;
          align-items: center;
          gap: 16px;
          background: linear-gradient(145deg, #FFF9F0, white);
          padding: 20px 25px;
          border-radius: 20px;
          margin-bottom: 30px;
          border: 1px solid rgba(255,149,0,0.15);
        }

        .ebr__schemeIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: rgba(255,149,0,0.1);
          border-radius: 16px;
        }

        .ebr__schemeContent h4 {
          font-size: 18px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 5px;
        }

        .ebr__schemeContent p {
          font-size: 14px;
          color: #64748B;
          margin: 0;
        }

        .ebr__heroStats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .ebr__statValue {
          display: block;
          font-size: 32px;
          font-weight: 800;
          color: #FF9500;
          line-height: 1;
          margin-bottom: 5px;
        }

        .ebr__statLabel {
          font-size: 14px;
          color: #64748B;
        }

        .ebr__heroCTA {
          display: flex;
          gap: 20px;
        }

        .ebr__btn {
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

        .ebr__btn--primary {
          background: #FF9500;
          color: white;
        }

        .ebr__btn--primary:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,149,0,0.3);
        }

        .ebr__btn--secondary {
          background: transparent;
          color: #0A1A2A;
          border: 2px solid rgba(0,0,0,0.1);
        }

        .ebr__btn--secondary:hover {
          border-color: #FF9500;
          color: #FF9500;
          transform: translateY(-3px);
        }

        .ebr__heroImage {
          position: relative;
        }

        .ebr__heroImage img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .ebr__imageBadge {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background: white;
          padding: 14px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,149,0,0.2);
        }

        /* ===== FEATURES SECTION ===== */
        .ebr__features {
          padding: 80px 0;
          background: white;
        }

        .ebr__featuresHeader {
          text-align: center;
          margin-bottom: 50px;
        }

        .ebr__sectionTag {
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

        .ebr__sectionTitle {
          font-size: 38px;
          font-weight: 800;
          color: #0A1A2A;
        }

        .ebr__sectionTitle span {
          color: #FF9500;
        }

        .ebr__featuresGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .ebr__featureCard {
          background: #F9FAFB;
          padding: 30px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .ebr__featureCard:hover {
          background: white;
          border-color: rgba(255,149,0,0.2);
          box-shadow: 0 20px 40px rgba(255,149,0,0.04);
          transform: translateY(-5px);
        }

        .ebr__featureIcon {
          margin-bottom: 20px;
        }

        .ebr__featureText {
          font-size: 16px;
          font-weight: 600;
          color: #0A1A2A;
          margin: 0;
        }

        /* ===== SCHEME SECTION ===== */
        .ebr__scheme {
          padding: 80px 0;
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          color: white;
        }

        .ebr__schemeGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .ebr__sectionTag--light {
          color: #FF9500;
          background: rgba(255,149,0,0.15);
        }

        .ebr__schemeTitle {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .ebr__schemeDesc {
          font-size: 16px;
          line-height: 1.7;
          color: white;
          margin-bottom: 30px;
        }

        .ebr__subsidyTable {
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .ebr__subsidyRow {
          display: flex;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .ebr__subsidyRow:last-child {
          border-bottom: none;
        }

        .ebr__subsidyRow--header {
          background: rgba(255,149,0,0.15);
          font-weight: 700;
        }

        .ebr__subsidyAmount {
          color: #FF9500;
          font-weight: 700;
        }

        .ebr__subsidyNote {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px;
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
        }

        .ebr__visualCard {
          background: white;
          padding: 45px 40px;
          border-radius: 32px;
          color: #0A1A2A;
        }

        .ebr__visualCard h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .ebr__applySteps {
          list-style: none;
          padding: 0;
          margin: 0 0 30px;
        }

        .ebr__applySteps li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .ebr__stepNum {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #FF9500;
          color: white;
          border-radius: 50%;
          font-weight: 700;
          font-size: 16px;
        }

        .ebr__visualCTA {
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
        }

        .ebr__visualCTA:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,149,0,0.2);
        }

        /* ===== BENEFITS BAR ===== */
        .ebr__benefits {
          padding: 60px 0;
          background: white;
        }

        .ebr__benefitsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .ebr__benefitCard {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: #F9FAFB;
          border-radius: 24px;
        }

        .ebr__benefitContent h4 {
          font-size: 20px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 5px;
        }

        .ebr__benefitContent p {
          font-size: 14px;
          color: #64748B;
          margin: 0;
        }

        /* ===== TESTIMONIALS ===== */
        .ebr__testimonials {
          padding: 40px 0;
          background: #F9FAFB;
          overflow: hidden;
        }

        .ebr__testimonialTrack {
          display: flex;
          animation: ebrScroll 30s linear infinite;
          white-space: nowrap;
        }

        .ebr__testimonialItem {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 0 30px;
          background: white;
          padding: 15px 30px;
          border-radius: 60px;
          margin-right: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.02);
          border: 1px solid rgba(255,149,0,0.1);
        }

        .ebr__testimonialName {
          font-weight: 700;
          color: #0A1A2A;
          font-family: 'Noto Sans Telugu', sans-serif;
        }

        .ebr__testimonialText {
          color: #64748B;
          font-family: 'Noto Sans Telugu', sans-serif;
        }

        /* ===== CTA SECTION ===== */
        .ebr__cta {
          padding: 80px 0 100px;
          background: white;
        }

        .ebr__ctaCard {
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          padding: 60px;
          border-radius: 48px;
          text-align: center;
          color: white;
        }

        .ebr__ctaTitle {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 15px;
          color: white;
        }

        .ebr__ctaDesc {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 35px;
        }

        .ebr__ctaButton {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          background: #FF9500;
          color: white;
          padding: 18px 45px;
          border-radius: 60px;
          border: none;
          font-weight: 700;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ebr__ctaButton:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(255,149,0,0.3);
        }

        .ebr__ctaArrow {
          transition: transform 0.3s ease;
        }

        .ebr__ctaButton:hover .ebr__ctaArrow {
          transform: translateX(8px);
        }

        /* ===== MODAL ===== */
        .ebr__modalOverlay {
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

        .ebr__modal {
          background: white;
          padding: 45px;
          border-radius: 32px;
          max-width: 500px;
          width: 90%;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .ebr__modalClose {
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

        .ebr__modalClose:hover {
          background: #F1F5F9;
        }

        .ebr__modalHeader {
          text-align: center;
          margin-bottom: 30px;
        }

        .ebr__modalHeader h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 8px;
        }

        .ebr__modalHeader p {
          color: #64748B;
        }

        .ebr__formGroup {
          margin-bottom: 16px;
        }

        .ebr__formGroup input,
        .ebr__formGroup select {
          width: 100%;
          padding: 16px 20px;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          font-size: 15px;
          transition: all 0.2s ease;
        }

        .ebr__formGroup input:focus,
        .ebr__formGroup select:focus {
          outline: none;
          border-color: #FF9500;
          box-shadow: 0 0 0 3px rgba(255,149,0,0.1);
        }

        .ebr__modalSubmit {
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

        .ebr__modalSubmit:hover {
          background: #F97316;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,149,0,0.2);
        }

        .ebr__modalNote {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #64748B;
          font-family: 'Noto Sans Telugu', sans-serif;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes ebrPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes ebrScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ebr__heroGrid {
            grid-template-columns: 1fr;
          }

          .ebr__featuresGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebr__schemeGrid {
            grid-template-columns: 1fr;
          }

          .ebr__benefitsGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .ebr__container {
            padding: 0 24px;
          }

          .ebr__heroTitle {
            font-size: 36px;
          }

          .ebr__heroStats {
            flex-direction: column;
            gap: 20px;
          }

          .ebr__heroCTA {
            flex-direction: column;
          }

          .ebr__featuresGrid {
            grid-template-columns: 1fr;
          }

          .ebr__ctaCard {
            padding: 40px 24px;
          }

          .ebr__ctaTitle {
            font-size: 32px;
          }

          .ebr__modal {
            padding: 35px 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default Residential;