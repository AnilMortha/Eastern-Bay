import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Custom SVG Icons - Premium Design
  const icons = {
    plus: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" stroke="#FF8800" strokeWidth="1.2" fill="white"/>
        <path d="M12 6V18" stroke="#FF8800" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 12H18" stroke="#FF8800" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    minus: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" stroke="#FF8800" strokeWidth="1.2" fill="#FF8800" fillOpacity="0.1"/>
        <path d="M6 12H18" stroke="#FF8800" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    location: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#FF8800" strokeWidth="1.6" fill="none"/>
        <circle cx="12" cy="9" r="2" stroke="#FF8800" strokeWidth="1.6" fill="none"/>
      </svg>
    ),
    subsidy: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF8800" strokeWidth="1.6" fill="none"/>
        <path d="M8 12H16" stroke="#FF8800" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M12 8V16" stroke="#FF8800" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    time: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF8800" strokeWidth="1.6" fill="none"/>
        <path d="M12 7V12L15 15" stroke="#FF8800" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    technical: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF8800" strokeWidth="1.6" fill="none"/>
        <path d="M12 8V12L14 14" stroke="#FF8800" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="0.5" fill="#FF8800"/>
      </svg>
    ),
    warranty: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v8c0 5 10 7 10 7s10-2 10-7V7l-10-5z" stroke="#FF8800" strokeWidth="1.6" fill="none"/>
        <path d="M8 12L11 15L16 9" stroke="#FF8800" strokeWidth="1.8"/>
      </svg>
    ),
    emi: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="#FF8800" strokeWidth="1.6" fill="none"/>
        <path d="M8 10H16" stroke="#FF8800" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 14H14" stroke="#FF8800" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    arrow: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19" stroke="white" strokeWidth="1.6"/>
        <path d="M14 7L19 12L14 17" stroke="white" strokeWidth="1.6"/>
      </svg>
    ),
    help: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M12 8V12" stroke="white" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="0.5" fill="white"/>
      </svg>
    )
  };

  const faqList = [
    {
      id: 1,
      question: "ఆంధ్రప్రదేశ్ లో మీ సర్వీస్ అందుబాటులో ఉందా?",
      english: "Is your service available in Andhra Pradesh?",
      answer: "ఖచ్చితంగా! మా ప్రధాన కార్యాలయం విశాఖపట్నంలో ఉంది. మేము ఆంధ్రప్రదేశ్ లోని మొత్తం 13 జిల్లాల్లో సేవలు అందిస్తున్నాము. శ్రీకాకుళం నుండి చిత్తూరు వరకు, తూర్పు గోదావరి నుండి అనంతపురం వరకు — 2000+ ఇన్స్టాలేషన్లు పూర్తి చేశాము.",
      category: "Service Area",
      icon: icons.location
    },
    {
      id: 2,
      question: "AP ప్రభుత్వ సబ్సిడీ ఎలా పొందాలి?",
      english: "How to get AP government subsidy?",
      answer: "మేము NEDCAP సబ్సిడీ ప్రక్రియను పూర్తిగా నిర్వహిస్తాము. ఎంపానల్డ్ చానల్ పార్టనర్‌గా, మేము అన్ని పత్రాలు, సైట్ ఇన్స్పెక్షన్, అప్రూవల్స్ చూసుకుంటాము. సబ్సిడీ మొత్తం (₹50,000 వరకు) నేరుగా మీ బిల్లులో సర్దుబాటు చేయబడుతుంది.",
      category: "Subsidy",
      icon: icons.subsidy
    },
    {
      id: 3,
      question: "సోలార్ ఇన్స్టాలేషన్ ఎంత రోజులు పడుతుంది?",
      english: "How long does solar installation take?",
      answer: "రెసిడెన్షియల్ సిస్టమ్స్ (1kW-10kW) కు 2-3 రోజులు పడుతుంది. సైట్ విజిట్ నుండి పవర్ జనరేషన్ వరకు మొత్తం ప్రక్రియ 7-10 రోజుల్లో పూర్తవుతుంది. కమర్షియల్ ప్రాజెక్ట్స్ (20kW+) 10-15 రోజులు పడుతుంది.",
      category: "Timeline",
      icon: icons.time
    },
    {
      id: 4,
      question: "నెట్ మీటరింగ్ ఎలా పనిచేస్తుంది?",
      english: "How does net metering work?",
      answer: "నెట్ మీటరింగ్ ద్వారా మీరు గ్రిడ్‌కు ఎక్స్‌పోర్ట్ చేసిన అదనపు సోలార్ పవర్‌కు క్రెడిట్ పొందుతారు. మేము పూర్తి DISCOM అప్లికేషన్, మీటర్ ఇన్స్టాలేషన్, బై-డైరెక్షనల్ మీటర్ సెటప్ చేస్తాము. మీ విద్యుత్ బిల్లులో వినియోగం మరియు ఎక్స్‌పోర్ట్ రెండూ చూపబడతాయి.",
      category: "Technical",
      icon: icons.technical
    },
    {
      id: 5,
      question: "వారంటీ & మెయింటెనెన్స్ ఎలా ఉంటుంది?",
      english: "What about warranty & maintenance?",
      answer: "టైర్-1 ప్యానెల్స్‌కు 25 ఏళ్ల పెర్ఫార్మెన్స్ వారంటీ, ఇన్వర్టర్లకు 10 ఏళ్ల వారంటీ, ఇన్స్టాలేషన్ వర్క్‌మాన్‌షిప్‌కు 5 ఏళ్ల వారంటీ ఇస్తున్నాము. తెలుగులో 24/7 సపోర్ట్, 4 గంటల్లో సర్వీస్ రెస్పాన్స్.",
      category: "Warranty",
      icon: icons.warranty
    },
    {
      id: 6,
      question: "EMI / జీరో డౌన్ పేమెంట్ ఉందా?",
      english: "Are EMI / zero down payment available?",
      answer: "అవును! ప్రముఖ బ్యాంకులతో సోలార్ లోన్ల కోసం టై-అప్ ఉంది. NBFC భాగస్వాముల ద్వారా జీరో డౌన్ పేమెంట్ ఆప్షన్స్ అందుబాటులో ఉన్నాయి. సెలెక్ట్ సిస్టమ్స్‌పై 6-12 నెలల 0% EMI ఉంది. లోన్ ప్రాసెసింగ్ అసిస్టెన్స్ ఉచితం.",
      category: "Payment",
      icon: icons.emi
    }
  ];

  return (
    <div className="ftw__master">
      {/* Background Elements */}
      <div className="ftw__aura"></div>
      <div className="ftw__aura ftw__aura--second"></div>
      
      <div className="ftw__frame">
        <div className="ftw__canvas">
          
          {/* ===== LEFT SIDE - FAQ CONTENT ===== */}
          <div className="ftw__chamber">
            {/* Header */}
            <div className="ftw__crest">
              <div className="ftw__badge">
                <span className="ftw__badgePulse"></span>
                <span>తెలుగులో సహాయం</span>
              </div>
              <h2 className="ftw__heading">
                <span>Andhra Pradesh</span> Solar FAQ
              </h2>
              <p className="ftw__subheading">
                మీ ప్రశ్నలు — మా సమాధానాలు. తెలుగులో పూర్తి వివరాలు.
              </p>
            </div>

            {/* FAQ Accordion - VISIBLE NOW */}
            <div className="ftw__vault">
              {faqList.map((faq, index) => (
                <div 
                  key={faq.id} 
                  className={`ftw__casket ${activeIndex === index ? 'ftw__casket--open' : ''}`}
                >
                  <button 
                    className="ftw__trigger"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="ftw__triggerLeft">
                      <span className="ftw__triggerIcon">
                        {faq.icon}
                      </span>
                      <div className="ftw__triggerText">
                        <span className="ftw__triggerTelugu">{faq.question}</span>
                        <span className="ftw__triggerEnglish">{faq.english}</span>
                      </div>
                    </div>
                    <span className="ftw__triggerToggle">
                      {activeIndex === index ? icons.minus : icons.plus}
                    </span>
                  </button>
                  
                  <div className={`ftw__reveal ${activeIndex === index ? 'ftw__reveal--visible' : ''}`}>
                    <div className="ftw__revealContent">
                      <p className="ftw__revealText">{faq.answer}</p>
                      <div className="ftw__revealFooter">
                        <span className="ftw__revealCategory">{faq.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* ===== RIGHT SIDE - VISUAL ===== */}
          <div className="ftw__sanctum">
            <div className="ftw__monolith">
              <img 
                src="assets/img/normal/faq-image.jpg" 
                alt="Eastern Bey Solar Support" 
                className="ftw__iconic"
              />
              
              {/* Floating Badges */}
              <div className="ftw__constellation">
                <div className="ftw__satellite ftw__satellite--one">
                  <span className="ftw__satelliteValue">24/7</span>
                  <span className="ftw__satelliteLabel">Telugu Support</span>
                </div>
                <div className="ftw__satellite ftw__satellite--two">
                  <span className="ftw__satelliteValue">4hr</span>
                  <span className="ftw__satelliteLabel">Avg Response</span>
                </div>
                <div className="ftw__satellite ftw__satellite--three">
                  <span className="ftw__satelliteValue">13/13</span>
                  <span className="ftw__satelliteLabel">AP Districts</span>
                </div>
              </div>

              {/* Trust Seal */}
              <div className="ftw__seal">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v8c0 5 10 7 10 7s10-2 10-7V7l-10-5z" stroke="#FF8800" strokeWidth="1.5" fill="white"/>
                  <path d="M8 12L11 15L16 9" stroke="#FF8800" strokeWidth="2"/>
                </svg>
                <span>NEDCAP Empaneled</span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Card */}
            <div className="ftw__portal">
              <div className="ftw__portalIcon">
                {icons.help}
              </div>
              <div className="ftw__portalText">
                <h4>ఇంకా ప్రశ్నలు ఉన్నాయా?</h4>
                <p>మా తెలుగు సపోర్ట్ టీమ్ సహాయం చేయడానికి సిద్ధంగా ఉంది</p>
              </div>
              <a href="/Appointment" className="ftw__gateway">
                <span>Contact Us</span>
                {icons.arrow}
              </a>
            </div>
      </div>

      <style jsx>{`
        /* ===== FAQ SECTION - 100% UNIQUE CLASSES ===== */
        /* PREFIX: ftw__ - NO CONFLICTS, ALWAYS VISIBLE */
        
        .ftw__master {
          position: relative;
          width: 100%;
          padding: 100px 0;
          background: #FFFFFF;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          display: block;
          visibility: visible;
          opacity: 1;
          z-index: 100;
        }

        .ftw__frame {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .ftw__canvas {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ===== LEFT SIDE ===== */
        .ftw__chamber {
          width: 100%;
        }

        .ftw__crest {
          margin-bottom: 40px;
        }

        .ftw__badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 136, 0, 0.08);
          padding: 8px 22px;
          border-radius: 50px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 136, 0, 0.15);
        }

        .ftw__badgePulse {
          width: 8px;
          height: 8px;
          background: #FF8800;
          border-radius: 50%;
          animation: ftwPulse 2s infinite;
        }

        .ftw__badge span {
          font-size: 14px;
          font-weight: 600;
          color: #FF8800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .ftw__heading {
          font-size: 42px;
          font-weight: 800;
          color: #0A1A2A;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .ftw__heading span {
          color: #FF8800;
          position: relative;
        }

        .ftw__heading span::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(255, 136, 0, 0.12);
          z-index: -1;
          border-radius: 10px;
        }

        .ftw__subheading {
          font-size: 18px;
          line-height: 1.6;
          color: #55657D;
          font-family: 'Noto Sans Telugu', sans-serif;
        }

        /* ===== FAQ ACCORDION - VISIBLE ===== */
        .ftw__vault {
          margin-bottom: 40px;
          display: block;
        }

        .ftw__casket {
          background: white;
          border-radius: 20px;
          margin-bottom: 16px;
          border: 1px solid #E9EDF2;
          transition: all 0.3s ease;
          display: block;
          visibility: visible;
        }

        .ftw__casket:hover {
          border-color: #FF8800;
          box-shadow: 0 8px 20px rgba(255, 136, 0, 0.06);
        }

        .ftw__casket--open {
          border-color: #FF8800;
          background: linear-gradient(145deg, white, rgba(255, 136, 0, 0.02));
          box-shadow: 0 10px 25px rgba(255, 136, 0, 0.08);
        }

        .ftw__trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 25px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .ftw__triggerLeft {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 1;
        }

        .ftw__triggerIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 136, 0, 0.06);
          border-radius: 14px;
          flex-shrink: 0;
        }

        .ftw__triggerText {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ftw__triggerTelugu {
          font-size: 17px;
          font-weight: 700;
          color: #0A1A2A;
          font-family: 'Noto Sans Telugu', sans-serif;
          line-height: 1.4;
        }

        .ftw__triggerEnglish {
          font-size: 14px;
          color: #64748B;
          font-style: italic;
        }

        .ftw__triggerToggle {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ===== ANSWER SECTION ===== */
        .ftw__reveal {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 25px;
          background: white;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        .ftw__reveal--visible {
          max-height: 350px;
          padding-bottom: 25px;
        }

        .ftw__revealContent {
          padding-top: 20px;
          border-top: 1px solid rgba(255, 136, 0, 0.15);
        }

        .ftw__revealText {
          font-size: 15px;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 16px;
          font-family: 'Noto Sans Telugu', sans-serif;
        }

        .ftw__revealFooter {
          display: flex;
          justify-content: flex-end;
        }

        .ftw__revealCategory {
          font-size: 12px;
          font-weight: 600;
          color: #FF8800;
          background: rgba(255, 136, 0, 0.08);
          padding: 6px 18px;
          border-radius: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ===== CONTACT PORTAL ===== */
        .ftw__portal {
          display: flex;
          align-items: center;
          gap: 20px;
          background: linear-gradient(145deg, #0A1A2A, #1A2C3C);
          padding: 28px 32px;
          border-radius: 24px;
          margin-top: 20px;
        }

        .ftw__portalIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(255, 136, 0, 0.15);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ftw__portalText {
          flex: 1;
        }

        .ftw__portalText h4 {
          color: white;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .ftw__portalText p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin: 0;
        }

        .ftw__gateway {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FF8800;
          color: white;
          padding: 14px 28px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ftw__gateway:hover {
          background: #F97316;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 136, 0, 0.3);
        }

        .ftw__gateway svg {
          transition: transform 0.3s ease;
        }

        .ftw__gateway:hover svg {
          transform: translateX(5px);
        }

        /* ===== RIGHT SIDE ===== */
        .ftw__sanctum {
          position: relative;
        }

        .ftw__monolith {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
        }

        .ftw__iconic {
          width: 100%;
          height: 550px;
          object-fit: cover;
          display: block;
        }

        .ftw__constellation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ftw__satellite {
          position: absolute;
          background: white;
          padding: 16px 24px;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(255, 136, 0, 0.15);
          backdrop-filter: blur(4px);
          animation: ftwFloat 5s infinite ease-in-out;
        }

        .ftw__satellite--one {
          top: 10px;
          right: 0px;
        }

        .ftw__satellite--two {
          bottom: 40px;
          left: 0px;
          animation-delay: 1.5s;
        }

        .ftw__satellite--three {
          top: 70px;
          transform: translateY(-50%);
          animation-delay: 3s;
        }

        .ftw__satelliteValue {
          display: block;
          font-size: 26px;
          font-weight: 800;
          color: #FF8800;
          line-height: 1;
          margin-bottom: 4px;
        }

        .ftw__satelliteLabel {
          font-size: 13px;
          font-weight: 600;
          color: #0A1A2A;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ftw__seal {
          position: absolute;
          bottom: 1px;
          right: 0px;
          background: white;
          padding: 16px 24px;
          border-radius: 60px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(255, 136, 0, 0.2);
        }

        .ftw__seal span {
          font-weight: 700;
          color: #0A1A2A;
          font-size: 14px;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes ftwPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes ftwFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .ftw__canvas {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ftw__heading {
            font-size: 36px;
          }

          .ftw__monolith {
            max-width: 600px;
            margin: 0 auto;
          }

          .ftw__iconic {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .ftw__master {
            padding: 70px 0;
          }

          .ftw__frame {
            padding: 0 24px;
          }

          .ftw__heading {
            font-size: 32px;
          }

          .ftw__trigger {
            padding: 18px 20px;
          }

          .ftw__triggerLeft {
            gap: 14px;
          }

          .ftw__triggerIcon {
            width: 40px;
            height: 40px;
          }

          .ftw__triggerTelugu {
            font-size: 16px;
          }

          .ftw__portal {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }

          .ftw__gateway {
            width: 100%;
            justify-content: center;
          }

          .ftw__satellite {
            position: static;
            margin: 10px;
            animation: none;
            transform: none;
          }

          .ftw__constellation {
            position: static;
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
          }

          .ftw__seal {
            position: static;
            margin-bottom: 20px !important;
            margin:auto;
            width: fit-content;
          }

          .ftw__reveal--visible {
            max-height: 500px;
          }
        }

        @media (max-width: 480px) {
          .ftw__heading {
            font-size: 28px;
          }

          .ftw__badge {
            padding: 6px 18px;
          }

          .ftw__badge span {
            font-size: 12px;
          }

          .ftw__triggerTelugu {
            font-size: 15px;
          }

          .ftw__triggerEnglish {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQSection;