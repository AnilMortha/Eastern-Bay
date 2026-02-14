import React from "react";
import { Link } from "react-router-dom";

const OffGrid = () => {
  // Custom SVG Icons
  const icons = {
    panel: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#FF8800" strokeWidth="1.2" fill="none"/>
        <path d="M4 8H20" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M4 12H20" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M4 16H20" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M8 4V20" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M12 4V20" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M16 4V20" stroke="#FF8800" strokeWidth="1.2"/>
      </svg>
    ),
    controller: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="7" width="14" height="10" rx="2" stroke="#FF8800" strokeWidth="1.2" fill="none"/>
        <circle cx="9" cy="12" r="1" fill="#FF8800"/>
        <circle cx="12" cy="12" r="1" fill="#FF8800"/>
        <circle cx="15" cy="12" r="1" fill="#FF8800"/>
        <path d="M8 5L10 7" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M16 5L14 7" stroke="#FF8800" strokeWidth="1.2"/>
      </svg>
    ),
    battery: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="#FF8800" strokeWidth="1.2" fill="none"/>
        <rect x="10" y="2" width="4" height="2" stroke="#FF8800" strokeWidth="1.2"/>
        <rect x="9" y="7" width="6" height="6" rx="1" fill="#FF8800" fillOpacity="0.2" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M12 10V7" stroke="#FF8800" strokeWidth="1.2"/>
      </svg>
    ),
    inverter: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="7" width="14" height="10" rx="2" stroke="#FF8800" strokeWidth="1.2" fill="none"/>
        <path d="M12 4V7" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M12 17V20" stroke="#FF8800" strokeWidth="1.2"/>
        <circle cx="12" cy="12" r="2" stroke="#FF8800" strokeWidth="1.2" fill="none"/>
        <path d="M9 9L7 7" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M15 15L17 17" stroke="#FF8800" strokeWidth="1.2"/>
      </svg>
    ),
    location: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#FF8800" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    check: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF8800" strokeWidth="1.2" fill="none"/>
        <path d="M8 12L11 15L16 9" stroke="#FF8800" strokeWidth="1.8"/>
      </svg>
    ),
    arrowRight: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19" stroke="white" strokeWidth="1.5"/>
        <path d="M14 7L19 12L14 17" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    sun: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" stroke="#FF8800" strokeWidth="1.2" fill="none"/>
        <path d="M12 2V4" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M12 20V22" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M4 12H2" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M22 12H20" stroke="#FF8800" strokeWidth="1.2"/>
      </svg>
    )
  };

  const districts = [
    "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", 
    "Kakinada", "Rajahmundry", "Nellore", "Anantapur"
  ];

  return (
    <div className="ogx__master">
      
      {/* ===== HERO SECTION ===== */}
      <section className="ogx__pinnacle">
        <div className="ogx__firmament">
          <div className="ogx__horizon">
            <span className="ogx__beacon">EasternBay</span>
            <h1 className="ogx__monument">
              Off-Grid Solar Solutions <span>for AP Homes & Farms</span>
            </h1>
            <p className="ogx__essence">
              100% independent power system — ideal for remote areas, farmhouses & 
              locations without grid access across Andhra Pradesh.
            </p>
            <div className="ogx__constellation">
              {districts.map((district, index) => (
                <span key={index} className="ogx__stellar">
                  {icons.location} {district}
                </span>
              ))}
            </div>
            <div className="ogx__nexus">
              <Link to="/Appointment" className="ogx__gateway">
                <span>Get Free Site Inspection</span>
                {icons.arrowRight}
              </Link>
              <span className="ogx__oracle">2000+ installations across AP</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS OFF-GRID ===== */}
      <section className="ogx__revelation">
        <div className="ogx__cosmos">
          <div className="ogx__binary">
            <div className="ogx__vision">
              <img 
                src="/assets/img/offgrid.jpg" 
                alt="Off-Grid Solar Installation Andhra Pradesh" 
                className="ogx__imagery"
              />
              <div className="ogx__aura">
                <span className="ogx__radiance">NEDCAP Approved</span>
              </div>
            </div>
            <div className="ogx__scripture">
              <span className="ogx__testament">WHAT IS OFF-GRID?</span>
              <h2 className="ogx__doctrine">Complete Energy Independence <span>for AP Homes</span></h2>
              <p className="ogx__parable">
                An off-grid solar system allows you to produce your own electricity 
                without depending on the government power supply. Energy generated 
                from solar panels is stored in batteries and used whenever needed.
              </p>
              <p className="ogx__parable">
                <strong>Perfect for:</strong> Remote farmhouses in Vizag hills, agricultural pumps in 
                Guntur, homes in Vijayawada with frequent power cuts, and properties 
                across AP without grid access.
              </p>
              <div className="ogx__virtues">
                <div className="ogx__virtue">
                  {icons.check}
                  <span>24/7 Power Backup</span>
                </div>
                <div className="ogx__virtue">
                  {icons.check}
                  <span>Zero Electricity Bills</span>
                </div>
                <div className="ogx__virtue">
                  {icons.check}
                  <span>10 Years Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="ogx__mechanics">
        <div className="ogx__cosmos">
          <div className="ogx__creed">
            <span className="ogx__tenet">THE PROCESS</span>
            <h2 className="ogx__principle">How Off-Grid Solar Works</h2>
            <p className="ogx__maxim">Complete independence from grid power</p>
          </div>

          <div className="ogx__quadrant">
            <div className="ogx__element">
              <div className="ogx__essenceBox">
                {icons.sun}
              </div>
              <h3>Solar Panels</h3>
              <p>Capture sunlight & convert to DC electricity. Tier-1 panels with 25 years performance warranty.</p>
            </div>
            <div className="ogx__element">
              <div className="ogx__essenceBox">
                {icons.controller}
              </div>
              <h3>Charge Controller</h3>
              <p>MPPT technology regulates power from panels to protect batteries and maximize efficiency.</p>
            </div>
            <div className="ogx__element">
              <div className="ogx__essenceBox">
                {icons.battery}
              </div>
              <h3>Battery Bank</h3>
              <p>Lithium or tubular batteries store electricity for night-time usage and backup.</p>
            </div>
            <div className="ogx__element">
              <div className="ogx__essenceBox">
                {icons.inverter}
              </div>
              <h3>Off-Grid Inverter</h3>
              <p>Converts stored DC power into usable AC power for all your appliances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AP GOVERNMENT SUBSIDY ===== */}
      <section className="ogx__blessing">
        <div className="ogx__cosmos">
          <div className="ogx__covenant">
            <div className="ogx__grace">
              <span className="ogx__mercy">AP GOVERNMENT SUBSIDY</span>
              <h2 className="ogx__salvation">Up to ₹50,000 Subsidy for AP Residents</h2>
              <p className="ogx__redemption">
                As an empaneled NEDCAP channel partner, we handle the complete subsidy 
                process for you. No need to run around government offices — we manage all 
                paperwork, inspections, and approvals.
              </p>
              <ul className="ogx__commandments">
                <li>✓ NEDCAP approved installer</li>
                <li>✓ DISCOM net meter approval included</li>
                <li>✓ Subsidy directly adjusted in bill</li>
                <li>✓ Complete documentation handled</li>
              </ul>
            </div>
            <div className="ogx__emblem">
              <div className="ogx__seal">
                <span className="ogx__sealNumber">₹50k</span>
                <span className="ogx__sealText">Maximum Subsidy</span>
              </div>
              <div className="ogx__seal ogx__seal--second">
                <span className="ogx__sealNumber">13/13</span>
                <span className="ogx__sealText">Districts Covered</span>
              </div>
              <div className="ogx__seal ogx__seal--third">
                <span className="ogx__sealNumber">4hr</span>
                <span className="ogx__sealText">Service Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="ogx__virtuesSection">
        <div className="ogx__cosmos">
          <div className="ogx__creed">
            <span className="ogx__tenet">ADVANTAGES</span>
            <h2 className="ogx__principle">Benefits of Off-Grid Solar</h2>
          </div>

   <div className="ogx__trinity">
  <div className="ogx__shrine">
    <div className="ogx__shrineIcon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF8800" strokeWidth="1.2" fill="white"/>
        <path d="M12 6V12L16 16" stroke="#FF8800" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="#FF8800"/>
        <path d="M4 4L6 6M20 4L18 6M20 20L18 18M4 20L6 18" stroke="#FF8800" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </div>
    <h3>100% Independence</h3>
    <p>No reliance on AP electricity board or rising power tariffs. Complete freedom from power cuts.</p>
  </div>
  
  <div className="ogx__shrine">
    <div className="ogx__shrineIcon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="6" width="14" height="14" rx="2" stroke="#FF8800" strokeWidth="1.2" fill="white"/>
        <path d="M12 4V6M12 20V22" stroke="#FF8800" strokeWidth="1.2"/>
        <path d="M8 10H16M8 14H14" stroke="#FF8800" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1" fill="#FF8800"/>
        <path d="M9 9L11 11M15 9L13 11" stroke="#FF8800" strokeWidth="1.2"/>
      </svg>
    </div>
    <h3>24/7 Power Supply</h3>
    <p>Stored energy ensures uninterrupted power day and night, even during grid failures.</p>
  </div>
  
  <div className="ogx__shrine">
    <div className="ogx__shrineIcon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF8800" strokeWidth="1.2" fill="white"/>
        <path d="M12 3C12 3 8 7 8 11C8 14 10 16 12 16C14 16 16 14 16 11C16 7 12 3 12 3Z" stroke="#FF8800" strokeWidth="1.2" fill="white"/>
        <path d="M12 8V10L13 11" stroke="#FF8800" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M6 6L7 7M18 6L17 7M6 18L7 17M18 18L17 17" stroke="#FF8800" strokeWidth="1.2"/>
      </svg>
    </div>
    <h3>Eco-Friendly</h3>
    <p>Reduce carbon footprint. Each 5kW system saves ~7 tons of CO₂ annually.</p>
  </div>
</div>


        </div>
      </section>

      {/* ===== SYSTEM COMPONENTS ===== */}
      <section className="ogx__components">
        <div className="ogx__cosmos">
          <div className="ogx__creed">
            <span className="ogx__tenet">COMPONENTS</span>
            <h2 className="ogx__principle">Premium System Components</h2>
            <p className="ogx__maxim">We use only Tier-1, certified equipment</p>
          </div>

          <div className="ogx__constellationGrid">
            <div className="ogx__celestial">
              {icons.panel}
              <h4>Solar Panels</h4>
              <p>Tier-1, 25 years performance warranty, high efficiency</p>
            </div>
            <div className="ogx__celestial">
              {icons.inverter}
              <h4>Off-Grid Inverter</h4>
              <p>Pure sine wave, 5-20kW capacity, IP65 protection</p>
            </div>
            <div className="ogx__celestial">
              {icons.battery}
              <h4>Battery Bank</h4>
              <p>Lithium-ion or tubular, 5-10 years warranty</p>
            </div>
            <div className="ogx__celestial">
              {icons.controller}
              <h4>MPPT Controller</h4>
              <p>98% efficiency, LCD display, remote monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="ogx__testimony">
        <div className="ogx__cosmos">
          <div className="ogx__creed">
            <span className="ogx__tenet">WHY EASTERN BEY</span>
            <h2 className="ogx__principle">Andhra Pradesh's Trusted Solar Partner</h2>
          </div>

          <div className="ogx__witness">
            <div className="ogx__testamentBox">
              <div className="ogx__testamentNumber">2000+</div>
              <div className="ogx__testamentText">Installations across AP</div>
            </div>
            <div className="ogx__testamentBox">
              <div className="ogx__testamentNumber">10+</div>
              <div className="ogx__testamentText">Years Experience</div>
            </div>
            <div className="ogx__testamentBox">
              <div className="ogx__testamentNumber">24/7</div>
              <div className="ogx__testamentText">Telugu Support</div>
            </div>
            <div className="ogx__testamentBox">
              <div className="ogx__testamentNumber">4hr</div>
              <div className="ogx__testamentText">Avg Response Time</div>
            </div>
          </div>

          <div className="ogx__creed">
            <Link to="/Appointment" className="ogx__gateway ogx__gateway--large">
              <span>Get Free Consultation</span>
              {icons.arrowRight}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="ogx__summit">
        <div className="ogx__cosmos">
          <div className="ogx__summitContent">
            <h2>Switch To Reliable Off-Grid Solar</h2>
            <p>Get a custom quote based on your power usage. Free site inspection across AP.</p>
            <Link to="/Appointment" className="ogx__gateway ogx__gateway--summit">
              <span>Book Free Site Visit</span>
              {icons.arrowRight}
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ===== OFF-GRID SOLAR PAGE - EASTERN BEY ===== */
        /* PREFIX: ogx__ - 100% UNIQUE */
        
        .ogx__master {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0A1A2A;
          overflow-x: hidden;
          margin-top:40px;
        }

        .ogx__cosmos {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ===== HERO SECTION ===== */
        .ogx__pinnacle {
          position: relative;
          padding: 120px 0 100px;
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          overflow: hidden;
        }

        .ogx__pinnacle::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,136,0,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .ogx__firmament {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .ogx__horizon {
          max-width: 800px;
        }

        .ogx__beacon {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: #FF8800;
          background: rgba(255,136,0,0.15);
          padding: 10px 24px;
          border-radius: 40px;
          margin-bottom: 30px;
          letter-spacing: 2px;
          border: 1px solid rgba(255,136,0,0.3);
        }

        .ogx__monument {
          font-size: 52px;
          font-weight: 800;
          color: white;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ogx__monument span {
          color: #FF8800;
          position: relative;
        }

        .ogx__monument span::after {
          content: '';
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 12px;
          background: rgba(255,136,0,0.2);
          z-index: -1;
        }

        .ogx__essence {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }

        .ogx__constellation {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 40px;
        }

        .ogx__stellar {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.9);
          font-size: 15px;
          background: rgba(255,255,255,0.05);
          padding: 8px 16px;
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .ogx__nexus {
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .ogx__gateway {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FF8800;
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: none;
        }

        .ogx__gateway:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,136,0,0.3);
        }

        .ogx__gateway svg {
          transition: transform 0.3s ease;
        }

        .ogx__gateway:hover svg {
          transform: translateX(5px);
        }

        .ogx__oracle {
          color: rgba(255,255,255,0.7);
          font-size: 15px;
        }

        /* ===== WHAT IS OFF-GRID ===== */
        .ogx__revelation {
          padding: 100px 0;
          background: white;
        }

        .ogx__binary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .ogx__vision {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .ogx__imagery {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .ogx__aura {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: white;
          padding: 16px 28px;
          border-radius: 60px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-left: 4px solid #FF8800;
        }

        .ogx__radiance {
          font-weight: 700;
          color: #0A1A2A;
          font-size: 16px;
        }

        .ogx__scripture {
          padding-right: 40px;
        }

        .ogx__testament {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #FF8800;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .ogx__doctrine {
          font-size: 38px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ogx__doctrine span {
          color: #FF8800;
        }

        .ogx__parable {
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 20px;
        }

        .ogx__virtues {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
        }

        .ogx__virtue {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 16px;
          font-weight: 500;
          color: #0A1A2A;
        }

        /* ===== HOW IT WORKS ===== */
        .ogx__mechanics {
          padding: 80px 0;
          background: #F8FAFC;
        }

        .ogx__creed {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 50px;
        }

        .ogx__tenet {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #FF8800;
          background: rgba(255,136,0,0.06);
          padding: 8px 22px;
          border-radius: 40px;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .ogx__principle {
          font-size: 36px;
          font-weight: 700;
          color: #0A1A2A;
          margin-bottom: 15px;
        }

        .ogx__maxim {
          font-size: 16px;
          color: #64748B;
        }

        .ogx__quadrant {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .ogx__element {
          background: white;
          padding: 40px 25px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .ogx__element:hover {
          transform: translateY(-8px);
          border-color: #FF8800;
          box-shadow: 0 20px 40px rgba(255,136,0,0.08);
        }

        .ogx__essenceBox {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(255,136,0,0.06);
          border-radius: 50%;
          margin: 0 auto 25px;
        }

        .ogx__element h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #0A1A2A;
        }

        .ogx__element p {
          font-size: 14px;
          line-height: 1.6;
          color: #64748B;
          margin: 0;
        }

        /* ===== SUBSIDY SECTION ===== */
        .ogx__blessing {
          padding: 100px 0;
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
        }

        .ogx__covenant {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .ogx__grace {
          color: white;
        }

        .ogx__mercy {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #FF8800;
          background: rgba(255,136,0,0.15);
          padding: 8px 22px;
          border-radius: 40px;
          margin-bottom: 20px;
          letter-spacing: 2px;
        }

        .ogx__salvation {
          font-size: 38px;
          color: white;
          font-weight: 700;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .ogx__redemption {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          margin-bottom: 30px;
        }

        .ogx__commandments {
          list-style: none;
          padding: 0;
        }

        .ogx__commandments li {
          color: rgba(255,255,255,0.9);
          font-size: 16px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ogx__emblem {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .ogx__seal {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,136,0,0.3);
          border-radius: 24px;
          padding: 30px 20px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .ogx__sealNumber {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: #FF8800;
          margin-bottom: 8px;
        }

        .ogx__sealText {
          font-size: 14px;
          color: rgba(255,255,255,0.8);
        }

        /* ===== BENEFITS ===== */
        .ogx__virtuesSection {
          padding: 80px 0;
          background: white;
        }

        .ogx__trinity {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .ogx__shrine {
          background: #F8FAFC;
          padding: 40px 30px;
          border-radius: 24px;
          text-align: center;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .ogx__shrineIcon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .ogx__shrine h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #0A1A2A;
        }

        .ogx__shrine p {
          font-size: 15px;
          line-height: 1.6;
          color: #64748B;
          margin: 0;
        }

        /* ===== COMPONENTS ===== */
        .ogx__components {
          padding: 80px 0;
          background: #F8FAFC;
        }

        .ogx__constellationGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .ogx__celestial {
          background: white;
          padding: 40px 25px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }

        .ogx__celestial h4 {
          font-size: 18px;
          font-weight: 700;
          margin: 20px 0 10px;
          color: #0A1A2A;
        }

        .ogx__celestial p {
          font-size: 14px;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        /* ===== TESTIMONY ===== */
        .ogx__testimony {
          padding: 100px 0;
          background: white;
        }

        .ogx__witness {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin: 50px 0;
        }

        .ogx__testamentBox {
          background: linear-gradient(145deg, #F8FAFC, white);
          padding: 40px 20px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(255,136,0,0.1);
        }

        .ogx__testamentNumber {
          font-size: 42px;
          font-weight: 800;
          color: #FF8800;
          margin-bottom: 10px;
        }

        .ogx__testamentText {
          font-size: 16px;
          color: #0A1A2A;
          font-weight: 500;
        }

        .ogx__gateway--large {
          padding: 18px 42px;
          font-size: 18px;
        }

        /* ===== CTA ===== */
        .ogx__summit {
          padding: 80px 0;
              background: linear-gradient(90deg, rgba(135, 206, 250, 0.4), rgba(255, 183, 77, 0.4));
        }

        .ogx__summitContent {
          text-align: center;
          color: black;
        }

        .ogx__summitContent h2 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .ogx__summitContent p {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .ogx__gateway--summit {
          background: white;
          color: #FF8800;
          font-size: 18px;
          padding: 18px 48px;
        }

        .ogx__gateway--summit:hover {
          background: white;
          color: #F97316;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ogx__monument {
            font-size: 42px;
          }

          .ogx__binary,
          .ogx__covenant {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ogx__quadrant,
          .ogx__constellationGrid,
          .ogx__trinity,
          .ogx__witness {
            grid-template-columns: repeat(2, 1fr);
          }

          .ogx__emblem {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ogx__pinnacle {
            padding: 80px 0;
          }

          .ogx__firmament,
          .ogx__cosmos {
            padding: 0 24px;
          }

          .ogx__monument {
            font-size: 36px;
          }

          .ogx__quadrant,
          .ogx__constellationGrid,
          .ogx__trinity,
          .ogx__witness {
            grid-template-columns: 1fr;
          }

          .ogx__emblem {
            grid-template-columns: 1fr;
          }

          .ogx__nexus {
            flex-direction: column;
            align-items: flex-start;
          }

          .ogx__doctrine {
            font-size: 32px;
          }

          .ogx__salvation {
            font-size: 32px;
          }

          .ogx__summitContent h2 {
            font-size: 32px;
          }

          .ogx__imagery {
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .ogx__monument {
            font-size: 28px;
          }

          .ogx__essence {
            font-size: 16px;
          }

          .ogx__constellation {
            gap: 10px;
          }

          .ogx__stellar {
            font-size: 13px;
            padding: 6px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default OffGrid;


