import React from "react";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer
      className="footer-wrapper bg-title footer-layout1"
      data-bg-src="assets/img/bg/dot-shape.png"
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            {/* About Section */}
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img src="assets/img/eastern-baylogo.png" alt="solar" style={{width:"190px"}} />
                    </Link>
                  </div>
                  <p className="about-text">
                    Solar energy is renewable and inexhaustible, making it a
                    sustainable solution for meeting energy demands. Energy
                    usage to design the ideal solar solution for your property.
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/OffGridSolar">Off-Grid</Link></li>
                    <li><Link to="">On-Grid</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="service.html">Renewable Energy</a></li>
                    <li><a href="service.html">Wind Generator</a></li>
                    <li><a href="service.html">Solar Energy</a></li>
                    <li><a href="service.html">Hydropower Energy</a></li>
                    <li><a href="service.html">Eco Maintenance</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact Us</h3>
                <div className="th-widget-about">
                  <h4 className="footer-info-title">Address Location</h4>
                  <p className="footer-info">
                    <i className="fas fa-map-marker-alt"></i> Kakinada
                  </p>

                  <h4 className="footer-info-title">Phone Number</h4>
                  <p className="footer-info">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <span>
                      <a className="text-inherit" href="tel:+19524357106">
                        +91 9524357106
                      </a>
                    </span>
                  </p>

                  <h4 className="footer-info-title">Email Address</h4>
                  <p className="footer-info">
                    <i className="fa-sharp fa-solid fa-envelope"></i>
                    <span>
                      <a className="text-inherit" href="mailto:info@solar.com">
                        info@solar.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrap text-center">
        <p className="copyright-text">
          Copyright <i className="fal fa-copyright"></i> 2025{" "}
          <a href="https://themeforest.net/user/themeholy">Easterbay</a>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
