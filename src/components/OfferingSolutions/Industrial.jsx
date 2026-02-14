import React, { useState } from "react";
import { Link } from "react-router-dom";

const Industrial = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  societyName: "",
  flats: "",
  systemType: "",
  message: "",
  city: ""
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    alert("Enter valid 10-digit mobile number");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("https://easternbaysolar.com/EasternBay_apis/industrial_enquiry.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await res.json();

    if (result.status) {
      setSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        societyName: "",
        flats: "",
        systemType: "",
        message: "",
        city: ""
      });

      setTimeout(() => {
        setSuccess(false);
        setShowEnquiryModal(false);
      }, 3000);
    }

  } catch (error) {
    alert("Something went wrong");
  }

  setLoading(false);
};

  // Custom SVG Icons
  const icons = {
    apartment: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="8" width="16" height="12" rx="1" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 11H10" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 11H16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 15H10" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 15H16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 4V8" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="6" r="1" fill="#FF9500"/>
      </svg>
    ),
    onGrid: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M2 17L12 22L22 17" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M2 12L12 17L22 12" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    offGrid: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="2" width="4" height="2" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M10 10H14" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="14" r="1" fill="#FF9500"/>
      </svg>
    ),
    maintenance: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 8V12L15 15" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    rupee: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 6H18M6 12H16M14 18L8 12" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="14" rx="1" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 10H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 10H16" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    flats: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="8" width="6" height="12" rx="1" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <rect x="9" y="4" width="6" height="16" rx="1" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="6" width="6" height="14" rx="1" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    phone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a1.999 1.999 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    email: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M22 7L12 13L2 7" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    )
  };

  const benefits = [
    {
      id: 1,
      title: "40-60% Reduction",
      desc: "in common area electricity bills",
      icon: icons.rupee
    },
    {
      id: 2,
      title: "7-10 Days",
      desc: "quick installation timeline",
      icon: icons.maintenance
    },
    {
      id: 3,
      title: "25 Years",
      desc: "panel performance warranty",
      icon: icons.check
    }
  ];

  const features = [
    {
      id: 1,
      text: "Rooftop solar systems for common areas",
      icon: icons.check
    },
    {
      id: 2,
      text: "Customized power capacity planning",
      icon: icons.check
    },
    {
      id: 3,
      text: "Net-metering with AP DISCOM",
      icon: icons.check
    },
    {
      id: 4,
      text: "Tier-1 panels & quality inverters",
      icon: icons.check
    },
    {
      id: 5,
      text: "Annual maintenance contracts",
      icon: icons.check
    }
  ];

  const systemTypes = [
    {
      id: 1,
      title: "On-Grid Systems",
      desc: "Connect to AP electricity grid. Reduce monthly bills with net-metering benefits. Ideal for societies with stable grid supply.",
      icon: icons.onGrid
    },
    {
      id: 2,
      title: "Off-Grid Systems",
      desc: "Perfect for power backup with batteries. Ensure continuous electricity supply for common areas during power cuts.",
      icon: icons.offGrid
    },
    {
      id: 3,
      title: "Complete Maintenance",
      desc: "Regular monitoring, servicing and cleaning. Keep your system running at peak efficiency with AMC support.",
      icon: icons.maintenance
    }
  ];

  return (
    <div className="ebi__master">
      
      {/* ===== HERO SECTION ===== */}
      <section className="ebi__hero">
        <div className="ebi__heroBg"></div>
        <div className="ebi__container">
          <div className="ebi__heroGrid">
            <div className="ebi__heroContent">
              <div className="ebi__heroBadge">
                <span className="ebi__badgePulse"></span>
                <span>HOUSING SOCIETIES • ANDHRA PRADESH</span>
              </div>
              <h1 className="ebi__heroTitle">
                Solar Solutions for <span>Housing Societies</span>
              </h1>
              <p className="ebi__heroDesc">
                Power your entire community with clean, affordable & reliable solar energy.
                Reduce common area electricity bills by 40-60% with custom-designed systems.
              </p>

              {/* Benefits Bar */}
              <div className="ebi__benefitsBar">
                {benefits.map(benefit => (
                  <div key={benefit.id} className="ebi__benefitItem">
                    <span className="ebi__benefitIcon">{benefit.icon}</span>
                    <div className="ebi__benefitText">
                      <strong>{benefit.title}</strong>
                      <span>{benefit.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ebi__heroCTA">
                <button className="ebi__btn ebi__btn--primary" onClick={() => setShowEnquiryModal(true)}>
                  <span>Get Free Site Survey</span>
                  {icons.arrow}
                </button>
                <Link to="/Appointment" className="ebi__btn ebi__btn--secondary">
                  <span>Talk to Expert</span>
                </Link>
              </div>
            </div>

            <div className="ebi__heroImage">
              <img src="/assets/img/housing.png" alt="Housing Society Solar Installation" />
              <div className="ebi__imageBadge">
                <span className="ebi__badgeIcon">{icons.location}</span>
                <span>Serving 50+ Societies Across AP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="ebi__why">
        <div className="ebi__container">
          <div className="ebi__whyGrid">
            <div className="ebi__whyContent">
              <span className="ebi__sectionTag">WHY CHOOSE SOLAR FOR YOUR SOCIETY?</span>
              <h2 className="ebi__sectionTitle">Reduce Common Area <span>Electricity Bills</span></h2>
              <p className="ebi__whyText">
                At <strong>Eastern Bey Solar</strong>, we help housing societies across 
                Andhra Pradesh reduce electricity bills and dependency on traditional power 
                sources by installing high-efficiency On-Grid and Off-Grid solar systems.
              </p>

              <ul className="ebi__featureList">
                {features.map(feature => (
                  <li key={feature.id} className="ebi__featureItem">
                    <span className="ebi__featureIcon">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ebi__whyStats">
              <div className="ebi__statCard">
                <span className="ebi__statValue">50+</span>
                <span className="ebi__statLabel">Societies Served</span>
              </div>
              <div className="ebi__statCard">
                <span className="ebi__statValue">2MW+</span>
                <span className="ebi__statLabel">Total Capacity</span>
              </div>
              <div className="ebi__statCard">
                <span className="ebi__statValue">₹25L+</span>
                <span className="ebi__statLabel">Annual Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SYSTEM TYPES ===== */}
      <section className="ebi__systems">
        <div className="ebi__container">
          <div className="ebi__sectionHeader">
            <h2 className="ebi__sectionTitle">Solar Solutions for <span>Every Society</span></h2>
            <p className="ebi__sectionDesc">
              Choose the right system based on your society's power needs and budget
            </p>
          </div>

          <div className="ebi__systemsGrid">
            {systemTypes.map(system => (
              <div key={system.id} className="ebi__systemCard">
                <div className="ebi__systemIcon">{system.icon}</div>
                <h3 className="ebi__systemTitle">{system.title}</h3>
                <p className="ebi__systemDesc">{system.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AP SOCIETIES ===== */}
      <section className="ebi__societies">
        <div className="ebi__container">
          <div className="ebi__societiesContent">
            <h2 className="ebi__societiesTitle">Trusted by Societies Across <span>Andhra Pradesh</span></h2>
            <div className="ebi__societyLogos">
              <div className="ebi__societyItem">
                <span className="ebi__societyIcon">{icons.building}</span>
                <span>Sai Ram Apartments, Vizag</span>
              </div>
              <div className="ebi__societyItem">
                <span className="ebi__societyIcon">{icons.building}</span>
                <span>Lakshmi Residency, Vijayawada</span>
              </div>
              <div className="ebi__societyItem">
                <span className="ebi__societyIcon">{icons.building}</span>
                <span>Venkateswara Colony, Tirupati</span>
              </div>
              <div className="ebi__societyItem">
                <span className="ebi__societyIcon">{icons.building}</span>
                <span>Godavari Heights, Rajahmundry</span>
              </div>
              <div className="ebi__societyItem">
                <span className="ebi__societyIcon">{icons.building}</span>
                <span>Green Park, Guntur</span>
              </div>
              <div className="ebi__societyItem">
                <span className="ebi__societyIcon">{icons.building}</span>
                <span>SVN Towers, Kakinada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY SECTION ===== */}
      <section className="ebi__enquiry">
        <div className="ebi__container">
          <div className="ebi__enquiryCard">
            <div className="ebi__enquiryGrid">
              <div className="ebi__enquiryLeft">
                <span className="ebi__sectionTag ebi__sectionTag--light">FREE SITE SURVEY</span>
                <h2 className="ebi__enquiryTitle">Request a Free Site Survey</h2>
                <p className="ebi__enquiryDesc">
                  Planning solar installation for your housing society?
                  Share your details and our team will contact you shortly.
                </p>

                <ul className="ebi__enquiryHighlights">
                  <li>
                    <span className="ebi__highlightIcon">{icons.check}</span>
                    <span>Free rooftop feasibility check</span>
                  </li>
                  <li>
                    <span className="ebi__highlightIcon">{icons.check}</span>
                    <span>Custom solar capacity calculation</span>
                  </li>
                  <li>
                    <span className="ebi__highlightIcon">{icons.check}</span>
                    <span>Net-metering support guidance</span>
                  </li>
                  <li>
                    <span className="ebi__highlightIcon">{icons.check}</span>
                    <span>ROI & savings estimation</span>
                  </li>
                  <li>
                    <span className="ebi__highlightIcon">{icons.check}</span>
                    <span>Quick installation timeline</span>
                  </li>
                </ul>

                <div className="ebi__contactInfo">
                  <div className="ebi__contactItem">
                    <span className="ebi__contactIcon">{icons.phone}</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="ebi__contactItem">
                    <span className="ebi__contactIcon">{icons.email}</span>
                    <span>societies@easternbey.com</span>
                  </div>
                </div>
              </div>

              <div className="ebi__enquiryRight">
                <form className="ebi__enquiryForm" onSubmit={handleSubmit}>

  <div className="ebi__formRow">
    <input
      type="text"
      placeholder="Full Name"
      required
      value={formData.name}
      onChange={(e) => setFormData({...formData, name: e.target.value})}
    />
  </div>

  <div className="ebi__formRow">
    <input
      type="tel"
      placeholder="Mobile Number"
      required
      value={formData.phone}
      onChange={(e) => setFormData({...formData, phone: e.target.value})}
    />
  </div>

  <div className="ebi__formRow">
    <input
      type="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={(e) => setFormData({...formData, email: e.target.value})}
    />
  </div>

  <div className="ebi__formRow">
    <input
      type="text"
      placeholder="Society Name"
      required
      value={formData.societyName}
      onChange={(e) => setFormData({...formData, societyName: e.target.value})}
    />
  </div>

  <div className="ebi__formRow">
    <div className="ebi__formHalf">
      <input
        type="text"
        placeholder="Number of Flats"
        value={formData.flats}
        onChange={(e) => setFormData({...formData, flats: e.target.value})}
      />
    </div>

    <div className="ebi__formHalf">
      <select
        value={formData.systemType}
        onChange={(e) => setFormData({...formData, systemType: e.target.value})}
      >
        <option value="">System Type</option>
        <option>On-Grid</option>
        <option>Off-Grid</option>
        <option>Hybrid</option>
      </select>
    </div>
  </div>

  <div className="ebi__formRow">
    <textarea
      rows="4"
      placeholder="Message (Optional)"
      value={formData.message}
      onChange={(e) => setFormData({...formData, message: e.target.value})}
    />
  </div>

  <button type="submit" className="ebi__submitBtn" disabled={loading}>
    {loading ? "Submitting..." : "Submit Enquiry"}
  </button>

  {success && <p style={{color:"green", textAlign:"center"}}>✅ Submitted Successfully!</p>}

</form>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY MODAL ===== */}
      {showEnquiryModal && (
        <div className="ebi__modalOverlay">
          <div className="ebi__modal">
            <button className="ebi__modalClose" onClick={() => setShowEnquiryModal(false)}>
              {icons.close}
            </button>
            
            <div className="ebi__modalHeader">
              <h3>Free Site Survey Request</h3>
              <p>Fill details for your housing society</p>
            </div>

            <form className="ebi__modalForm" onSubmit={handleSubmit}>

  <div className="ebi__modalRow">
    <input
      type="text"
      placeholder="Full Name"
      required
      value={formData.name}
      onChange={(e) => setFormData({...formData, name: e.target.value})}
    />
  </div>

  <div className="ebi__modalRow">
    <input
      type="tel"
      placeholder="Mobile Number"
      required
      value={formData.phone}
      onChange={(e) => setFormData({...formData, phone: e.target.value})}
    />
  </div>

  <div className="ebi__modalRow">
    <input
      type="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={(e) => setFormData({...formData, email: e.target.value})}
    />
  </div>

  <div className="ebi__modalRow">
    <input
      type="text"
      placeholder="Society Name"
      required
      value={formData.societyName}
      onChange={(e) => setFormData({...formData, societyName: e.target.value})}
    />
  </div>

  <div className="ebi__modalRow">
    <input
      type="text"
      placeholder="City / Location"
      required
      value={formData.city}
      onChange={(e) => setFormData({...formData, city: e.target.value})}
    />
  </div>

  <div className="ebi__modalRow">
    <select
      required
      value={formData.flats}
      onChange={(e) => setFormData({...formData, flats: e.target.value})}
    >
      <option value="">Number of Flats</option>
      <option>Less than 20</option>
      <option>21-50</option>
      <option>51-100</option>
      <option>100+</option>
    </select>
  </div>

  <div className="ebi__modalRow">
    <select
      required
      value={formData.systemType}
      onChange={(e) => setFormData({...formData, systemType: e.target.value})}
    >
      <option value="">System Type</option>
      <option>On-Grid</option>
      <option>Off-Grid</option>
      <option>Hybrid</option>
    </select>
  </div>

  <button type="submit" className="ebi__modalSubmit" disabled={loading}>
    {loading ? "Submitting..." : "Submit Request"}
  </button>

  {success && <p style={{color:"green", textAlign:"center"}}>✅ Submitted Successfully!</p>}

</form>

          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== INDUSTRIAL/HOUSING PAGE - EASTERN BEY ===== */
        /* PREFIX: ebi__ - 100% UNIQUE */
        
        .ebi__master {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        .ebi__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ===== HERO SECTION ===== */
        .ebi__hero {
          position: relative;
          padding-top: 150px ;
          background: linear-gradient(145deg, #F8FAFC, white);
        }

        .ebi__heroGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .ebi__heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,149,0,0.08);
          padding: 10px 22px;
          border-radius: 50px;
          margin-bottom: 30px;
          border: 1px solid rgba(255,149,0,0.2);
        }

        .ebi__badgePulse {
          width: 8px;
          height: 8px;
          background: #FF9500;
          border-radius: 50%;
          animation: ebiPulse 2s infinite;
        }

        .ebi__heroTitle {
          font-size: 48px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ebi__heroTitle span {
          color: #FF9500;
          position: relative;
        }

        .ebi__heroTitle span::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(255,149,0,0.12);
          z-index: -1;
        }

        .ebi__heroDesc {
          font-size: 17px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 35px;
        }

        /* Benefits Bar */
        .ebi__benefitsBar {
          display: flex;
          gap: 30px;
          margin-bottom: 35px;
        }

        .ebi__benefitItem {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ebi__benefitText {
          display: flex;
          flex-direction: column;
        }

        .ebi__benefitText strong {
          font-size: 16px;
          font-weight: 700;
          color: #0A1A2A;
        }

        .ebi__benefitText span {
          font-size: 13px;
          color: #64748B;
        }

        .ebi__heroCTA {
          display: flex;
          gap: 20px;
        }

        .ebi__btn {
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

        .ebi__btn--primary {
          background: #FF9500;
          color: white;
        }

        .ebi__btn--primary:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,149,0,0.3);
        }

        .ebi__btn--secondary {
          background: transparent;
          color: #0A1A2A;
          border: 2px solid rgba(0,0,0,0.1);
        }

        .ebi__btn--secondary:hover {
          border-color: #FF9500;
          color: #FF9500;
          transform: translateY(-3px);
        }

        .ebi__heroImage {
          position: relative;
        }

        .ebi__heroImage img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .ebi__imageBadge {
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

        /* ===== WHY SECTION ===== */
        .ebi__why {
          padding: 80px 0;
          background: white;
        }

        .ebi__whyGrid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 50px;
          align-items: center;
        }

        .ebi__sectionTag {
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

        .ebi__sectionTitle {
          font-size: 36px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ebi__sectionTitle span {
          color: #FF9500;
        }

        .ebi__whyText {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 25px;
        }

        .ebi__featureList {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ebi__featureItem {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 16px;
          color: #334155;
        }

        .ebi__featureIcon {
          color: #FF9500;
        }

        .ebi__whyStats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .ebi__statCard {
          background: #F9FAFB;
          padding: 30px;
          border-radius: 24px;
          text-align: center;
        }

        .ebi__statValue {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: #FF9500;
          margin-bottom: 8px;
        }

        .ebi__statLabel {
          font-size: 14px;
          color: #64748B;
        }

        /* ===== SYSTEMS SECTION ===== */
        .ebi__systems {
          padding: 80px 0;
          background: linear-gradient(145deg, #F9FAFB, white);
        }

        .ebi__sectionHeader {
          text-align: center;
          margin-bottom: 50px;
        }

        .ebi__sectionDesc {
          font-size: 17px;
          color: #64748B;
          margin-top: 15px;
        }

        .ebi__systemsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .ebi__systemCard {
          background: white;
          padding: 40px 30px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.01);
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .ebi__systemCard:hover {
          transform: translateY(-8px);
          border-color: rgba(255,149,0,0.15);
          box-shadow: 0 25px 50px rgba(255,149,0,0.04);
        }

        .ebi__systemIcon {
          margin-bottom: 25px;
        }

        .ebi__systemTitle {
          font-size: 22px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 15px;
        }

        .ebi__systemDesc {
          font-size: 14px;
          line-height: 1.7;
          color: #64748B;
          margin: 0;
        }

        /* ===== SOCIETIES SECTION ===== */
        .ebi__societies {
          padding: 60px 0;
          background: white;
        }

        .ebi__societiesContent {
          text-align: center;
        }

        .ebi__societiesTitle {
          font-size: 36px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 40px;
        }

        .ebi__societiesTitle span {
          color: #FF9500;
        }

        .ebi__societyLogos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .ebi__societyItem {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #F9FAFB;
          border-radius: 16px;
          font-weight: 500;
          color: #334155;
        }

        /* ===== ENQUIRY SECTION ===== */
        .ebi__enquiry {
          padding: 80px 0 100px;
          background: white;
        }

        .ebi__enquiryCard {
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          border-radius: 48px;
          padding: 60px;
        }

        .ebi__enquiryGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          color: white;
        }

        .ebi__sectionTag--light {
          background: rgba(255,149,0,0.15);
          margin-bottom: 20px;
        }

        .ebi__enquiryTitle {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
        }

        .ebi__enquiryDesc {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          margin-bottom: 25px;
        }

        .ebi__enquiryHighlights {
          list-style: none;
          padding: 0;
          margin: 0 0 25px;
        }

        .ebi__enquiryHighlights li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          color: rgba(255,255,255,0.9);
        }

        .ebi__highlightIcon {
          color: #FF9500;
        }

        .ebi__contactInfo {
          display: flex;
          gap: 30px;
        }

        .ebi__contactItem {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.9);
        }

        /* Form */
        .ebi__enquiryForm {
          background: white;
          padding: 35px;
          border-radius: 32px;
        }

        .ebi__formRow {
          margin-bottom: 15px;
        }

        .ebi__formHalf {
          display: inline-block;
          width: 48%;
          margin-right: 2%;
        }

        .ebi__formHalf:last-child {
          margin-right: 0;
        }

        .ebi__enquiryForm input,
        .ebi__enquiryForm select,
        .ebi__enquiryForm textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          font-size: 15px;
          font-family: inherit;
        }

        .ebi__enquiryForm input:focus,
        .ebi__enquiryForm select:focus,
        .ebi__enquiryForm textarea:focus {
          outline: none;
          border-color: #FF9500;
        }

        .ebi__submitBtn {
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

        .ebi__submitBtn:hover {
          background: #F97316;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,149,0,0.2);
        }

        /* ===== MODAL ===== */
        .ebi__modalOverlay {
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

        .ebi__modal {
          background: white;
          padding: 45px;
          border-radius: 32px;
          max-width: 500px;
          width: 90%;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .ebi__modalClose {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .ebi__modalClose:hover {
          background: #F1F5F9;
        }

        .ebi__modalHeader {
          text-align: center;
          margin-bottom: 25px;
        }

        .ebi__modalHeader h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 8px;
        }

        .ebi__modalRow {
          margin-bottom: 15px;
        }

        .ebi__modalRow input,
        .ebi__modalRow select {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          font-size: 15px;
        }

        .ebi__modalSubmit {
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

        .ebi__modalSubmit:hover {
          background: #F97316;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes ebiPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ebi__heroGrid {
            grid-template-columns: 1fr;
          }

          .ebi__whyGrid {
            grid-template-columns: 1fr;
          }

          .ebi__systemsGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebi__enquiryGrid {
            grid-template-columns: 1fr;
          }

          .ebi__societyLogos {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ebi__container {
            padding: 0 24px;
          }

          .ebi__heroTitle {
            font-size: 36px;
          }

          .ebi__benefitsBar {
            flex-direction: column;
            gap: 20px;
          }

          .ebi__heroCTA {
            flex-direction: column;
          }

          .ebi__systemsGrid {
            grid-template-columns: 1fr;
          }

          .ebi__societyLogos {
            grid-template-columns: 1fr;
          }

          .ebi__enquiryCard {
            padding: 40px 24px;
          }

          .ebi__contactInfo {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Industrial;