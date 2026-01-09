import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faBuilding, 
  faCity, 
  faSun, 
  faBolt, 
  faMapMarkerAlt,
  faCalculator,
  faInfoCircle,
  faBars,
  faTimes,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [desktopSubmenu, setDesktopSubmenu] = useState(null);

  const toggle = () => {
    setOpen(!open);
    setMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  const toggleDesktopSubmenu = (menu) => {
    setDesktopSubmenu(desktopSubmenu === menu ? null : menu);
  };

  return (
    <header className="th-header header-layout1 clean-header">

      {/* ===== Overlay ===== */}
      <div
        className={`mobile-overlay ${open ? "show" : ""}`}
        onClick={toggle}
      ></div>

      {/* ===== Mobile Side Menu ===== */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-header">
          <button className="close-btn" onClick={toggle}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/" onClick={toggle} className="mobile-menu-item">
                <FontAwesomeIcon icon={faHome} className="menu-icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggle} className="mobile-menu-item">
                <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link to="/Places" onClick={toggle} className="mobile-menu-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="menu-icon" />
                <span>Locations</span>
              </Link>
            </li>

            {/* More Menu */}
            <li className="menu-item-has-children">
              <div 
                className="mobile-menu-item with-submenu"
                onClick={() => toggleMobileSubmenu('more')}
              >
                <span className="menu-text">More</span>
                <span className="arrow-indicator">
                  {mobileSubmenu === 'more' ? '▼' : '▶'}
                </span>
              </div>
              <ul className={`sub-menu ${mobileSubmenu === 'more' ? 'open' : ''}`}>
                <li>
                  <Link to="/solar_calculator" onClick={toggle} className="mobile-menu-item">
                    <FontAwesomeIcon icon={faCalculator} className="menu-icon" />
                    <span>Solar Calculator</span>
                  </Link>
                </li>
              </ul>
            </li>
            
            {/* Mobile Appointment Button */}
            <li className="mobile-appointment-btn">
              <Link to="/Appointment" onClick={toggle} className="btn-appointment-mobile">
                <FontAwesomeIcon icon={faCalendarCheck} className="btn-icon" />
                <span>Book Appointment</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ===== Desktop Header ===== */}
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img src="/assets/img/eastern-baylogo.png" alt="Solar" />
                  </Link>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="col-auto d-none d-lg-block">
                <nav className="main-menu style2">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link to="#">Our Offerings</Link>
                      <ul className="sub-menu">
                        <li><Link to="/solar_calculator">Home</Link></li>
                        <li><Link to="/solar_calculator">Commercial</Link></li>
                        <li><Link to="/solar_calculator">Housing Societies</Link></li>
                      </ul>
                    </li>
                    
                    {/* Solar Solutions */}
                    <li 
                      className="menu-item-has-children"
                      onMouseEnter={() => toggleDesktopSubmenu('solutions')}
                      onMouseLeave={() => toggleDesktopSubmenu(null)}
                    >
                      <Link to="#" className="desktop-menu-item">
                        <FontAwesomeIcon icon={faSun} className="menu-icon" />
                        <span className="menu-text">Solar Solutions</span>
                      </Link>
                      <ul className={`sub-menu ${desktopSubmenu === 'solutions' ? 'open' : ''}`}>
                        <li>
                          <Link to="/OffGridSolar" className="desktop-menu-item">
                            <FontAwesomeIcon icon={faBolt} className="menu-icon" />
                            <span>Off-Grid</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/OnGridSolar" className="desktop-menu-item">
                            <FontAwesomeIcon icon={faBolt} className="menu-icon" />
                            <span>On-Grid</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    
                    {/* Locations */}
                    <li>
                      <Link to="/Places" className="desktop-menu-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="menu-icon" />
                        <span className="menu-text">Locations</span>
                      </Link>
                    </li>
                    
                    {/* More */}
                    <li 
                      className="menu-item-has-children"
                      onMouseEnter={() => toggleDesktopSubmenu('more')}
                      onMouseLeave={() => toggleDesktopSubmenu(null)}
                    >
                      <Link to="#" className="desktop-menu-item">
                        <span className="menu-text">More</span>
                      </Link>
                      <ul className={`sub-menu ${desktopSubmenu === 'more' ? 'open' : ''}`}>
                        <li>
                          <Link to="/solar_calculator" className="desktop-menu-item">
                            <FontAwesomeIcon icon={faCalculator} className="menu-icon" />
                            <span>Solar Calculator</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Mobile Menu Button */}
              <div className="col-auto d-lg-none">
                <button className="mobile-toggle-btn" onClick={toggle}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              {/* Desktop Appointment Button */}
              <div className="col-auto d-none d-xl-block">
                <Link to="/Appointment" className="btn-appointment">
                  <FontAwesomeIcon icon={faCalendarCheck} className="btn-icon" />
                  <span className="btn-text">Book Free Consultation</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Add CSS styles */}
      <style jsx>{`
        /* Appointment Button Styles */
        .btn-appointment {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: none;
          cursor: pointer;
        }

        .btn-appointment:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 165, 0, 0.4);
          background: linear-gradient(135deg, #FFEC00 0%, #FF8C00 100%);
          color: #000;
        }

        .btn-appointment:active {
          transform: translateY(0);
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        .btn-text {
          white-space: nowrap;
        }

        /* Mobile Appointment Button */
        .mobile-appointment-btn {
          margin-top: 20px;
          padding: 0 15px;
        }

        .btn-appointment-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000;
          padding: 15px 20px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          width: 100%;
          box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
        }

        /* Menu Item Icons */
        .menu-icon {
          margin-right: 10px;
          width: 20px;
          text-align: center;
          color: #FFA500;
        }

        .desktop-menu-item,
        .mobile-menu-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }

        .desktop-menu-item:hover .menu-icon,
        .mobile-menu-item:hover .menu-icon {
          color: #FFD700;
        }

        .menu-text {
          font-weight: 500;
        }

        /* REMOVE ALL PSEUDO-ELEMENTS (settings and down arrows) */
        .desktop-menu-item::before,
        .desktop-menu-item::after,
        .mobile-menu-item::before,
        .mobile-menu-item::after,
        .menu-item-has-children > a::before,
        .menu-item-has-children > a::after,
        .menu-item-has-children > div::before,
        .menu-item-has-children > div::after {
          content: none !important;
          display: none !important;
        }

        /* Remove any automatic down arrows */
        .menu-item-has-children > a:after,
        .menu-item-has-children > div:after {
          display: none !important;
        }

        /* Mobile menu submenu arrow */
        .arrow-indicator {
          margin-left: auto;
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }

        .menu-item-has-children .with-submenu {
          cursor: pointer;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .sub-menu.open {
          display: block;
          max-height: 500px;
          opacity: 1;
        }

        /* Mobile Toggle Button */
        .mobile-toggle-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #333;
          cursor: pointer;
          padding: 10px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #333;
          cursor: pointer;
          padding: 10px;
        }

        /* Hide ALL automatically added icons */
        .fa-cog, 
        .fa-gear,
        .fa-angle-down,
        .fa-chevron-down,
        .fa-caret-down,
        .fa-arrow-down {
          display: none !important;
        }

        /* Desktop sub-menu styling */
        .clean-menu .menu-item-has-children {
          position: relative;
        }

        .clean-menu .sub-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 200px;
          background: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-radius: 8px;
          padding: 10px 0;
          display: none;
          z-index: 1000;
        }

        .clean-menu .sub-menu.open {
          display: block;
        }

        /* Remove all default dropdown arrows from parent theme */
        .menu-item-has-children {
          background-image: none !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .btn-appointment {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;