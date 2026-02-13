import React, { useState } from "react";

const ProcessSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Custom SVG Icons - Premium Design
  const icons = {
    inspection: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="url(#ebx-gradient-1)" strokeWidth="1.2" fill="white"/>
        <path d="M12 6V12L16 16" stroke="url(#ebx-gradient-1)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="#FF9500" fillOpacity="0.2"/>
        <circle cx="12" cy="12" r="1" fill="#FF9500"/>
      </svg>
    ),
    approval: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="url(#ebx-gradient-2)" strokeWidth="1.2" fill="white"/>
        <path d="M7 12L10 15L17 8" stroke="url(#ebx-gradient-2)" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="18" cy="6" r="1.5" fill="#FF9500"/>
      </svg>
    ),
    installation: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#ebx-gradient-3)" strokeWidth="1.2" fill="white"/>
        <path d="M2 17L12 22L22 17" stroke="url(#ebx-gradient-3)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M2 12L12 17L22 12" stroke="url(#ebx-gradient-3)" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="#FF9500"/>
      </svg>
    ),
    support: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3" stroke="url(#ebx-gradient-4)" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="url(#ebx-gradient-4)" strokeWidth="1.2" fill="white"/>
        <path d="M12 8V12L14 14" stroke="url(#ebx-gradient-4)" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="8" r="1" fill="#FF9500"/>
      </svg>
    ),
    arrowRight: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19" stroke="#FF9500" strokeWidth="1.5"/>
        <path d="M14 7L19 12L14 17" stroke="#FF9500" strokeWidth="1.5"/>
      </svg>
    ),
    location: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#FF9500" strokeWidth="1.5" fill="none"/>
      </svg>
    )
  };

  const processes = [
    {
      id: 1,
      number: "01",
      title: "Free Site Inspection",
      description: "Engineers visit your location. Shadow analysis, roof assessment, load calculation. Free consultation with detailed quote.",
      telugu: "మా ఇంజనీర్లు మీ స్థానాన్ని సందర్శిస్తారు. షేడ్ అనాలిసిస్, రూఫ్ అసెస్మెంట్, లోడ్ కాలిక్యులేషన్. ఉచిత కన్సల్టేషన్.",
      timeline: "24-48 Hours",
      icon: icons.inspection,
      cities: "Visakhapatnam • Vijayawada • Guntur • Tirupati",
      color: "#FF9500",
      bgPattern: "radial-gradient(circle at 100% 0%, rgba(255,149,0,0.03) 0%, transparent 50%)"
    },
    {
      id: 2,
      number: "02",
      title: "AP Government Approvals",
      description: "Complete NEDCAP subsidy processing. DISCOM net meter application. All AP government paperwork handled by our team.",
      telugu: "NEDCAP సబ్సిడీ ప్రాసెసింగ్. DISCOM నెట్ మీటర్ అప్లికేషన్. అన్ని AP ప్రభుత్వ పత్రాలు మా టీమ్ నిర్వహిస్తుంది.",
      timeline: "2-3 Days",
      icon: icons.approval,
      cities: "All 13 Districts",
      color: "#8B5CF6",
      bgPattern: "radial-gradient(circle at 100% 0%, rgba(139,92,246,0.03) 0%, transparent 50%)"
    },
    {
      id: 3,
      number: "03",
      title: "Professional Installation",
      description: "Tier-1 solar panels. Quality inverters. Proper earthing and theft-proof structure. Minimal disturbance to your premises.",
      telugu: "టైర్-1 సోలార్ ప్యానెల్స్. నాణ్యమైన ఇన్వర్టర్లు. సరైన ఎర్తింగ్. కనీస అవాంతరం.",
      timeline: "2-3 Days",
      icon: icons.installation,
      cities: "PAN Andhra Pradesh",
      color: "#10B981",
      bgPattern: "radial-gradient(circle at 100% 0%, rgba(16,185,129,0.03) 0%, transparent 50%)"
    },
    {
      id: 4,
      number: "04",
      title: "Telugu Support & Monitoring",
      description: "24/7 customer support in Telugu. Mobile app for real-time monitoring. Annual maintenance contracts available.",
      telugu: "తెలుగులో 24/7 కస్టమర్ సపోర్ట్. రియల్ టైమ్ మానిటరింగ్ కోసం మొబైల్ యాప్. వార్షిక నిర్వహణ కాంట్రాక్ట్లు.",
      timeline: "Lifetime",
      icon: icons.support,
      cities: "All AP Districts",
      color: "#EC4899",
      bgPattern: "radial-gradient(circle at 100% 0%, rgba(236,72,153,0.03) 0%, transparent 50%)"
    }
  ];

  return (
    <section className="ebx__pinnacle">
      {/* SVG Gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <linearGradient id="ebx-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
        <linearGradient id="ebx-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="ebx-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
        <linearGradient id="ebx-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </svg>

      {/* Multi-layer Background */}
      <div className="ebx__background-layer">
        <div className="ebx__bg-pattern"></div>
        <div className="ebx__bg-gradient"></div>
        <div className="ebx__bg-solar"></div>
        <div className="ebx__bg-orbs">
          <div className="ebx__orb ebx__orb--1"></div>
          <div className="ebx__orb ebx__orb--2"></div>
          <div className="ebx__orb ebx__orb--3"></div>
          <div className="ebx__orb ebx__orb--4"></div>
        </div>
      </div>

      <div className="ebx__universe">
        {/* Section Header */}
        <div className="ebx__zenith">
          <div className="ebx__aura">
            <span className="ebx__radiance">⚡ THE EASTERN BEY PROTOCOL</span>
            <h2 className="ebx__monument">
              Solar Installation <span>Andhra Pradesh</span>
            </h2>
            <p className="ebx__essence">
              From site visit to power generation. Complete transparency, 
              faster execution, and local expertise across AP.
            </p>
          </div>
        </div>

        {/* Process Grid */}
        <div className="ebx__constellation">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className="ebx__vortex"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Background Layers */}
              <div className="ebx__card-layers">
                <div className="ebx__card-bg-base" style={{ background: process.bgPattern }}></div>
                <div className="ebx__card-bg-glass"></div>
                <div className="ebx__card-bg-shine"></div>
                <div className="ebx__card-bg-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${process.color}15, transparent 70%)` }}></div>
              </div>

              {/* Floating Number */}
              <div className="ebx__cosmic" style={{ color: `${process.color}15` }}>
                {process.number}
              </div>
              
              {/* Card Content */}
              <div className="ebx__dimension">
                {/* Icon Sphere with Enhanced Glow */}
                <div className="ebx__nexus" style={{ background: `linear-gradient(145deg, ${process.color}08, white)` }}>
                  <div className="ebx__core-glow" style={{ background: `radial-gradient(circle, ${process.color}30, transparent 70%)` }}></div>
                  <div className="ebx__core">
                    {process.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="ebx__beacon" style={{ color: process.color }}>
                  {process.title}
                </h3>

                {/* Timeline Capsule */}
                <div className="ebx__chrono" style={{ background: `${process.color}08`, borderColor: `${process.color}20` }}>
                  <span className="ebx__epoch" style={{ color: process.color }}>Timeline</span>
                  <span className="ebx__interval" style={{ color: process.color }}>{process.timeline}</span>
                </div>

                {/* Description with Hover Translation */}
                <div className="ebx__manuscript">
                  <div className={`ebx__script ${activeCard === index ? 'ebx__script--fade' : ''}`}>
                    <p>{process.description}</p>
                  </div>
                  <div className={`ebx__translation ${activeCard === index ? 'ebx__translation--reveal' : ''}`}>
                    <p>{process.telugu}</p>
                  </div>
                </div>

                {/* Service Territory */}
                <div className="ebx__territory">
                  <span className="ebx__compass">{icons.location}</span>
                  <span className="ebx__domain">{process.cities}</span>
                </div>

                {/* Explorer Link */}
                <a href="/process" className="ebx__voyager" style={{ color: process.color }}>
                  <span>Explore Process</span>
                  {icons.arrowRight}
                </a>
              </div>

              {/* Edge Accent */}
              <div className="ebx__horizon" style={{ background: `linear-gradient(90deg, ${process.color}, transparent)` }}></div>
            </div>
          ))}
        </div>

        {/* Accreditation Vault */}
        <div className="ebx__vault">
          <div className="ebx__seal">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>NEDCAP Empaneled</span>
          </div>
          <div className="ebx__seal">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>DISCOM Approved</span>
          </div>
          <div className="ebx__seal">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Telugu Support</span>
          </div>
          <div className="ebx__seal">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>2000+ Installations</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== EASTERN BEY X - PREMIUM PROCESS SECTION ===== */
        /* PREFIX: ebx__ - 100% UNIQUE - NO CONFLICTS */
        
        .ebx__pinnacle {
          padding: 120px 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
          background: #0B1A2E;
        }

        /* ===== MULTI-LAYER BACKGROUND ===== */
        .ebx__background-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .ebx__bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.07;
          mix-blend-mode: overlay;
        }

        .ebx__bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(255,149,0,0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 30%, rgba(139,92,246,0.05) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(16,185,129,0.05) 0%, transparent 50%),
                      radial-gradient(circle at 90% 70%, rgba(236,72,153,0.05) 0%, transparent 50%);
        }

        .ebx__bg-solar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 5 L55 40 L95 40 L60 60 L75 95 L50 75 L25 95 L40 60 L5 40 L45 40 Z" fill="rgba(255,149,0,0.02)"/></svg>');
          background-size: 80px 80px;
          background-repeat: repeat;
          opacity: 0.2;
        }

        .ebx__bg-orbs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .ebx__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }

        .ebx__orb--1 {
          top: 10%;
          left: 5%;
          width: 400px;
          height: 400px;
          background: #FF9500;
          animation: float 20s infinite;
        }

        .ebx__orb--2 {
          bottom: 20%;
          right: 10%;
          width: 350px;
          height: 350px;
          background: #8B5CF6;
          animation: float 25s infinite reverse;
        }

        .ebx__orb--3 {
          top: 40%;
          right: 30%;
          width: 300px;
          height: 300px;
          background: #10B981;
          animation: float 22s infinite 2s;
        }

        .ebx__orb--4 {
          bottom: 10%;
          left: 20%;
          width: 250px;
          height: 250px;
          background: #EC4899;
          animation: float 18s infinite 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(20px); }
          75% { transform: translateY(20px) translateX(-30px); }
        }

        .ebx__universe {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        /* ===== HEADER ===== */
        .ebx__zenith {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
        }

        .ebx__aura {
          max-width: 700px;
          margin: 0 auto;
        }

        .ebx__radiance {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 4px;
          color: #FF9500;
          background: rgba(11, 26, 46, 0.8);
          padding: 10px 24px;
          border-radius: 40px;
          margin-bottom: 25px;
          text-transform: uppercase;
          border: 1px solid rgba(255,149,0,0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .ebx__monument {
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin-bottom: 25px;
          line-height: 1.2;
          letter-spacing: -1px;
          text-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }

        .ebx__monument span {
          color: #FF9500;
          position: relative;
          display: inline-block;
        }

        .ebx__monument span::before {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 12px;
          background: rgba(255,149,0,0.2);
          z-index: -1;
          border-radius: 12px;
        }

        .ebx__essence {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
          margin: 0 auto;
        }

        /* ===== PROCESS GRID ===== */
        .ebx__constellation {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 70px;
        }

        /* ===== CARD WITH LAYERS ===== */
        .ebx__vortex {
          position: relative;
          border-radius: 32px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          height: 100%;
          cursor: pointer;
        }

        .ebx__card-layers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
        }

        .ebx__card-bg-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .ebx__card-bg-glass {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
          backdrop-filter: blur(20px);
          border-radius: 32px;
        }

        .ebx__card-bg-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .ebx__vortex:hover .ebx__card-bg-shine {
          opacity: 1;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%, rgba(255,255,255,0.1) 100%);
        }

        .ebx__card-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 32px;
        }

        .ebx__vortex:hover .ebx__card-bg-glow {
          opacity: 0.3;
        }

        .ebx__cosmic {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          font-family: 'Inter', sans-serif;
          opacity: 0.1;
          transition: all 0.3s ease;
          letter-spacing: -4px;
          color: white !important;
          z-index: 15;
        }

        .ebx__vortex:hover .ebx__cosmic {
          opacity: 0.2;
          transform: scale(1.1);
        }

        .ebx__dimension {
          padding: 45px 30px 40px;
          position: relative;
          z-index: 20;
        }

        /* ===== ICON SPHERE WITH GLOW ===== */
        .ebx__nexus {
          width: 96px;
          height: 96px;
          background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)) !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          position: relative;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .ebx__core-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ebx__vortex:hover .ebx__core-glow {
          opacity: 0.4;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        .ebx__core {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 2;
        }

        .ebx__vortex:hover .ebx__core {
          transform: scale(1.1) rotate(5deg);
        }

        .ebx__core svg circle,
        .ebx__core svg rect,
        .ebx__core svg path {
          stroke: white !important;
        }

        .ebx__core svg circle[fill="#FF9500"] {
          fill: white !important;
        }

        /* ===== TITLE ===== */
        .ebx__beacon {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
          transition: color 0.3s ease;
          color: white !important;
        }

        /* ===== TIMELINE ===== */
        .ebx__chrono {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 18px;
          border-radius: 60px;
          margin-bottom: 25px;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.03) !important;
        }

        .ebx__vortex:hover .ebx__chrono {
          transform: scale(1.05);
          border-color: rgba(255,255,255,0.2) !important;
        }

        .ebx__epoch {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
          color: white !important;
        }

        .ebx__interval {
          font-size: 14px;
          font-weight: 700;
          color: white !important;
        }

        /* ===== DESCRIPTION ===== */
        .ebx__manuscript {
          position: relative;
          min-height: 110px;
          margin-bottom: 25px;
        }

        .ebx__script {
          transition: opacity 0.25s ease;
          opacity: 1;
        }

        .ebx__script p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }

        .ebx__script--fade {
          opacity: 0;
        }

        .ebx__translation {
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.25s ease;
          opacity: 0;
          font-family: 'Noto Sans Telugu', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #FF9500;
          background: rgba(11, 26, 46, 0.9);
          padding: 16px;
          border-radius: 16px;
          border-left: 4px solid #FF9500;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .ebx__translation p {
          margin: 0;
        }

        .ebx__translation--reveal {
          opacity: 1;
        }

        /* ===== SERVICE TERRITORY ===== */
        .ebx__territory {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 0;
          margin-bottom: 25px;
          border-top: 1px dashed rgba(255,255,255,0.1);
          border-bottom: 1px dashed rgba(255,255,255,0.1);
        }

        .ebx__compass {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ebx__compass svg path {
          stroke: #FF9500;
        }

        .ebx__domain {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.3px;
        }

        /* ===== EXPLORER LINK ===== */
        .ebx__voyager {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 8px 0;
          color: #FF9500 !important;
        }

        .ebx__voyager svg path {
          stroke: #FF9500;
        }

        .ebx__voyager:hover {
          gap: 15px;
        }

        .ebx__voyager:hover svg {
          transform: translateX(6px);
        }

        /* ===== EDGE ACCENT ===== */
        .ebx__horizon {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 25;
        }

        .ebx__vortex:hover .ebx__horizon {
          opacity: 0.5;
        }

        /* ===== ACCREDITATION VAULT ===== */
        .ebx__vault {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
          padding: 35px 40px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.05);
          margin-top: 30px;
          position: relative;
          z-index: 30;
        }

        .ebx__seal {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-weight: 600;
          font-size: 15px;
          padding: 0 10px;
        }

        .ebx__seal svg path {
          stroke: #FF9500;
        }

        .ebx__seal svg {
          flex-shrink: 0;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .ebx__constellation {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .ebx__monument {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .ebx__pinnacle {
            padding: 80px 0;
          }

          .ebx__universe {
            padding: 0 24px;
          }

          .ebx__monument {
            font-size: 36px;
          }

          .ebx__essence {
            font-size: 16px;
          }

          .ebx__constellation {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .ebx__vault {
            border-radius: 32px;
            padding: 30px;
            gap: 25px;
            flex-direction: column;
            align-items: flex-start;
          }

          .ebx__nexus {
            width: 80px;
            height: 80px;
          }

          .ebx__nexus svg {
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 480px) {
          .ebx__monument {
            font-size: 30px;
          }

          .ebx__radiance {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .ebx__dimension {
            padding: 35px 25px;
          }

          .ebx__beacon {
            font-size: 20px;
          }

          .ebx__cosmic {
            font-size: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;