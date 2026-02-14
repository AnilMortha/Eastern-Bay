import React from "react";
import { Link } from "react-router-dom";

const OnGrid = () => {
  // Custom SVG Icons
  const icons = {
    sun: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 2V4" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 20V22" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 12H2" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 12H20" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.07 4.93L17.66 6.34" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.34 17.66L4.93 19.07" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    inverter: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 6V4" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 18V20" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    grid: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M4 4L20 20" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 4L4 20" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    meter: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 8V12L14 14" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="0.5" fill="#FF9500"/>
      </svg>
    ),
    rupee: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M6 6H18M6 12H16M14 18L8 12" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    location: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
    calendar: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M8 2V6" stroke="white" strokeWidth="1.5"/>
        <path d="M16 2V6" stroke="white" strokeWidth="1.5"/>
        <path d="M3 10H21" stroke="white" strokeWidth="1.5"/>
      </svg>
    )
  };

  const steps = [
    {
      id: 1,
      title: "Solar Panels Generate DC Power",
      description: "Panels convert sunlight into direct current (DC) electricity. Even on cloudy days, they generate power.",
      icon: icons.sun
    },
    {
      id: 2,
      title: "Inverter Converts to AC Power",
      description: "Grid-tie inverter converts DC to alternating current (AC) that your home appliances can use.",
      icon: icons.inverter
    },
    {
      id: 3,
      title: "Power Your Home & Business",
      description: "AC power runs your lights, fans, ACs, and all electrical appliances during the day.",
      icon: icons.meter
    },
    {
      id: 4,
      title: "Excess Power Goes to Grid",
      description: "Extra units are exported to the grid through net meter. You earn credits from DISCOM.",
      icon: icons.grid
    }
  ];

  const benefits = [
    {
      id: 1,
      title: "Net Metering Benefits",
      description: "Earn credits for excess power sent to grid. DISCOM bills show both consumption and export.",
      icon: icons.meter
    },
    {
      id: 2,
      title: "Lowest Investment",
      description: "No battery cost makes on-grid the most affordable solar solution. ROI in 3-4 years.",
      icon: icons.rupee
    },
    {
      id: 3,
      title: "AP Government Subsidy",
      description: "Up to ₹50,000 subsidy for residential systems. NEDCAP approved installations.",
      icon: icons.check
    },
    {
      id: 4,
      title: "Zero Maintenance",
      description: "No batteries to replace. Minimal cleaning required. 25 years panel life.",
      icon: icons.sun
    },
    {
      id: 5,
      title: "Quick Installation",
      description: "7-10 days completion across AP. DISCOM approvals handled by our team.",
      icon: icons.location
    },
    {
      id: 6,
      title: "Telugu Support",
      description: "24/7 customer support in Telugu. Service available in all 13 AP districts.",
      icon: icons.grid
    }
  ];

  return (
    <div className="ebg__master">
      
      {/* ===== HERO SECTION ===== */}
      <section className="ebg__hero">
        <div className="ebg__heroOverlay"></div>
        <div className="ebg__container1">
          <div className="ebg__heroContent">
            <div className="ebg__heroBadge">
              <span className="ebg__badgePulse"></span>
              <span>EasternBay</span>
            </div>
            <h1 className="ebg__heroTitle">
              On-Grid Solar System <span>for AP Homes & Businesses</span>
            </h1>
            <p className="ebg__heroDesc">
              Generate your own power. Export excess to grid. Earn credits through net metering.
              Most affordable solar solution in Andhra Pradesh.
            </p>
            <div className="ebg__heroStats">
              <div className="ebg__heroStat">
                <span className="ebg__heroStatValue">₹0</span>
                <span className="ebg__heroStatLabel">Battery Cost</span>
              </div>
              <div className="ebg__heroStat">
                <span className="ebg__heroStatValue">3-4yrs</span>
                <span className="ebg__heroStatLabel">Payback Period</span>
              </div>
              <div className="ebg__heroStat">
                <span className="ebg__heroStatValue">25yrs</span>
                <span className="ebg__heroStatLabel">Panel Life</span>
              </div>
            </div>
            <div className="ebg__heroCTA">
              <Link to="/Appointment" className="ebg__btn ebg__btn--primary">
                <span>Get Free Quote</span>
                {icons.arrow}
              </Link>
              <Link to="/contact" className="ebg__btn ebg__btn--secondary">
                <span>Talk to Expert</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS ON-GRID ===== */}
      <section className="ebg__about">
        <div className="ebg__container">
          <div className="ebg__aboutGrid">
            <div className="ebg__aboutImage">
              <img src="/assets/img/ongrid.jpg" alt="On-Grid Solar Installation in Andhra Pradesh" />
              <div className="ebg__imageBadge">
                <span className="ebg__imageBadgeIcon">{icons.location}</span>
                <span>13 Districts • 2000+ Installations</span>
              </div>
            </div>
            <div className="ebg__aboutContent">
              <span className="ebg__sectionTag">WHAT IS ON-GRID SOLAR?</span>
              <h2 className="ebg__sectionTitle">
                Grid-Tied System with <span>Net Metering in AP</span>
              </h2>
              <p className="ebg__aboutText">
                An <strong>on-grid solar system</strong> connects directly to the Andhra Pradesh 
                electricity grid (DISCOM). When your solar panels generate more power than you need, 
                the excess is sent to the grid. Through <strong>net metering</strong>, you earn credits 
                on your electricity bill.
              </p>
              <p className="ebg__aboutText">
                This is the most popular choice for homes, apartments, and businesses across 
                Visakhapatnam, Vijayawada, Tirupati, and all AP districts. No batteries required — 
                lower cost, higher savings.
              </p>
              <div className="ebg__aboutHighlights">
                <div className="ebg__highlight">
                  <span className="ebg__highlightIcon">{icons.check}</span>
                  <span>NEDCAP Subsidy Eligible</span>
                </div>
                <div className="ebg__highlight">
                  <span className="ebg__highlightIcon">{icons.check}</span>
                  <span>DISCOM Net Meter Approved</span>
                </div>
                <div className="ebg__highlight">
                  <span className="ebg__highlightIcon">{icons.check}</span>
                  <span>Zero Battery Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="ebg__process">
        <div className="ebg__container">
          <div className="ebg__sectionHeader">
            <span className="ebg__sectionTag">HOW ON-GRID WORKS</span>
            <h2 className="ebg__sectionTitle">From Sunlight to <span>Savings</span></h2>
            <p className="ebg__sectionDesc">
              Simple 4-step process — from solar panels to net meter credits.
            </p>
          </div>

          <div className="ebg__steps">
            {steps.map((step, index) => (
              <div key={step.id} className="ebg__step">
                <div className="ebg__stepNumber">{index + 1}</div>
                <div className="ebg__stepIcon">{step.icon}</div>
                <h3 className="ebg__stepTitle">{step.title}</h3>
                <p className="ebg__stepDesc">{step.description}</p>
                <div className="ebg__stepLine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS GRID ===== */}
      <section className="ebg__benefits">
        <div className="ebg__container">
          <div className="ebg__sectionHeader">
            <span className="ebg__sectionTag">WHY CHOOSE ON-GRID</span>
            <h2 className="ebg__sectionTitle">Benefits for <span>AP Customers</span></h2>
          </div>

          <div className="ebg__benefitsGrid">
            {benefits.map(benefit => (
              <div key={benefit.id} className="ebg__benefitCard">
                <div className="ebg__benefitIcon">{benefit.icon}</div>
                <h3 className="ebg__benefitTitle">{benefit.title}</h3>
                <p className="ebg__benefitDesc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="ebg__comparison">
        <div className="ebg__container">
          <div className="ebg__sectionHeader">
            <span className="ebg__sectionTag">ON-GRID VS OFF-GRID</span>
            <h2 className="ebg__sectionTitle">Which System <span>Fits You?</span></h2>
          </div>

          <div className="ebg__comparisonGrid">
            <div className="ebg__comparisonCard ebg__comparisonCard--primary">
              <div className="ebg__comparisonHeader">
                <h3 className="ebg__comparisonTitle">On-Grid Solar</h3>
                <p className="ebg__comparisonSubtitle">Grid Connected • No Battery</p>
              </div>
              <ul className="ebg__comparisonList">
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>Works with AP electricity grid</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>No battery required — lower cost</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>Net metering with DISCOM</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>Best for homes & businesses</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>ROI: 3-4 years</span>
                </li>
              </ul>
            </div>

            <div className="ebg__comparisonCard">
              <div className="ebg__comparisonHeader">
                <h3 className="ebg__comparisonTitle">Off-Grid Solar</h3>
                <p className="ebg__comparisonSubtitle">Standalone • With Battery</p>
              </div>
              <ul className="ebg__comparisonList">
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>Works without grid (remote areas)</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>Requires battery backup</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>No net metering benefits</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>Ideal for farms & remote locations</span>
                </li>
                <li className="ebg__comparisonItem">
                  <span className="ebg__comparisonIcon">{icons.check}</span>
                  <span>ROI: 5-6 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AP SERVICE AREA ===== */}
      <section className="ebg__service">
        <div className="ebg__container">
          <div className="ebg__serviceContent">
            <h2 className="ebg__serviceTitle">Available Across <span>Andhra Pradesh</span></h2>
            <p className="ebg__serviceDesc">
              We serve all 13 districts. From Visakhapatnam to Tirupati, 
              Kakinada to Anantapur — our team is local, response is fast.
            </p>
            <div className="ebg__serviceGrid">
              <div className="ebg__serviceDistrict">Kakinada</div>
              <div className="ebg__serviceDistrict">Visakhapatnam</div>
              <div className="ebg__serviceDistrict">Vijayawada</div>
              <div className="ebg__serviceDistrict">Guntur</div>
              <div className="ebg__serviceDistrict">Tirupati</div>
              <div className="ebg__serviceDistrict">Rajahmundry</div>
              <div className="ebg__serviceDistrict">Nellor</div>
              <div className="ebg__serviceDistrict">Kurnool</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="ebg__cta">
        <div className="ebg__container">
          <div className="ebg__ctaCard">
            <h2 className="ebg__ctaTitle">Ready to Switch to On-Grid Solar?</h2>
            <p className="ebg__ctaDesc">
              Free site inspection • Quote within 24 hours • NEDCAP subsidy assistance
            </p>
            <Link to="/Appointment" className="ebg__ctaButton">
              <span className="ebg__ctaButtonIcon">{icons.calendar}</span>
              <span>Book Free Consultation</span>
              <span className="ebg__ctaButtonArrow">{icons.arrow}</span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ===== ON-GRID PAGE - EASTERN BEY ===== */
        /* PREFIX: ebg__ - 100% UNIQUE */
        
        .ebg__master {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        .ebg__container {
          
          padding: 0 40px;
        }
        .ebg__container1 {
        margin-top: 150px;
          padding: 0 40px;
        }

        /* ===== HERO SECTION ===== */
        .ebg__hero {
          position: relative;
          min-height: 600px;
          background: url('/assets/img/bg/breadcumb-bg.jpg') center/cover no-repeat;
          display: flex;
          align-items: center;
          isolation: isolate;
        }

        .ebg__heroOverlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(105deg, #0A1A2A 0%, rgba(10,26,42,0.8) 50%, rgba(10,26,42,0.4) 100%);
          z-index: 1;
        }

        .ebg__heroContent {
          position: relative;
          z-index: 2;
          max-width: 700px;
          color: white;
        }

        .ebg__heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          padding: 10px 22px;
          border-radius: 50px;
          margin-bottom: 30px;
          border: 1px solid rgba(255,149,0,0.3);
        }

        .ebg__badgePulse {
          width: 8px;
          height: 8px;
          background: #FF9500;
          border-radius: 50%;
          animation: ebgPulse 2s infinite;
        }

        .ebg__heroTitle {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 25px;
          color: #fff;
        }

        .ebg__heroTitle span {
          color: #FF9500;
          position: relative;
        }

        .ebg__heroTitle span::after {
          content: '';
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(255,149,0,0.25);
          z-index: -1;
        }

        .ebg__heroDesc {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255,255,255,0.9);
          margin-bottom: 30px;
          max-width: 600px;
        }

        .ebg__heroStats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .ebg__heroStatValue {
          display: block;
          font-size: 32px;
          font-weight: 800;
          color: #FF9500;
          line-height: 1;
          margin-bottom: 5px;
        }

        .ebg__heroStatLabel {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
        }

        .ebg__heroCTA {
          display: flex;
          gap: 20px;
          padding-bottom: 20px;
        }

        .ebg__btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .ebg__btn--primary {
          background: #FF9500;
          color: white;
        }

        .ebg__btn--primary:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,149,0,0.3);
        }

        .ebg__btn--secondary {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .ebg__btn--secondary:hover {
          background: rgba(255,149,0,0.2);
          border-color: #FF9500;
          transform: translateY(-3px);
        }

        /* ===== ABOUT SECTION ===== */
        .ebg__about {
          padding: 30px 0;
          background: white;
        }

        .ebg__aboutGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .ebg__aboutImage {
          position: relative;
        }

        .ebg__aboutImage img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .ebg__imageBadge {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: white;
          padding: 16px 28px;
          border-radius: 60px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,149,0,0.2);
        }

        .ebg__imageBadgeIcon {
          color: #FF9500;
        }

        .ebg__sectionTag {
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

        .ebg__sectionTitle {
          font-size: 42px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ebg__sectionTitle span {
          color: #FF9500;
        }

        .ebg__aboutText {
          font-size: 16px;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 20px;
        }

        .ebg__aboutHighlights {
          margin-top: 30px;
        }

        .ebg__highlight {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 16px;
          color: #0A1A2A;
        }

        .ebg__highlightIcon {
          color: #FF9500;
        }

        /* ===== PROCESS SECTION ===== */
        .ebg__process {
          padding: 30px 0;
          background: linear-gradient(145deg, #F9FAFB, white);
        }

        .ebg__sectionHeader {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .ebg__sectionDesc {
          font-size: 18px;
          color: #64748B;
          margin-top: 20px;
        }

        .ebg__steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .ebg__step {
          position: relative;
          background: white;
          padding: 40px 30px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .ebg__step:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(255,149,0,0.06);
          border-color: rgba(255,149,0,0.15);
        }

        .ebg__stepNumber {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 48px;
          font-weight: 800;
          color: rgba(255,149,0,0.08);
        }

        .ebg__stepIcon {
          margin-bottom: 25px;
        }

        .ebg__stepTitle {
          font-size: 20px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .ebg__stepDesc {
          font-size: 14px;
          line-height: 1.7;
          color: #64748B;
        }

        .ebg__stepLine {
          position: absolute;
          top: 50%;
          right: -30px;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #FF9500, transparent);
        }

        .ebg__step:last-child .ebg__stepLine {
          display: none;
        }

        /* ===== BENEFITS SECTION ===== */
        .ebg__benefits {
          padding: 30px 0;
          background: white;
        }

        .ebg__benefitsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .ebg__benefitCard {
          background: white;
          padding: 35px 30px;
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0,0,0,0.01);
        }

        .ebg__benefitCard:hover {
          border-color: rgba(255,149,0,0.2);
          box-shadow: 0 20px 40px rgba(255,149,0,0.04);
          transform: translateY(-5px);
        }

        .ebg__benefitIcon {
          margin-bottom: 20px;
        }

        .ebg__benefitTitle {
          font-size: 20px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 12px;
        }

        .ebg__benefitDesc {
          font-size: 14px;
          line-height: 1.7;
          color: #64748B;
          margin: 0;
        }

        /* ===== COMPARISON SECTION ===== */
        .ebg__comparison {
          padding: 30px 0;
          background: linear-gradient(145deg, #F9FAFB, white);
        }

        .ebg__comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .ebg__comparisonCard {
          background: white;
          border-radius: 32px;
          padding: 45px 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .ebg__comparisonCard--primary {
          border: 1px solid rgba(255,149,0,0.3);
          box-shadow: 0 25px 50px rgba(255,149,0,0.06);
        }

        .ebg__comparisonHeader {
          margin-bottom: 30px;
        }

        .ebg__comparisonTitle {
          font-size: 28px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 8px;
        }

        .ebg__comparisonSubtitle {
          font-size: 14px;
          color: #64748B;
        }

        .ebg__comparisonList {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ebg__comparisonItem {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          color: #334155;
        }

        .ebg__comparisonIcon {
          color: #FF9500;
        }

        /* ===== SERVICE AREA ===== */
        .ebg__service {
          padding: 80px 0;
          background: #0A1A2A;
          color: white;
        }

        .ebg__serviceContent {
          text-align: center;
        }

        .ebg__serviceTitle {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .ebg__serviceTitle span {
          color: #FF9500;
        }

        .ebg__serviceDesc {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .ebg__serviceGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .ebg__serviceDistrict {
          font-family: 'Noto Sans Telugu', sans-serif;
          font-size: 18px;
          font-weight: 600;
          padding: 15px;
          background: rgba(255,255,255,0.05);
          border-radius: 16px;
          border: 1px solid rgba(255,149,0,0.2);
          transition: all 0.3s ease;
        }

        .ebg__serviceDistrict:hover {
          background: #FF9500;
          color: #0A1A2A;
          border-color: #FF9500;
        }

        /* ===== FINAL CTA ===== */
        .ebg__cta {
          padding: 80px 0 100px;
          background: white;
        }

        .ebg__ctaCard {
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          padding: 60px;
          border-radius: 48px;
          text-align: center;
          color: white;
        }

        .ebg__ctaTitle {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .ebg__ctaDesc {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 40px;
        }

        .ebg__ctaButton {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          background: #FF9500;
          color: white;
          padding: 18px 45px;
          border-radius: 60px;
          text-decoration: none;
          font-weight: 700;
          font-size: 18px;
          transition: all 0.3s ease;
          border: none;
        }

        .ebg__ctaButton:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(255,149,0,0.3);
        }

        .ebg__ctaButtonArrow {
          transition: transform 0.3s ease;
        }

        .ebg__ctaButton:hover .ebg__ctaButtonArrow {
          transform: translateX(8px);
        }

        /* ===== ANIMATIONS ===== */
        @keyframes ebgPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ebg__heroTitle {
            font-size: 44px;
            
          }

          .ebg__aboutGrid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ebg__steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebg__benefitsGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebg__serviceGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebg__stepLine {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .ebg__container {
            padding: 0 24px;
          }

          .ebg__heroTitle {
            font-size: 36px;
          }

          .ebg__heroStats {
            flex-direction: column;
            gap: 20px;
          }

          .ebg__heroCTA {
            flex-direction: column;
          }

          .ebg__sectionTitle {
            font-size: 32px;
          }

          .ebg__steps {
            grid-template-columns: 1fr;
          }

          .ebg__benefitsGrid {
            grid-template-columns: 1fr;
          }

          .ebg__comparisonGrid {
            grid-template-columns: 1fr;
          }

          .ebg__ctaCard {
            padding: 40px 24px;
          }

          .ebg__ctaTitle {
            font-size: 32px;
          }

          .ebg__serviceGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default OnGrid;