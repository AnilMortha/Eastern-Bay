import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <header className="th-header header-layout1">
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-md-between align-items-center">
            <div className="col-auto d-none d-md-block">
              <div className="header-links">
                <ul>
                  <li className="d-none d-xl-inline-block">
                    <i className="fa-light fa-clock"></i>
                    <span>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</span>
                  </li>
                  <li>
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                    <span>12 Division Park, SKY 12546. Berlin</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-envelope"></i>
                    <Link to="mailto:help@Solar.com">help@Solar.com</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="social-links">
                <span className="social-title">Follow Us On:</span>
                <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                <Link to="https://www.twitter.com/"><i className="fab fa-twitter"></i></Link>
                <Link to="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                <Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                <Link to="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Wrapper */}
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container-fiuld">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="home-solar-energy.html">
                    <img src="/assets/img/eastern-baylogo.png" alt="Solar" />
                  </Link>
                </div>
              </div>

              <div className="col-auto me-xl-auto">
                {/* Navigation Menu */}
                <nav className="main-menu style2 d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link to="home-solar-energy.html">Home</Link>
                    </li>

                    <li><Link to="about.html">About Us</Link></li>

                    <li className="menu-item-has-children">
                      <Link to="#">Service</Link>
                      <ul className="sub-menu">
                        <li><Link to="service.html">Renewable Energy
</Link></li>
                        <li><Link to="service-2.html">
Wind Generator</Link></li>
                        <li><Link to="service-3.html">Solar Energy</Link></li>
                        <li><Link to="service-details.html">Hydropower Energy</Link></li>
                        <li><Link to="service-details.html">Eco Maintenance</Link></li>
                      </ul>
                    </li>

                    {/* <li className="menu-item-has-children">
                      <Link to="#">Blog</Link>
                      <ul className="sub-menu">
                        <li><Link to="blog.html">Blog</Link></li>
                        <li><Link to="blog-details.html">Blog Details</Link></li>
                      </ul>
                    </li> */}

                    <li><Link to="contact.html">Contact</Link></li>
                  </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="header-button">
                  <button type="button" className="th-menu-toggle d-inline-block d-lg-none">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>

              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <button type="button" className="icon-btn searchBoxToggler">
                    <i className="far fa-search"></i>
                  </button>
                  <Link to="#" className="icon-btn sideMenuToggler d-none d-lg-block">
                    <img src="assets/img/icon/grid.svg" alt="grid" />
                  </Link>
                  <Link to="tel:+25862323258" className="th-btn th-icon">
                    <span
                      className="btn-text"
                      data-back="Call For Help Us: +258 6232 3258 "
                      data-front="Call For Help Us: +258 6232 3258"
                    ></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-bg" data-mask-src="assets/img/logo_bg_mask.png"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
