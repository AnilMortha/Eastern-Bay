import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="th-header header-layout1">

      {/* ===== Overlay ===== */}
      <div
        className={`mobile-overlay ${open ? "show" : ""}`}
        onClick={toggle}
      ></div>

      {/* ===== Mobile Side Menu ===== */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-header">
          <button className="close-btn" onClick={toggle}>
            <i className="far fa-times"></i>
          </button>
        </div>

        <nav className="mobile-nav">
          <ul>
            <li><Link to="/" onClick={toggle}>Home</Link></li>
            <li><Link to="/about" onClick={toggle}>About Us</Link></li>
            <li><Link to="/Places" onClick={toggle}>Locations</Link></li>

            <li className="menu-item-has-children">
              <Link to="#">More</Link>
              <ul className="sub-menu">
                <li><Link to="/solar_calculator" onClick={toggle}>Solar Calculator</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* ===== Desktop Header ===== */}
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container-fiuld">
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
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Commercial">Commercial</Link></li>
                        <li><Link to="/Housing">Housing Societies</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Solar Solutions</Link>
                      <ul className="sub-menu">
                        <li><Link to="/OffGridSolar">Off-Grid</Link></li>
                        <li><Link to="/OnGridSolar">On-Grid</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/Places">Locations</Link></li>
                    <li className="menu-item-has-children">
                      <Link to="#">More</Link>
                      <ul className="sub-menu">
                        <li><Link to="/solar_calculator">Solar Calculator</Link></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Mobile Menu Button */}
              <div className="col-auto d-lg-none">
                <button className="mobile-toggle-btn" onClick={toggle}>
                  <i className="far fa-bars"></i>
                </button>
              </div>

              <div className="col-auto d-none d-xl-block">
                <button className="headbtn">
                  <Link to="/Appointment">Make an Appointment</Link>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
