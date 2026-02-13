import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  // ===== CUSTOM SOLAR SVG ICONS =====
  const solarIcons = {
    home: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 4L21 9.5V20H3V9.5Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 13H16V20H8V13Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    about: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 8V12" stroke="#FF9500" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="0.5" fill="#FF9500"/>
      </svg>
    ),
    location: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 12.87 12 22 12 22C12 22 19 12.87 19 9C19 5.13 15.87 2 12 2Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="9" r="2.5" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    calculator: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 6H16" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M8 10H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 10H16" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M8 14H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 14H16" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M8 18H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 18H16" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    sun: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M12 2V4" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M12 20V22" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M4 12H2" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M22 12H20" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M19.07 4.93L17.66 6.34" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M6.34 17.66L4.93 19.07" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M19.07 19.07L17.66 17.66" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M6.34 6.34L4.93 4.93" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    bolt: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    building: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="8" width="16" height="12" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
        <path d="M8 12H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 12H16" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M8 16H10" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 16H16" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M12 4V8" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    calendar: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M8 2V6" stroke="white" strokeWidth="1.5"/>
        <path d="M16 2V6" stroke="white" strokeWidth="1.5"/>
        <path d="M3 10H21" stroke="white" strokeWidth="1.5"/>
        <circle cx="12" cy="15" r="1" fill="white"/>
        <circle cx="16" cy="15" r="1" fill="white"/>
        <circle cx="8" cy="15" r="1" fill="white"/>
      </svg>
    ),
    menu: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 6H20" stroke="#1e293b" strokeWidth="1.5"/>
        <path d="M4 12H20" stroke="#1e293b" strokeWidth="1.5"/>
        <path d="M4 18H20" stroke="#1e293b" strokeWidth="1.5"/>
      </svg>
    ),
    close: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#1e293b" strokeWidth="1.5"/>
        <path d="M6 6L18 18" stroke="#1e293b" strokeWidth="1.5"/>
      </svg>
    ),
    arrowRight: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19" stroke="white" strokeWidth="1.5"/>
        <path d="M14 7L19 12L14 17" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    arrowDown: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 5V19" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M7 14L12 19L17 14" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    panel: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="1" stroke="#FF9500" strokeWidth="1.2"/>
        <path d="M4 8H20" stroke="#FF9500" strokeWidth="1.2"/>
        <path d="M4 12H20" stroke="#FF9500" strokeWidth="1.2"/>
        <path d="M4 16H20" stroke="#FF9500" strokeWidth="1.2"/>
      </svg>
    ),
    battery: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="#FF9500" strokeWidth="1.2"/>
        <rect x="10" y="2" width="4" height="2" stroke="#FF9500" strokeWidth="1.2"/>
      </svg>
    )
  };

  // Scrolling offer messages
  const tickerOffers = [
    "⚡ FREE Site Inspection - Book Now!",
    "🎉 0% EMI Options Available on All Systems",
    "🏆 NEDCAP Approved Channel Partner",
    "🔧 10 Years Comprehensive Warranty",
    "💰 Save up to ₹50,000 with Government Subsidy",
    "☀️ 25 Years Panel Performance Warranty"
  ];

  return (
    <header className="ebz__master">
      
      {/* ===== SCROLLING TICKER ===== */}
      <div className="ebz__ticker">
        <div className="ebz__tickerTrack">
          {tickerOffers.map((offer, index) => (
            <span key={index} className="ebz__tickerItem">
              <span className="ebz__tickerBullet">●</span>
              {offer}
            </span>
          ))}
          {tickerOffers.map((offer, index) => (
            <span key={`dup-${index}`} className="ebz__tickerItem">
              <span className="ebz__tickerBullet">●</span>
              {offer}
            </span>
          ))}
        </div>
      </div>

      {/* ===== MAIN HEADER BAR - FIXED, NO SCROLL EFFECT ===== */}
      <div className="ebz__bar">
        <div className="ebz__container">
          
          {/* Logo */}
          <div className="ebz__logoWrap">
            <Link to="/">
              <img src="/assets/img/eastern-baylogo.png" alt="EasternBey Solar" className="ebz__logoImg" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="ebz__nav">
            <ul className="ebz__navList">
              
              {/* Offerings */}
              <li className="ebz__navItem ebz__navItem--hasChild">
                <span className="ebz__navLink">
                  <span className="ebz__navText">Our Offerings</span>
                  <span className="ebz__navArrow">{solarIcons.arrowDown}</span>
                </span>
                <div className="ebz__drop">
                  <Link to="/residential" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.building}</span>
                    <span className="ebz__dropText">Residential</span>
                  </Link>
                  <Link to="/commercial" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.building}</span>
                    <span className="ebz__dropText">Commercial</span>
                  </Link>
                  <Link to="/Industrial" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.building}</span>
                    <span className="ebz__dropText">Industrial</span>
                  </Link>
                </div>
              </li>

              {/* Solar Solutions */}
              <li className="ebz__navItem ebz__navItem--hasChild">
                <span className="ebz__navLink">
                  <span className="ebz__navIcon">{solarIcons.sun}</span>
                  <span className="ebz__navText">Solutions</span>
                  <span className="ebz__navArrow">{solarIcons.arrowDown}</span>
                </span>
                <div className="ebz__drop">
                  <Link to="/OffGridSolar" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.battery}</span>
                    <span className="ebz__dropText">Off-Grid</span>
                  </Link>
                  <Link to="/OnGridSolar" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.bolt}</span>
                    <span className="ebz__dropText">On-Grid</span>
                  </Link>
                  <Link to="/HybridSolar" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.panel}</span>
                    <span className="ebz__dropText">Hybrid</span>
                  </Link>
                </div>
              </li>

              {/* Locations */}
              <li className="ebz__navItem">
                <Link to="/Places" className="ebz__navLink">
                  <span className="ebz__navIcon">{solarIcons.location}</span>
                  <span className="ebz__navText">Locations</span>
                </Link>
              </li>

              {/* More */}
              <li className="ebz__navItem ebz__navItem--hasChild">
                <span className="ebz__navLink">
                  <span className="ebz__navText">More</span>
                  <span className="ebz__navArrow">{solarIcons.arrowDown}</span>
                </span>
                <div className="ebz__drop ebz__drop--right">
                  <Link to="/solar_calculator" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.calculator}</span>
                    <span className="ebz__dropText">Calculator</span>
                  </Link>
                  <Link to="/about" className="ebz__dropItem">
                    <span className="ebz__dropIcon">{solarIcons.about}</span>
                    <span className="ebz__dropText">About Us</span>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="ebz__ctaWrap">
            <Link to="/Appointment" className="ebz__cta">
              <span className="ebz__ctaIcon">{solarIcons.calendar}</span>
              <span className="ebz__ctaText">Free Consultation</span>
              <span className="ebz__ctaArrow">{solarIcons.arrowRight}</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="ebz__toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? solarIcons.close : solarIcons.menu}
          </button>

        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div className={`ebz__mobile ${isMobileMenuOpen ? 'ebz__mobile--active' : ''}`}>
        <div className="ebz__mobileHead">
          <img src="/assets/img/eastern-baylogo.png" alt="EasternBey" className="ebz__mobileLogo" />
          <button className="ebz__mobileClose" onClick={toggleMobileMenu}>
            {solarIcons.close}
          </button>
        </div>

        <nav className="ebz__mobileNav">
          {/* Offerings */}
          <div className="ebz__mobileBlock">
            <button className="ebz__mobileBtn" onClick={() => toggleSubmenu('offerings')}>
              <span className="ebz__mobileBtnText">Our Offerings</span>
              <span className={`ebz__mobileArrow ${activeSubmenu === 'offerings' ? 'ebz__mobileArrow--rotate' : ''}`}>
                {solarIcons.arrowDown}
              </span>
            </button>
            <div className={`ebz__mobileSub ${activeSubmenu === 'offerings' ? 'ebz__mobileSub--open' : ''}`}>
              <Link to="/solar_calculator" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.building}</span>
                <span>Residential</span>
              </Link>
              <Link to="/solar_calculator" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.building}</span>
                <span>Commercial</span>
              </Link>
              <Link to="/solar_calculator" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.building}</span>
                <span>Industrial</span>
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="ebz__mobileBlock">
            <button className="ebz__mobileBtn" onClick={() => toggleSubmenu('solutions')}>
              <span className="ebz__mobileBtnText">Solar Solutions</span>
              <span className={`ebz__mobileArrow ${activeSubmenu === 'solutions' ? 'ebz__mobileArrow--rotate' : ''}`}>
                {solarIcons.arrowDown}
              </span>
            </button>
            <div className={`ebz__mobileSub ${activeSubmenu === 'solutions' ? 'ebz__mobileSub--open' : ''}`}>
              <Link to="/OffGridSolar" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.battery}</span>
                <span>Off-Grid</span>
              </Link>
              <Link to="/OnGridSolar" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.bolt}</span>
                <span>On-Grid</span>
              </Link>
              <Link to="/HybridSolar" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.panel}</span>
                <span>Hybrid</span>
              </Link>
            </div>
          </div>

          {/* Locations */}
          <Link to="/Places" className="ebz__mobileItem" onClick={toggleMobileMenu}>
            <span className="ebz__mobileIcon">{solarIcons.location}</span>
            <span>Locations</span>
          </Link>

          {/* More */}
          <div className="ebz__mobileBlock">
            <button className="ebz__mobileBtn" onClick={() => toggleSubmenu('more')}>
              <span className="ebz__mobileBtnText">More</span>
              <span className={`ebz__mobileArrow ${activeSubmenu === 'more' ? 'ebz__mobileArrow--rotate' : ''}`}>
                {solarIcons.arrowDown}
              </span>
            </button>
            <div className={`ebz__mobileSub ${activeSubmenu === 'more' ? 'ebz__mobileSub--open' : ''}`}>
              <Link to="/solar_calculator" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.calculator}</span>
                <span>Calculator</span>
              </Link>
              <Link to="/about" className="ebz__mobileLink" onClick={toggleMobileMenu}>
                <span className="ebz__mobileIcon">{solarIcons.about}</span>
                <span>About Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile CTA */}
          <Link to="/Appointment" className="ebz__mobileCTA" onClick={toggleMobileMenu}>
            <span className="ebz__mobileCTAIcon">{solarIcons.calendar}</span>
            <span className="ebz__mobileCTAText">Book Free Consultation</span>
            <span className="ebz__mobileCTAArrow">{solarIcons.arrowRight}</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div 
        className={`ebz__overlay ${isMobileMenuOpen ? 'ebz__overlay--visible' : ''}`}
        onClick={toggleMobileMenu}
      ></div>

      <style jsx>{`
        /* ===== EASTERN BEY HEADER ===== */
        /* PREFIX: ebz__ - 100% UNIQUE - NO SCROLL EFFECTS */
        
        .ebz__master {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: none; /* No transition on scroll */
        }

        /* ===== TICKER - ALWAYS VISIBLE ===== */
        .ebz__ticker {
          background: linear-gradient(95deg, #0B1A2E, #1E2F40);
          color: white;
          padding: 10px 0;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid rgba(255, 149, 0, 0.2);
        }

        .ebz__tickerTrack {
          display: flex;
          animation: ebzScroll 30s linear infinite;
          white-space: nowrap;
        }

        .ebz__tickerItem {
          display: inline-flex;
          align-items: center;
          padding: 0 28px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          letter-spacing: 0.2px;
        }

        .ebz__tickerBullet {
          color: #FF9500;
          margin-right: 10px;
          font-size: 12px;
          animation: ebzPulse 2s infinite;
        }

        /* ===== MAIN BAR - FIXED SIZE, NO CHANGES ===== */
        .ebz__bar {
          padding: 15px 0;
          background: white;
        }

        .ebz__container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo - Fixed Size */
        .ebz__logoWrap {
          flex-shrink: 0;
        }

        .ebz__logoImg {
          height: 52px !important;
          width: auto;
        }

        /* Desktop Navigation */
        .ebz__nav {
          margin-left: 50px;
          flex: 1;
        }

        .ebz__navList {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ebz__navItem {
          position: relative;
        }

        .ebz__navLink {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #1E293B;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          padding: 10px 0;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .ebz__navIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF9500;
          transition: transform 0.2s ease;
        }

        .ebz__navText {
          color: inherit;
        }

        .ebz__navArrow {
          display: flex;
          align-items: center;
          margin-left: 2px;
          color: #FF9500;
          transition: transform 0.2s ease;
        }

        .ebz__navItem--hasChild:hover .ebz__navArrow {
          transform: rotate(180deg);
        }

        .ebz__navLink:hover {
          color: #FF9500;
        }

        .ebz__navLink:hover .ebz__navIcon {
          transform: scale(1.1);
        }

        /* Dropdown */
        .ebz__drop {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
          padding: 10px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 100;
          border: 1px solid rgba(0, 0, 0, 0.03);
        }

        .ebz__drop--right {
          left: auto;
          right: 0;
        }

        .ebz__navItem--hasChild:hover .ebz__drop {
          opacity: 1;
          visibility: visible;
          transform: translateY(8px);
        }

        .ebz__dropItem {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #475569;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .ebz__dropItem:hover {
          background: #FFF9F0;
          color: #FF9500;
          padding-left: 20px;
        }

        .ebz__dropIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(255, 149, 0, 0.05);
          border-radius: 8px;
          color: #FF9500;
        }

        .ebz__dropText {
          font-weight: 500;
          font-size: 14px;
        }

        /* Desktop CTA - Always Same */
        .ebz__ctaWrap {
          flex-shrink: 0;
        }

        .ebz__cta {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(145deg, #FF9500, #F97316);
          color: white;
          padding: 14px 28px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 8px 20px rgba(255, 149, 0, 0.2);
          border: none;
        }

        .ebz__cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(255, 149, 0, 0.3);
        }

        .ebz__ctaArrow {
          transition: transform 0.3s ease;
        }

        .ebz__cta:hover .ebz__ctaArrow {
          transform: translateX(5px);
        }

        /* Mobile Toggle */
        .ebz__toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #1E293B;
        }

        /* ===== MOBILE MENU ===== */
        .ebz__mobile {
          position: fixed;
          top: 0;
          right: -420px;
          width: 380px;
          height: 100vh;
          background: white;
          z-index: 10000;
          transition: right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.05);
          overflow-y: auto;
        }

        .ebz__mobile--active {
          right: 0;
        }

        .ebz__mobileHead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 28px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .ebz__mobileLogo {
          height: 42px;
        }

        .ebz__mobileClose {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #1E293B;
          transition: transform 0.2s ease;
        }

        .ebz__mobileClose:hover {
          transform: rotate(90deg);
        }

        .ebz__mobileNav {
          padding: 28px;
        }

        .ebz__mobileBlock {
          margin-bottom: 8px;
        }

        .ebz__mobileBtn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 20px;
          background: #F8FAFC;
          border: none;
          border-radius: 14px;
          font-weight: 500;
          font-size: 16px;
          color: #1E293B;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ebz__mobileBtn:hover {
          background: #FFF9F0;
          color: #FF9500;
        }

        .ebz__mobileArrow {
          transition: transform 0.3s ease;
          color: #FF9500;
        }

        .ebz__mobileArrow--rotate {
          transform: rotate(180deg);
        }

        .ebz__mobileSub {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding-left: 16px;
        }

        .ebz__mobileSub--open {
          max-height: 250px;
        }

        .ebz__mobileLink {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 20px;
          color: #475569;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.2s ease;
          margin: 4px 0;
        }

        .ebz__mobileLink:hover {
          background: #FFF9F0;
          color: #FF9500;
        }

        .ebz__mobileItem {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          color: #1E293B;
          text-decoration: none;
          font-weight: 500;
          border-radius: 14px;
          transition: all 0.2s ease;
          margin-bottom: 8px;
        }

        .ebz__mobileItem:hover {
          background: #FFF9F0;
          color: #FF9500;
        }

        .ebz__mobileIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF9500;
        }

        .ebz__mobileCTA {
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(145deg, #FF9500, #F97316);
          color: white;
          padding: 18px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          margin-top: 32px;
          transition: all 0.3s ease;
        }

        .ebz__mobileCTA:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 149, 0, 0.3);
        }

        .ebz__mobileCTAArrow {
          margin-left: auto;
          transition: transform 0.3s ease;
        }

        .ebz__mobileCTA:hover .ebz__mobileCTAArrow {
          transform: translateX(5px);
        }

        /* Overlay */
        .ebz__overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .ebz__overlay--visible {
          opacity: 1;
          visibility: visible;
        }

        /* Animations */
        @keyframes ebzScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes ebzPulse {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .ebz__nav {
            display: none;
          }
          .ebz__ctaWrap {
            display: none;
          }
          .ebz__toggle {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .ebz__container {
            padding: 0 20px;
          }
          .ebz__logoImg {
            height: 44px;
          }
          .ebz__mobile {
            width: 100%;
            right: -100%;
          }
          .ebz__tickerItem {
            padding: 0 16px;
            font-size: 12px;
          }
        }

        /* Remove all scroll-related styles */
        .ebz__master--compact,
        .ebz__master--scrolled {
          display: none;
        }
      `}</style>
    </header>
  );
};

export default Header;