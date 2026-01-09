import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuilding, 
  faChartBar, 
  faIndustry,
  faWarehouse,
  faHotel,
  faHospital,
  faSchool,
  faStore,
  faRupeeSign,
  faShieldAlt,
  faLeaf,
  faCalculator,
  faPhoneAlt,
  faCheckCircle,
  faTachometerAlt,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";

const CommercialSolar = () => {
  const businessTypes = [
    { icon: faIndustry, name: "Factories", desc: "Manufacturing units & plants" },
    { icon: faWarehouse, name: "Warehouses", desc: "Storage & logistics" },
    { icon: faHotel, name: "Hotels", desc: "Resorts & hospitality" },
    { icon: faHospital, name: "Hospitals", desc: "Healthcare facilities" },
    { icon: faSchool, name: "Schools", desc: "Educational institutions" },
    { icon: faStore, name: "Malls", desc: "Shopping complexes" }
  ];

  const caseStudies = [
    { business: "Textile Factory", location: "Guntur", capacity: "500kW", savings: "₹50L/year" },
    { business: "Shopping Mall", location: "Vijayawada", capacity: "1MW", savings: "₹1.2Cr/year" },
    { business: "Hotel Chain", location: "Visakhapatnam", capacity: "750kW", savings: "₹80L/year" },
    { business: "IT Park", location: "Amaravati", capacity: "2MW", savings: "₹2.5Cr/year" }
  ];

  return (
    <div className="commercial-solar-page">
      {/* Hero Section */}
      <section className="hero-section commercial-hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              <FontAwesomeIcon icon={faBuilding} className="hero-icon" />
              Commercial Solar Solutions for Andhra Pradesh Businesses
            </h1>
            <p className="lead">
              Power your business, reduce operational costs by 70%, and enhance your green credentials
            </p>
            <div className="hero-stats">
              <div className="stat">
                <h3>₹500Cr+</h3>
                <p>Client Savings</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Commercial Clients</p>
              </div>
              <div className="stat">
                <h3>100MW+</h3>
                <p>Installed Capacity</p>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/solar_calculator" className="btn-primary">
                <FontAwesomeIcon icon={faCalculator} /> ROI Calculator
              </Link>
              <Link to="/Appointment" className="btn-secondary">
                <FontAwesomeIcon icon={faChartBar} /> Business Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="business-types">
        <div className="container">
          <div className="section-header">
            <h2>Solar Solutions for Every Business Type</h2>
            <p>Customized solar systems for Andhra Pradesh businesses</p>
          </div>
          <div className="business-grid">
            {businessTypes.map((business, index) => (
              <div key={index} className="business-card">
                <div className="business-icon">
                  <FontAwesomeIcon icon={business.icon} />
                </div>
                <h3>{business.name}</h3>
                <p>{business.desc}</p>
                <Link to="/Appointment" className="business-link">
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Business Benefits</h2>
            <p>Why Andhra Pradesh businesses are switching to solar</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FontAwesomeIcon icon={faRupeeSign} />
              <h3>Reduce Electricity Costs</h3>
              <p>Cut operational expenses by 60-80% with solar power</p>
            </div>
            <div className="benefit-card">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <h3>Accelerated Depreciation</h3>
              <p>80% depreciation benefit in first year</p>
            </div>
            <div className="benefit-card">
              <FontAwesomeIcon icon={faLeaf} />
              <h3>Green Certification</h3>
              <p>Enhance brand value with sustainability</p>
            </div>
            <div className="benefit-card">
              <FontAwesomeIcon icon={faShieldAlt} />
              <h3>Power Backup</h3>
              <p>Uninterrupted operations with solar backup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories in Andhra Pradesh</h2>
            <p>Real businesses achieving real savings</p>
          </div>
          <div className="case-grid">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="case-card">
                <h3>{caseStudy.business}</h3>
                <div className="case-location">
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{caseStudy.location}, AP</span>
                </div>
                <div className="case-details">
                  <div className="detail">
                    <span className="label">Capacity</span>
                    <span className="value">{caseStudy.capacity}</span>
                  </div>
                  <div className="detail">
                    <span className="label">Annual Savings</span>
                    <span className="value savings">{caseStudy.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AP Commercial Benefits */}
      <section className="ap-commercial">
        <div className="container">
          <div className="section-header">
            <h2>Andhra Pradesh Commercial Benefits</h2>
          </div>
          <div className="ap-features">
            <div className="ap-feature">
              <FontAwesomeIcon icon={faClipboardCheck} />
              <h3>Single Window Clearance</h3>
              <p>Fast approvals for commercial solar in AP</p>
            </div>
            <div className="ap-feature">
              <FontAwesomeIcon icon={faRupeeSign} />
              <h3>Tax Benefits</h3>
              <p>Special incentives for industries in AP</p>
            </div>
            <div className="ap-feature">
              <FontAwesomeIcon icon={faChartBar} />
              <h3>Net Metering</h3>
              <p>Sell excess power to DISCOM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section commercial-cta">
        <div className="container">
          <h2>Schedule Your Business Consultation</h2>
          <p>Free energy audit and customized commercial proposal</p>
          <Link to="/Appointment" className="btn-cta">
            <FontAwesomeIcon icon={faPhoneAlt} /> Request Business Proposal
          </Link>
        </div>
      </section>

      <style jsx>{`
        .commercial-solar-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .commercial-hero {
          background: linear-gradient(135deg, #2c3e50, #4a6491, #2d8f9e);
        }
        
        .business-types {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .business-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .business-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .business-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .business-icon {
          font-size: 2.5rem;
          color: #2d8f9e;
          margin-bottom: 20px;
        }
        
        .business-card h3 {
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .business-link {
          display: inline-block;
          margin-top: 20px;
          color: #2d8f9e;
          text-decoration: none;
          font-weight: 600;
        }
        
        .benefits-section {
          padding: 80px 0;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .benefit-card {
          text-align: center;
          padding: 30px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
          background: #e3f2fd;
          transform: scale(1.05);
        }
        
        .benefit-card svg {
          font-size: 2.5rem;
          color: #4a6491;
          margin-bottom: 20px;
        }
        
        .case-studies {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .case-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .case-location {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 15px 0;
          color: #666;
        }
        
        .case-details {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .detail {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
        }
        
        .savings {
          color: #27ae60;
          font-weight: 600;
        }
        
        .ap-commercial {
          padding: 80px 0;
          background: linear-gradient(135deg, #e8f4fd, #f0f7ff);
        }
        
        .ap-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        
        .ap-feature {
          text-align: center;
          padding: 30px;
        }
        
        .ap-feature svg {
          font-size: 3rem;
          color: #2d8f9e;
          margin-bottom: 20px;
        }
        
        .commercial-cta {
          background: linear-gradient(135deg, #2c3e50, #4a6491);
        }
        
        /* Reuse existing styles from HomeSolar */
        .container, .section-header, .hero-stats, 
        .hero-buttons, .btn-primary, .btn-secondary,
        .btn-cta {
          /* Same as HomeSolar styles */
        }
      `}</style>
    </div>
  );
};

export default CommercialSolar;