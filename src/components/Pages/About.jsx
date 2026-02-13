import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  // Andhra Pradesh districts served
  const apDistricts = [
    "తూర్పు గోదావరి", "పశ్చిమ గోదావరి", "విశాఖపట్నం", 
    "విజయవాడ", "గుంటూరు", "నెల్లూరు", "తిరుపతి",
    "కాకినాడ", "రాజమండ్రి", "విజయనగరం"
  ];

  return (
    <section className="eby__about">
      <div className="eby__container">
        
        {/* Simple Header - Pure English */}
        <div className="eby__header">
          <span className="eby__tag">ANDHRA PRADESH'S TRUSTED SOLAR PARTNER</span>
          <h2 className="eby__title">
            EasternBay Solar — <span>Service Across AP</span>
          </h2>
          <p className="eby__desc">
            We're not pan-India. We're proudly Andhra Pradesh focused. 
            Better service, faster response, local expertise.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="eby__grid">
          
          {/* Left - Image */}
          <div className="eby__imageWrap">
            <div className="eby__image">
              <img 
                src="/assets/img/aboutus.jpg" 
                alt="EasternBay Solar Installation in Andhra Pradesh" 
              />
            </div>
            <div className="eby__badge">
              <span>⚡ 2000+</span>
              <small>Installations in AP</small>
            </div>
          </div>

          {/* Right - Content */}
          <div className="eby__content">
            
            {/* Service Message - Pure Telugu for Telugu text */}
            <div className="eby__message">
              <h3>ఈస్ట్రన్ బే సోలార్</h3>
              <p className="eby__teluguText">
                <span className="eby__highlight">ఆంధ్రప్రదేశ్ లో మా సర్వీస్ ఓకేనా?</span> — ఖచ్చితంగా, అవును. 
                మేము విశాఖపట్నంలో ప్రధాన కార్యాలయంతో కోస్తా, రాయలసీమ మరియు 
                మొత్తం 13 జిల్లాల్లో సేవలు అందిస్తున్నాము.
              </p>
            </div>

            {/* Quick Stats - Pure English */}
            <div className="eby__stats">
              <div className="eby__stat">
                <span className="eby__statValue">10+</span>
                <span className="eby__statLabel">Years in AP</span>
              </div>
              <div className="eby__stat">
                <span className="eby__statValue">13/13</span>
                <span className="eby__statLabel">Districts Covered</span>
              </div>
              <div className="eby__stat">
                <span className="eby__statValue">⏱️ 4hr</span>
                <span className="eby__statLabel">Avg Response</span>
              </div>
            </div>

            {/* Service Promise - Pure English */}
            <div className="eby__promise">
              <div className="eby__promiseItem">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Telugu, English and Hindi speaking support team</span>
              </div>
              <div className="eby__promiseItem">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Free site visit within 48 hours</span>
              </div>
              <div className="eby__promiseItem">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>AP government approved empanelment</span>
              </div>
            </div>

            {/* CTA Button - Pure English */}
            <Link to="/about" className="eby__button">
              Know More About EasternBay
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" strokeWidth="1.5"/>
                <path d="M14 7L19 12L14 17" stroke="white" strokeWidth="1.5"/>
              </svg>
            </Link>

          </div>
        </div>

        {/* AP Districts Strip - Pure Telugu */}
        <div className="eby__strip">
          <div className="eby__stripTrack">
            {apDistricts.map((district, index) => (
              <span key={index} className="eby__stripItem">
                <span className="eby__dot">●</span> {district}
              </span>
            ))}
            {apDistricts.map((district, index) => (
              <span key={`dup-${index}`} className="eby__stripItem">
                <span className="eby__dot">●</span> {district}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Telugu Message - Pure Telugu at bottom */}
        <div className="eby__teluguFooter">
          <div className="eby__teluguBox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#FF9500" strokeWidth="1.5"/>
              <path d="M12 8V12L15 15" stroke="#FF9500" strokeWidth="1.5"/>
            </svg>
            <span>మీ ఇంటికే ఉచిత సైట్ విజిట్ — ఈ వారమే బుక్ చేసుకోండి</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ===== EASTERNBAY ABOUT ===== */
        /* PREFIX: eby__ - UNIQUE, NO CONFLICTS */
        
        .eby__about {
          padding: 80px 0;
background: linear-gradient(
  90deg,
  rgba(135, 206, 250, 0.4),
  rgba(255, 183, 77, 0.4)
);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .eby__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ===== HEADER - PURE ENGLISH ===== */
        .eby__header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .eby__tag {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #FF9500;
          background: rgba(255, 149, 0, 0.08);
          padding: 8px 18px;
          border-radius: 40px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .eby__title {
          font-size: 38px;
          font-weight: 700;
          color: #0B1A2E;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .eby__title span {
          color: #FF9500;
          position: relative;
        }

        .eby__title span::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(255, 149, 0, 0.1);
          z-index: -1;
        }

        .eby__desc {
          font-size: 18px;
          line-height: 1.6;
          color: #64748B;
        }

        /* ===== GRID ===== */
        .eby__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }

        /* ===== IMAGE ===== */
        .eby__imageWrap {
          position: relative;
        }

        .eby__image {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
        }

        .eby__image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s ease;
        }

        .eby__image:hover img {
          transform: scale(1.03);
        }

        .eby__badge {
          position: absolute;
          bottom: 30px;
          right: -20px;
          background: white;
          padding: 18px 24px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          border-left: 4px solid #FF9500;
        }

        .eby__badge span {
          font-size: 24px;
          font-weight: 700;
          color: #0B1A2E;
        }

        .eby__badge small {
          font-size: 13px;
          color: #64748B;
          margin-top: 4px;
        }

        /* ===== CONTENT ===== */
        .eby__content {
          padding-right: 20px;
        }

        .eby__message h3 {
          font-size: 28px;
          font-weight: 700;
          color: #0B1A2E;
          margin-bottom: 16px;
        }

        /* Pure Telugu Text - Using actual Telugu script */
        .eby__teluguText {
          font-size: 18px;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 30px;
          font-family: 'Noto Sans Telugu', 'Segoe UI', sans-serif;
          letter-spacing: 0.3px;
        }

        .eby__highlight {
          color: #FF9500;
          font-weight: 600;
          background: rgba(255, 149, 0, 0.05);
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
        }

        /* ===== STATS - PURE ENGLISH ===== */
        .eby__stats {
          display: flex;
          gap: 30px;
          margin-bottom: 35px;
          padding: 20px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .eby__stat {
          display: flex;
          flex-direction: column;
        }

        .eby__statValue {
          font-size: 26px;
          font-weight: 700;
          color: #FF9500;
          margin-bottom: 4px;
        }

        .eby__statLabel {
          font-size: 14px;
          color: #64748B;
        }

        /* ===== PROMISE - PURE ENGLISH ===== */
        .eby__promise {
          margin-bottom: 40px;
        }

        .eby__promiseItem {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          font-size: 16px;
          color: #1E293B;
        }

        /* ===== BUTTON - PURE ENGLISH ===== */
        .eby__button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0B1A2E;
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: none;
        }

        .eby__button:hover {
          background: #FF9500;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 149, 0, 0.3);
        }

        .eby__button svg {
          transition: transform 0.3s ease;
        }

        .eby__button:hover svg {
          transform: translateX(5px);
        }

        /* ===== AP DISTRICTS STRIP - PURE TELUGU ===== */
        .eby__strip {
          background: #F8FAFC;
          padding: 16px 0;
          overflow: hidden;
          position: relative;
          border-radius: 50px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          margin-bottom: 30px;
        }

        .eby__stripTrack {
          display: flex;
          animation: ebyScroll 25s linear infinite;
          white-space: nowrap;
        }

        .eby__stripItem {
          display: inline-flex;
          align-items: center;
          padding: 0 24px;
          font-size: 16px;
          font-weight: 500;
          color: #1E293B;
          font-family: 'Noto Sans Telugu', 'Segoe UI', sans-serif;
        }

        .eby__dot {
          color: #FF9500;
          margin-right: 8px;
          font-size: 12px;
        }

        /* ===== TELUGU FOOTER - PURE TELUGU ===== */
        .eby__teluguFooter {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .eby__teluguBox {
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(145deg, #FFF9F0, #FFFFFF);
          padding: 18px 32px;
          border-radius: 60px;
          border: 1px solid rgba(255, 149, 0, 0.2);
          box-shadow: 0 5px 15px rgba(255, 149, 0, 0.05);
        }

        .eby__teluguBox span {
          font-size: 18px;
          font-weight: 500;
          color: #0B1A2E;
          font-family: 'Noto Sans Telugu', 'Segoe UI', sans-serif;
          letter-spacing: 0.5px;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes ebyScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .eby__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .eby__content {
            padding-right: 0;
          }

          .eby__badge {
            right: 20px;
          }
        }

        @media (max-width: 768px) {
          .eby__about {
            padding: 60px 0;
          }

          .eby__container {
            padding: 0 24px;
          }

          .eby__title {
            font-size: 30px;
          }

          .eby__desc {
            font-size: 16px;
          }

          .eby__stats {
            gap: 20px;
          }

          .eby__statValue {
            font-size: 22px;
          }

          .eby__badge {
            position: static;
            margin-top: 20px;
            width: fit-content;
          }

          .eby__button {
            width: 100%;
            justify-content: center;
          }

          .eby__teluguText {
            font-size: 16px;
          }

          .eby__teluguBox span {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .eby__stats {
            flex-direction: column;
            gap: 15px;
          }

          .eby__title {
            font-size: 26px;
          }

          .eby__tag {
            font-size: 11px;
          }

          .eby__stripItem {
            font-size: 14px;
            padding: 0 16px;
          }

          .eby__teluguBox {
            padding: 14px 24px;
            text-align: center;
          }
        }

        /* Hide old classes */
        .about-area, .space-top, .title-area, .sec-title,
        .img-box1, .th-parallax, .checklist, .th-btn {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default About;