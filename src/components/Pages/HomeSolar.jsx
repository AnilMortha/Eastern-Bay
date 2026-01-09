import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faSun, 
  faBolt, 
  faRupeeSign, 
  faShieldAlt, 
  faLeaf,
  faChartLine,
  faCalculator,
  faPhoneAlt,
  faMapMarkerAlt,
  faCheckCircle,
  faClock,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";

const HomeSolar = () => {
  const features = [
    { icon: faSun, title: "24/7 Solar Power", desc: "Uninterrupted electricity for your home" },
    { icon: faRupeeSign, title: "Save 90% on Bills", desc: "Reduce electricity bills by up to 90%" },
    { icon: faShieldAlt, title: "25-Year Warranty", desc: "Long-term performance guarantee" },
    { icon: faLeaf, title: "Eco-Friendly", desc: "Reduce carbon footprint significantly" },
    { icon: faBolt, title: "Quick Installation", desc: "Installation in 3-5 days" },
    { icon: faChartLine, title: "ROI in 3-4 Years", desc: "Fast return on investment" }
  ];

  const packages = [
    { 
      name: "BASIC", 
      capacity: "3kW", 
      price: "₹1,50,000", 
      savings: "₹36,000/year", 
      features: ["6 Solar Panels", "2.5kW Inverter", "Basic Installation", "5-Year Maintenance"]
    },
    { 
      name: "POPULAR", 
      capacity: "5kW", 
      price: "₹2,50,000", 
      savings: "₹60,000/year", 
      features: ["10 Solar Panels", "5kW Inverter", "Smart Monitoring", "10-Year Maintenance", "Free Survey"]
    },
    { 
      name: "PREMIUM", 
      capacity: "10kW", 
      price: "₹4,50,000", 
      savings: "₹1,20,000/year", 
      features: ["20 Solar Panels", "10kW Inverter", "AI Monitoring", "15-Year Maintenance", "Insurance", "Mobile App"]
    }
  ];

  return (
    <div className="home-solar-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              <FontAwesomeIcon icon={faHome} className="hero-icon" />
              Residential Solar Solutions for Andhra Pradesh Homes
            </h1>
            <p className="lead">
              Power your home with clean, sustainable energy and save up to ₹1,00,000 annually on electricity bills
            </p>
            <div className="hero-stats">
              <div className="stat">
                <h3>10,000+</h3>
                <p>Homes Powered</p>
              </div>
              <div className="stat">
                <h3>₹250Cr+</h3>
                <p>Saved by Customers</p>
              </div>
              <div className="stat">
                <h3>25 Years</h3>
                <p>System Warranty</p>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/solar_calculator" className="btn-primary">
                <FontAwesomeIcon icon={faCalculator} /> Calculate Savings
              </Link>
              <Link to="/Appointment" className="btn-secondary">
                <FontAwesomeIcon icon={faPhoneAlt} /> Free Consultation
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/img/home-solar-hero.jpg" alt="Solar Home" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Solar for Your Home?</h2>
            <p>Designed specifically for Andhra Pradesh's climate and electricity needs</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2>Solar Packages for Homes</h2>
            <p>Choose the perfect solar solution for your home in Andhra Pradesh</p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="capacity">{pkg.capacity}</div>
                </div>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="note">*Including Subsidy</span>
                </div>
                <div className="package-savings">
                  <FontAwesomeIcon icon={faRupeeSign} />
                  <span>Save {pkg.savings}</span>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/Appointment" className="btn-package">
                  Get This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Andhra Pradesh Specific */}
      <section className="ap-section">
        <div className="container">
          <div className="section-header">
            <h2>Solar in Andhra Pradesh</h2>
            <p>Special benefits and subsidies for AP residents</p>
          </div>
          <div className="ap-benefits">
            <div className="ap-benefit">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <h3>State Subsidy</h3>
              <p>Additional 20% subsidy from Andhra Pradesh Government</p>
            </div>
            <div className="ap-benefit">
              <FontAwesomeIcon icon={faSun} />
              <h3>300+ Sunny Days</h3>
              <p>Optimal solar generation throughout the year</p>
            </div>
            <div className="ap-benefit">
              <FontAwesomeIcon icon={faClock} />
              <h3>Quick Approvals</h3>
              <p>Fast DISCOM approval process in AP</p>
            </div>
            <div className="ap-benefit">
              <FontAwesomeIcon icon={faTrophy} />
              <h3>#1 in Solar</h3>
              <p>Andhra Pradesh leads in solar adoption in India</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Power Your Home with Solar?</h2>
          <p>Get a free site survey and customized quotation</p>
          <Link to="/Appointment" className="btn-cta">
            <FontAwesomeIcon icon={faPhoneAlt} /> Book Free Site Survey
          </Link>
        </div>
      </section>

      <style jsx>{`
        .home-solar-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #1a2a6c, #2d8f9e, #4ecdc4);
          color: white;
          padding: 80px 0;
        }
        
        .hero-section .container {
          display: flex;
          align-items: center;
          gap: 50px;
        }
        
        .hero-content {
          flex: 1;
        }
        
        .hero-icon {
          margin-right: 15px;
          color: #FFD700;
        }
        
        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        .lead {
          font-size: 1.2rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        
        .hero-stats {
          display: flex;
          gap: 40px;
          margin: 40px 0;
        }
        
        .stat h3 {
          font-size: 2.5rem;
          color: #FFD700;
          margin-bottom: 5px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }
        
        .btn-primary, .btn-secondary {
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        
        .btn-primary {
          background: #FFD700;
          color: #000;
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .btn-primary:hover {
          background: #FFEC00;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
        }
        
        .hero-image {
          flex: 1;
        }
        
        .hero-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        /* Features Section */
        .features-section {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          color: #1a2a6c;
          margin-bottom: 15px;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .feature-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          color: #2d8f9e;
          margin-bottom: 20px;
        }
        
        .feature-card h3 {
          color: #1a2a6c;
          margin-bottom: 15px;
        }
        
        /* Packages Section */
        .packages-section {
          padding: 80px 0;
        }
        
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        
        .package-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .package-card:hover {
          border-color: #FFD700;
          transform: translateY(-10px);
        }
        
        .package-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .capacity {
          background: #2d8f9e;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: 600;
        }
        
        .package-price {
          margin: 20px 0;
        }
        
        .price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a2a6c;
          display: block;
        }
        
        .package-savings {
          background: rgba(255, 215, 0, 0.1);
          padding: 15px;
          border-radius: 10px;
          margin: 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #2d8f9e;
          font-weight: 600;
        }
        
        .package-features {
          list-style: none;
          padding: 0;
          margin: 30px 0;
          text-align: left;
        }
        
        .package-features li {
          padding: 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .package-features li svg {
          color: #4ecdc4;
        }
        
        .btn-package {
          display: block;
          background: #1a2a6c;
          color: white;
          padding: 15px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        
        .btn-package:hover {
          background: #2d8f9e;
        }
        
        /* AP Section */
        .ap-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #fff5e6, #e6f7ff);
        }
        
        .ap-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .ap-benefit {
          text-align: center;
          padding: 30px;
        }
        
        .ap-benefit svg {
          font-size: 3rem;
          color: #FF8C00;
          margin-bottom: 20px;
        }
        
        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1a2a6c, #2d8f9e);
          color: white;
          padding: 80px 0;
          text-align: center;
        }
        
        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        
        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFD700;
          color: #000;
          padding: 20px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.2rem;
          margin-top: 30px;
          transition: all 0.3s ease;
        }
        
        .btn-cta:hover {
          background: #FFEC00;
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .hero-section .container {
            flex-direction: column;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSolar;