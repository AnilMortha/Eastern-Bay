import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCity, 
  faUsers, 
  faBuilding,
  faLightbulb,
  faElevator,
  faWater,
  faParking,
  faSwimmingPool,
  faShieldAlt,
  faRupeeSign,
  faLeaf,
  faCalculator,
  faPhoneAlt,
  faCheckCircle,
  faChartLine,
  faHandshake,
  faArrowRight,
  faSun,
  faBolt,
  faChartBar,
  faBuildingUser,
  faFileContract,
  faTools,
  faHeadset,
  faPercent,
  faClock,
  faCreditCard,
  faUserShield,
  faClipboardCheck,
  faPaintBrush,
  faFileSignature,
  faHardHat
} from "@fortawesome/free-solid-svg-icons";

const HousingSocieties = () => {
  const societyBenefits = [
    { icon: faRupeeSign, title: "Reduce Maintenance", desc: "Cut electricity costs by 70% for common areas", color: "#27ae60" },
    { icon: faBolt, title: "24/7 Power", desc: "Uninterrupted power for lifts, water pumps, lights", color: "#f39c12" },
    { icon: faChartLine, title: "Increased Value", desc: "Premium feature that attracts buyers", color: "#3498db" },
    { icon: faShieldAlt, title: "Backup Power", desc: "Essential services during grid outages", color: "#9b59b6" },
    { icon: faLeaf, title: "Green Society", desc: "Eco-friendly certification for your society", color: "#2ecc71" },
    { icon: faSun, title: "ROI in 4-5 Years", desc: "Excellent return on investment", color: "#e74c3c" }
  ];

  const installationPhases = [
    { 
      phase: "1", 
      title: "Free Survey", 
      desc: "Technical assessment of your society",
      icon: faClipboardCheck
    },
    { 
      phase: "2", 
      title: "Custom Design", 
      desc: "Tailored solution for your needs",
      icon: faPaintBrush
    },
    { 
      phase: "3", 
      title: "Approval Support", 
      desc: "Help with society & DISCOM approvals",
      icon: faFileSignature
    },
    { 
      phase: "4", 
      title: "Installation", 
      desc: "Professional installation with minimal disruption",
      icon: faHardHat
    },
    { 
      phase: "5", 
      title: "Maintenance", 
      desc: "Long-term support & monitoring",
      icon: faHeadset
    }
  ];

  const heroStats = [
    { icon: faBuildingUser, value: "200+", label: "Societies Powered", color: "#4ecdc4" },
    { icon: faRupeeSign, value: "₹100Cr+", label: "Total Savings", color: "#27ae60" },
    { icon: faBolt, value: "50MW+", label: "Installed Capacity", color: "#f39c12" }
  ];

  const apAdvantages = [
    { 
      icon: faPercent, 
      title: "Enhanced Subsidy", 
      desc: "Up to 40% subsidy for society group installations" 
    },
    { 
      icon: faClock, 
      title: "Fast-track Approvals", 
      desc: "Priority processing for AP housing societies" 
    },
    { 
      icon: faCreditCard, 
      title: "Flexible Financing", 
      desc: "EMI options with 0% interest for first year" 
    },
    { 
      icon: faUserShield, 
      title: "Dedicated Support", 
      desc: "24/7 maintenance team for AP societies" 
    }
  ];

  const ctaFeatures = [
    { icon: faClipboardCheck, text: "Free Site Survey" },
    { icon: faFileContract, text: "Custom Proposal" },
    { icon: faChartBar, text: "No-obligation Quote" }
  ];

  return (
    <div className="housing-societies-page">
      {/* Hero Section */}
      <section className="hero-section society-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <FontAwesomeIcon icon={faCity} /> AP Housing Societies
            </div>
            <h1>
              Power Your Society <span className="highlight">Sustainably</span>
            </h1>
            <p className="lead">
              Transform your housing society with solar energy. Reduce maintenance costs by up to 70% and create a green, self-sufficient community.
            </p>
            <div className="hero-stats">
              {heroStats.map((stat, index) => (
                <div key={index} className="stat">
                  <div className="stat-icon" style={{ color: stat.color }}>
                    <FontAwesomeIcon icon={stat.icon} />
                  </div>
                  <div>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-buttons">
              <Link to="/solar_calculator" className="btn-primary">
                <FontAwesomeIcon icon={faCalculator} /> Calculate Society Savings
                <FontAwesomeIcon icon={faArrowRight} className="btn-icon-right" />
              </Link>
              <Link to="/Appointment" className="btn-secondary">
                <FontAwesomeIcon icon={faHandshake} /> Book Free Presentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Areas Section */}
      <section className="common-areas">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <FontAwesomeIcon icon={faBuilding} /> Powered Areas
            </div>
            <h2>Solar Power for All Common Areas</h2>
            <p className="section-subtitle">Keep essential services running 24/7 with clean solar energy</p>
          </div>
          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon-wrapper">
                <FontAwesomeIcon icon={faElevator} className="area-icon" />
              </div>
              <div className="area-content">
                <h3>Elevators/Lifts</h3>
                <p>24/7 power for essential vertical transport</p>
              </div>
            </div>
            <div className="area-card">
              <div className="area-icon-wrapper">
                <FontAwesomeIcon icon={faWater} className="area-icon" />
              </div>
              <div className="area-content">
                <h3>Water Pumps</h3>
                <p>Continuous water supply to all apartments</p>
              </div>
            </div>
            <div className="area-card">
              <div className="area-icon-wrapper">
                <FontAwesomeIcon icon={faLightbulb} className="area-icon" />
              </div>
              <div className="area-content">
                <h3>Common Lights</h3>
                <p>Corridors, stairs, parking, garden lighting</p>
              </div>
            </div>
            <div className="area-card">
              <div className="area-icon-wrapper">
                <FontAwesomeIcon icon={faParking} className="area-icon" />
              </div>
              <div className="area-content">
                <h3>Parking Areas</h3>
                <p>Lighting and EV charging stations</p>
              </div>
            </div>
            <div className="area-card">
              <div className="area-icon-wrapper">
                <FontAwesomeIcon icon={faSwimmingPool} className="area-icon" />
              </div>
              <div className="area-content">
                <h3>Club House</h3>
                <p>Swimming pool, gym, community hall</p>
              </div>
            </div>
            <div className="area-card">
              <div className="area-icon-wrapper">
                <FontAwesomeIcon icon={faShieldAlt} className="area-icon" />
              </div>
              <div className="area-content">
                <h3>Security Systems</h3>
                <p>CCTV, gate barriers, intercom systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="society-benefits">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <FontAwesomeIcon icon={faCheckCircle} /> Key Benefits
            </div>
            <h2>Why Choose Solar for Your Society?</h2>
          </div>
          <div className="benefits-grid">
            {societyBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrapper" style={{ backgroundColor: `${benefit.color}15` }}>
                  <FontAwesomeIcon 
                    icon={benefit.icon} 
                    className="benefit-icon" 
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="installation-process">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <FontAwesomeIcon icon={faTools} /> Our Process
            </div>
            <h2>Simple & Hassle-Free Installation</h2>
            <p className="section-subtitle">From survey to maintenance - we handle everything</p>
          </div>
          <div className="process-steps">
            {installationPhases.map((phase, index) => (
              <div key={index} className="process-step">
                <div className="step-icon-wrapper">
                  <FontAwesomeIcon icon={phase.icon} className="step-icon" />
                  <div className="step-number">{phase.phase}</div>
                </div>
                <div className="step-content">
                  <h3>{phase.title}</h3>
                  <p>{phase.desc}</p>
                </div>
                {index < installationPhases.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AP Special Benefits */}
      <section className="ap-society">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <FontAwesomeIcon icon={faCity} /> AP Special
            </div>
            <h2>Exclusive Benefits for AP Societies</h2>
            <p className="section-subtitle">Andhra Pradesh government offers additional incentives for housing societies</p>
          </div>
          <div className="ap-advantages-grid">
            {apAdvantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon-wrapper">
                  <FontAwesomeIcon icon={advantage.icon} className="advantage-icon" />
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <div className="section-header">
                <div className="section-badge">
                  <FontAwesomeIcon icon={faHandshake} /> Get Started
                </div>
                <h2>Ready for a Greener Society?</h2>
                <p className="section-subtitle">
                  Schedule a free presentation for your RWA committee. We'll provide a detailed proposal with ROI calculations.
                </p>
              </div>
              <div className="cta-features">
                {ctaFeatures.map((feature, index) => (
                  <div key={index} className="feature">
                    <FontAwesomeIcon icon={feature.icon} />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/Appointment" className="btn-cta">
                <FontAwesomeIcon icon={faPhoneAlt} /> Schedule Free Presentation
                <FontAwesomeIcon icon={faArrowRight} className="btn-icon-right" />
              </Link>
            </div>
            <div className="cta-graphic">
              <div className="solar-panel">
                <FontAwesomeIcon icon={faSun} className="sun-icon" />
                <div className="panel-cells">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="panel-cell"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .housing-societies-page {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          color: #333;
          overflow-x: hidden;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .society-hero {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #1a2980, #26d0ce);
          color: white;
          overflow: hidden;
        }

        .society-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.3;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 10px 25px;
          border-radius: 50px;
          margin-bottom: 30px;
          font-weight: 600;
          letter-spacing: 0.5px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-badge svg {
          margin-right: 10px;
        }

        h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: 800;
          line-height: 1.2;
        }

        .highlight {
          color: #ffd700;
          text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
        }

        .lead {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 40px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin: 60px 0;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.1);
          padding: 25px 35px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 220px;
        }

        .stat-icon {
          font-size: 2.5rem;
        }

        .stat h3 {
          font-size: 2.2rem;
          margin: 0 0 5px 0;
          color: #ffd700;
        }

        .stat p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.95rem;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Common Areas */
        .common-areas {
          padding: 100px 0;
          background: linear-gradient(to bottom, #ffffff, #f8fafc);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 10px 25px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 25px;
          letter-spacing: 0.5px;
        }

        h2 {
          font-size: 2.8rem;
          margin-bottom: 15px;
          color: #1a365d;
          font-weight: 700;
        }

        .section-subtitle {
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .area-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid #e2e8f0;
        }

        .area-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border-color: #667eea;
        }

        .area-icon-wrapper {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .area-icon {
          font-size: 2rem;
          color: white;
        }

        .area-content h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: #1e293b;
        }

        .area-content p {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Benefits */
        .society-benefits {
          padding: 100px 0;
          background: linear-gradient(to bottom, #f8fafc, #ffffff);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .benefit-card {
          padding: 35px 30px;
          border-radius: 20px;
          background: white;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }

        .benefit-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
        }

        .benefit-icon {
          font-size: 2.5rem;
        }

        .benefit-card h3 {
          font-size: 1.4rem;
          margin-bottom: 12px;
          color: #1e293b;
        }

        .benefit-card p {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Installation Process */
        .installation-process {
          padding: 100px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .installation-process h2,
        .installation-process .section-subtitle {
          color: white;
        }

        .process-steps {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .process-steps::before {
          content: '';
          position: absolute;
          left: 40px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.3);
        }

        .process-step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
          position: relative;
        }

        .step-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 30px;
          flex-shrink: 0;
          z-index: 1;
        }

        .step-icon {
          font-size: 2rem;
          color: #667eea;
        }

        .step-number {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #ffd700;
          color: #1a365d;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .step-content {
          flex: 1;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .step-content h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: white;
        }

        .step-content p {
          opacity: 0.9;
          margin: 0;
          line-height: 1.6;
        }

        .step-connector {
          position: absolute;
          left: 40px;
          top: 80px;
          bottom: -40px;
          width: 2px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 0;
        }

        /* AP Benefits */
        .ap-society {
          padding: 100px 0;
          background: linear-gradient(to bottom, #ffffff, #f0f4f8);
        }

        .ap-advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .advantage-card {
          padding: 30px;
          background: white;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .advantage-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }

        .advantage-icon-wrapper {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #4ecdc4, #44a08d);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .advantage-icon {
          font-size: 1.8rem;
          color: white;
        }

        .advantage-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #1e293b;
        }

        .advantage-card p {
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #1a2980, #26d0ce);
          color: white;
        }

        .cta-card {
          background: white;
          border-radius: 30px;
          padding: 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }

        .cta-content {
          color: #333;
        }

        .cta-content .section-badge {
          background: linear-gradient(135deg, #4ecdc4, #44a08d);
        }

        .cta-content h2 {
          color: #1a365d;
        }

        .cta-content .section-subtitle {
          color: #64748b;
        }

        .cta-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin: 30px 0 40px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #475569;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .feature svg {
          color: #4ecdc4;
          font-size: 1.2rem;
        }

        .cta-graphic {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .solar-panel {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .sun-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 3rem;
          color: #ffd700;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .panel-cells {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: #2d3748;
          border-radius: 10px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 8px;
          padding: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .panel-cell {
          background: #4a5568;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .solar-panel:hover .panel-cell {
          background: #38b2ac;
        }

        /* Buttons */
        .btn-primary, .btn-secondary, .btn-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 36px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 15px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1.05rem;
          letter-spacing: 0.3px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ffd700, #ffaa00);
          color: #1a365d;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.4);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
        }

        .btn-cta {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 20px 45px;
          font-size: 1.1rem;
        }

        .btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        .btn-icon-right {
          margin-left: 5px;
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-icon-right,
        .btn-cta:hover .btn-icon-right {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .container {
            max-width: 1000px;
          }
        }

        @media (max-width: 1024px) {
          h1 { font-size: 3rem; }
          h2 { font-size: 2.3rem; }
          .cta-card { grid-template-columns: 1fr; gap: 40px; }
          .areas-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
          h2 { font-size: 2rem; }
          .hero-stats { gap: 20px; }
          .stat { min-width: 100%; max-width: 300px; }
          .hero-buttons { flex-direction: column; align-items: center; }
          .btn-primary, .btn-secondary { width: 100%; max-width: 300px; }
          .areas-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
          .ap-advantages-grid { grid-template-columns: 1fr; }
          .cta-card { padding: 40px 25px; }
          .process-steps::before { left: 40px; }
          .step-icon-wrapper { width: 60px; height: 60px; margin-right: 20px; }
          .step-icon { font-size: 1.5rem; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 2rem; }
          h2 { font-size: 1.8rem; }
          .hero-badge { padding: 8px 20px; font-size: 0.9rem; }
          .section-badge { padding: 8px 20px; font-size: 0.9rem; }
          .stat { padding: 20px; }
          .stat h3 { font-size: 1.8rem; }
          .benefit-card, .advantage-card, .area-card { padding: 25px 20px; }
          .process-steps::before { left: 30px; }
          .step-icon-wrapper { width: 50px; height: 50px; margin-right: 15px; }
          .step-number { width: 25px; height: 25px; font-size: 0.8rem; }
        }
      `}</style>
    </div>
  );
};

export default HousingSocieties;