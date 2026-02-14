import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ebx__footer">
      {/* Background Layers with Images */}
      <div className="ebx__footer-bg-layers">
        <div className="ebx__footer-layer ebx__layer-solar-panels"></div>
        <div className="ebx__footer-layer ebx__layer-sun"></div>
        <div className="ebx__footer-layer ebx__layer-green-energy"></div>
        <div className="ebx__footer-layer ebx__layer-pattern"></div>
        <div className="ebx__footer-layer ebx__layer-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="ebx__footer-floating">
        <div className="ebx__float-sun"></div>
        <div className="ebx__float-cloud"></div>
        <div className="ebx__float-cloud ebx__float-cloud2"></div>
        <div className="ebx__float-leaf"></div>
        <div className="ebx__float-leaf ebx__float-leaf2"></div>
      </div>

      <div className="ebx__footer-container">
        {/* Newsletter Section */}
        {/* <div className="ebx__footer-newsletter">
          <div className="ebx__newsletter-content">
            <div className="ebx__newsletter-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M21 12V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H9" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M15 4H19V8" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M21 3L12 12" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="17" cy="7" r="1" fill="#FF9500"/>
              </svg>
            </div>
            <div className="ebx__newsletter-text">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get latest updates about solar technology and exclusive offers</p>
            </div>
          </div>
          <div className="ebx__newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">
              Subscribe
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" strokeWidth="1.5"/>
                <path d="M14 7L19 12L14 17" stroke="white" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </div> */}

        {/* Main Footer Widgets */}
        <div className="ebx__footer-widget-area">
          <div className="ebx__footer-grid">
            {/* About Section with Image */}
            <div className="ebx__footer-widget ebx__widget-about">
              {/* <div className="ebx__widget-bg">
                <img src="assets/img/eastern-baylogo.png" alt="Eastern Bay" className="ebx__widget-logo" />
              </div> */}
              <div className="ebx__about-content">
                <div className="ebx__about-logo">
                  <Link to="/">
                    <img src="assets/img/eastern-baylogo.png" alt="solar" style={{ width: "180px" }} />
                  </Link>
                </div>
                <p className="ebx__about-text">
                  Solar energy is renewable and inexhaustible, making it a sustainable solution for meeting energy demands. 
                  We design ideal solar solutions for your property with cutting-edge technology.
                </p>
                <div className="ebx__social-links">
                  <a href="https://www.facebook.com/" className="ebx__social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/" className="ebx__social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/" className="ebx__social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.whatsapp.com/" className="ebx__social-link">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/" className="ebx__social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links with Icon */}
            <div className="ebx__footer-widget">
              <div className="ebx__widget-header">
                <div className="ebx__widget-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5 8H19" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5 16H13" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="ebx__widget-title">Useful Links</h3>
              </div>
              <div className="ebx__widget-content">
                <ul className="ebx__footer-links">
                  <li>
                    <Link to="/about">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/OffGridSolar">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Off-Grid
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      On-Grid
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services with Image */}
            <div className="ebx__footer-widget">
              <div className="ebx__widget-header">
                <div className="ebx__widget-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="#FF9500" strokeWidth="1.5"/>
                    <path d="M8 8H16" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 12H13" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 16H10" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="ebx__widget-title">Our Services</h3>
              </div>
              <div className="ebx__widget-content">
                <ul className="ebx__footer-links">
                  <li>
                    <a href="service.html">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Renewable Energy
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Wind Generator
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Solar Energy
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Hydropower Energy
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      Eco Maintenance
                    </a>
                  </li>
                </ul>
                {/* <div className="ebx__service-image">
                  <img src="assets/img/solar-panel-small.png" alt="Solar Service" />
                </div> */}
              </div>
            </div>

            {/* Contact Info with Map */}
            <div className="ebx__footer-widget">
              <div className="ebx__widget-header">
                <div className="ebx__widget-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#FF9500" strokeWidth="1.5"/>
                    <circle cx="12" cy="9" r="3" stroke="#FF9500" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="ebx__widget-title">Contact Info</h3>
              </div>
              <div className="ebx__widget-content">
                <div className="ebx__contact-info">
                  <div className="ebx__contact-item">
                    <div className="ebx__contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="ebx__contact-details">
                      <h4>Address</h4>
                      <p>Kakinada, Andhra Pradesh<br />533001</p>
                    </div>
                  </div>
                  
                  <div className="ebx__contact-item">
                    <div className="ebx__contact-icon">
                      <i className="fa-sharp fa-solid fa-phone"></i>
                    </div>
                    <div className="ebx__contact-details">
                      <h4>Phone</h4>
                      <a href="tel:+919524357106">+91 95243 57106</a>
                    </div>
                  </div>
                  
                  <div className="ebx__contact-item">
                    <div className="ebx__contact-icon">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                    </div>
                    <div className="ebx__contact-details">
                      <h4>Email</h4>
                      <a href="mailto:info@solar.com">info@solar.com</a>
                    </div>
                  </div>
                </div>
                
                {/* <div className="ebx__contact-image">
                  <img src="assets/img/map-location.png" alt="Location Map" />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright with Payment Methods */}
        <div className="ebx__footer-bottom">
          <div className="ebx__bottom-content">
            <div className="ebx__copyright">
              <p>
                Copyright <i className="fal fa-copyright"></i> 2025{" "}
                <a href="https://easterbay.com">Easterbay</a>. All Rights Reserved.
              </p>
            </div>
            {/* <div className="ebx__payment-methods">
              <span>We Accept:</span>
              <img src="assets/img/visa.png" alt="Visa" />
              <img src="assets/img/mastercard.png" alt="Mastercard" />
              <img src="assets/img/upi.png" alt="UPI" />
              <img src="assets/img/paypal.png" alt="PayPal" />
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ebx__footer {
          position: relative;
          background: linear-gradient(145deg, #0B1F35, #0A1A2F);
          color: #fff;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        /* ===== BACKGROUND LAYERS WITH IMAGES ===== */
        .ebx__footer-bg-layers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .ebx__footer-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ebx__layer-solar-panels {
          background: url('assets/img/solar-panels-bg.png') repeat;
          background-size: 200px 200px;
          opacity: 0.03;
          animation: slideBg 20s linear infinite;
        }

        .ebx__layer-sun {
          background: radial-gradient(circle at 90% 20%, rgba(255,149,0,0.1) 0%, transparent 50%);
          animation: pulseSun 4s ease-in-out infinite;
        }

        .ebx__layer-green-energy {
          background: url('assets/img/leaf-pattern.png') repeat;
          background-size: 100px 100px;
          opacity: 0.02;
          transform: rotate(15deg);
        }

        .ebx__layer-pattern {
          background: url('assets/img/dot-shape.png') repeat;
          opacity: 0.1;
        }

        .ebx__layer-overlay {
          background: linear-gradient(180deg, transparent 0%, rgba(10,26,47,0.95) 100%);
        }

        /* ===== FLOATING ELEMENTS ===== */
        .ebx__footer-floating {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .ebx__float-sun {
          position: absolute;
          top: 10%;
          right: 5%;
          width: 150px;
          height: 150px;
          background: url('assets/img/sun-icon.png') no-repeat center;
          background-size: contain;
          opacity: 0.1;
          animation: floatSun 20s ease-in-out infinite;
        }

        .ebx__float-cloud {
          position: absolute;
          top: 15%;
          left: 5%;
          width: 200px;
          height: 100px;
          background: url('assets/img/cloud.png') no-repeat center;
          background-size: contain;
          opacity: 0.05;
          animation: floatCloud 25s linear infinite;
        }

        .ebx__float-cloud2 {
          top: 40%;
          right: 10%;
          left: auto;
          width: 250px;
          height: 120px;
          animation-delay: -10s;
        }

        .ebx__float-leaf {
          position: absolute;
          bottom: 10%;
          left: 2%;
          width: 80px;
          height: 80px;
          background: url('assets/img/leaf.png') no-repeat center;
          background-size: contain;
          opacity: 0.1;
          animation: floatLeaf 15s ease-in-out infinite;
        }

        .ebx__float-leaf2 {
          bottom: 20%;
          right: 2%;
          left: auto;
          width: 60px;
          height: 60px;
          animation-delay: -5s;
        }

        @keyframes slideBg {
          0% { background-position: 0 0; }
          100% { background-position: 200px 200px; }
        }

        @keyframes pulseSun {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }

        @keyframes floatSun {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes floatCloud {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 0.05; }
          90% { opacity: 0.05; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        @keyframes floatLeaf {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }

        .ebx__footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 40px 30px;
          position: relative;
          z-index: 10;
        }

        /* ===== NEWSLETTER SECTION ===== */
        .ebx__footer-newsletter {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,149,0,0.2);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 30px;
        }

        .ebx__newsletter-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .ebx__newsletter-icon {
          width: 70px;
          height: 70px;
          background: rgba(255,149,0,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,149,0,0.3);
        }

        .ebx__newsletter-text h3 {
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .ebx__newsletter-text p {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          margin: 0;
        }

        .ebx__newsletter-form {
          display: flex;
          gap: 15px;
          flex: 1;
          max-width: 500px;
        }

        .ebx__newsletter-form input {
          flex: 1;
          padding: 15px 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 60px;
          color: white;
          font-size: 15px;
        }

        .ebx__newsletter-form input:focus {
          outline: none;
          border-color: #FF9500;
          background: rgba(255,149,0,0.05);
        }

        .ebx__newsletter-form button {
          padding: 15px 35px;
          background: linear-gradient(145deg, #FF9500, #FFB347);
          border: none;
          border-radius: 60px;
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ebx__newsletter-form button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,149,0,0.4);
        }

        /* ===== WIDGET AREA ===== */
        .ebx__footer-widget-area {
          margin-bottom: 50px;
        }

        .ebx__footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 40px;
        }

        .ebx__footer-widget {
          position: relative;
        }

        .ebx__widget-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .ebx__widget-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,149,0,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,149,0,0.2);
        }

        .ebx__widget-title {
          font-size: 20px;
          font-weight: 700;
          color: white;
          margin: 0;
          position: relative;
          padding-bottom: 10px;
        }

        .ebx__widget-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #FF9500;
          border-radius: 3px;
        }

        /* ===== ABOUT WIDGET ===== */
        .ebx__widget-about {
          background: rgba(255,255,255,0.02);
          border-radius: 24px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .ebx__about-logo {
          margin-bottom: 20px;
        }

        .ebx__about-text {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          margin-bottom: 25px;
        }

        /* ===== SOCIAL LINKS ===== */
        .ebx__social-links {
          display: flex;
          gap: 12px;
        }

        .ebx__social-link {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .ebx__social-link:hover {
          background: #FF9500;
          color: white;
          transform: translateY(-5px);
          border-color: transparent;
        }

        /* ===== FOOTER LINKS ===== */
        .ebx__footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ebx__footer-links li {
          margin-bottom: 15px;
        }

        .ebx__footer-links a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .ebx__footer-links a:hover {
          color: #FF9500;
          transform: translateX(8px);
        }

        .ebx__footer-links svg {
          color: #FF9500;
        }

        /* ===== SERVICE IMAGE ===== */
        .ebx__service-image {
          margin-top: 30px;
          text-align: center;
        }

        .ebx__service-image img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .ebx__service-image img:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        /* ===== CONTACT INFO ===== */
        .ebx__contact-info {
          margin-bottom: 25px;
        }

        .ebx__contact-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .ebx__contact-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,149,0,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF9500;
          border: 1px solid rgba(255,149,0,0.2);
        }

        .ebx__contact-details h4 {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ebx__contact-details p,
        .ebx__contact-details a {
          font-size: 15px;
          color: white;
          text-decoration: none;
          margin: 0;
          line-height: 1.6;
        }

        .ebx__contact-details a:hover {
          color: #FF9500;
        }

        .ebx__contact-image {
          margin-top: 20px;
        }

        .ebx__contact-image img {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(255,149,0,0.2);
        }

        /* ===== FOOTER BOTTOM ===== */
        .ebx__footer-bottom {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .ebx__bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .ebx__copyright p {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }

        .ebx__copyright a {
          color: #FF9500;
          text-decoration: none;
          font-weight: 600;
        }

        .ebx__copyright a:hover {
          text-decoration: underline;
        }

        .ebx__payment-methods {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ebx__payment-methods span {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        .ebx__payment-methods img {
          height: 30px;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .ebx__payment-methods img:hover {
          opacity: 1;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1200px) {
          .ebx__footer-grid {
            grid-template-columns: 1.5fr 1fr 1.5fr 1.5fr;
            gap: 30px;
          }
        }

        @media (max-width: 992px) {
          .ebx__footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ebx__footer-newsletter {
            flex-direction: column;
            text-align: center;
          }

          .ebx__newsletter-content {
            flex-direction: column;
          }

          .ebx__newsletter-form {
            max-width: 100%;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .ebx__footer-container {
            padding: 40px 20px 20px;
          }

          .ebx__footer-grid {
            grid-template-columns: 1fr;
          }

          .ebx__bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .ebx__payment-methods {
            justify-content: center;
          }

          .ebx__footer-newsletter {
            padding: 30px;
          }

          .ebx__newsletter-form {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .ebx__social-links {
            justify-content: center;
          }

          .ebx__widget-header {
            justify-content: center;
          }

          .ebx__widget-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .ebx__contact-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;