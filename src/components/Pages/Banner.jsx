import React from "react";
import { useState, useEffect } from "react";

const staticBgImage = '/assets/img/bg/solar-panels-roof-solar-cell.jpg';

const changingContent = [
    {
        title: "EASTERNBAY Solar",
        subtitle: "Andhra Pradesh's Trusted Solar Partner",
        description: "Professional Solar Solutions for Homes & Businesses",
        location: "Serving East & West Godavari, Vizag, Vijayawada",
        stats: { 
            energy: "2.5M kWh", 
            homes: "1000+", 
            co2: "1800 tons",
            efficiency: "99.8%"
        }
    },
    {
        title: "Quality Solar Systems",
        subtitle: "10+ Years Warranty | Tier-1 Panels",
        description: "Eastern Belt's Premier Solar Installation Company",
        location: "Authorized Channel Partners",
        stats: { 
            energy: "4.2M kWh", 
            homes: "1500+", 
            co2: "3200 tons",
            efficiency: "99.9%"
        }
    },
    {
        title: "End-to-End Solar Service",
        subtitle: "From Consultation to Commissioning",
        description: "Professional Installation | Net Metering Support | AMC Services",
        location: "PAN Andhra Pradesh Services",
        stats: { 
            energy: "6.8M kWh", 
            homes: "2000+", 
            co2: "5100 tons",
            efficiency: "100%"
        }
    }
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeMetric, setActiveMetric] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % changingContent.length
            );
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const currentSlide = changingContent[currentIndex];

    return (
        <section className="ebs__banner" id="hero">
            <div className="ebs__wrapper">
                {/* Background */}
                <div className="ebs__background">
                    <div 
                        className="ebs__bgImage"
                        style={{ backgroundImage: `url(${staticBgImage})` }}
                    />
                    <div className="ebs__overlay">
                        <div className="ebs__orb ebs__orb--1"></div>
                        <div className="ebs__orb ebs__orb--2"></div>
                        <div className="ebs__orb ebs__orb--3"></div>
                    </div>
                </div>

                {/* Main Container */}
                <div className="ebs__grid">
                    {/* Left Section */}
                    <div className="ebs__left" key={currentIndex}>
                        <div className="ebs__badge">
                            <span className="ebs__badgeDot"></span>
                            <span className="ebs__badgeText">EASTERN BELT • EST 2012</span>
                        </div>

                        <div className="ebs__titleGroup">
                            <h1 className="ebs__mainTitle">
                                <span className="ebs__gradientText">{currentSlide.title}</span>
                            </h1>
                            <div className="ebs__accentLine"></div>
                        </div>

                        <h2 className="ebs__subTitle">
                            {currentSlide.subtitle}
                        </h2>

                        <p className="ebs__description">
                            {currentSlide.description}
                        </p>

                        <div className="ebs__location">
                            <svg className="ebs__locationIcon" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                            </svg>
                            <span>{currentSlide.location}</span>
                        </div>

                        <div className="ebs__ctaGroup">
                            <a href="/Appointment" className="ebs__btn ebs__btn--primary">
                                <span>Book Consultation</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor"/>
                                </svg>
                            </a>
                            {/* <a href="/services" className="ebs__btn ebs__btn--secondary">
                                View Services
                            </a> */}
                        </div>

                        <div className="ebs__trustPillars">
                            <div className="ebs__pillar">
                                <svg width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#3b82f6"/>
                                </svg>
                                <span>ISO 9001</span>
                            </div>
                            <div className="ebs__pillar">
                                <svg width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#3b82f6"/>
                                </svg>
                                <span>NEDCAP</span>
                            </div>
                            <div className="ebs__pillar">
                                <svg width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#3b82f6"/>
                                </svg>
                                <span>5★ Rated</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - COMPLETELY REDESIGNED */}
                    <div className="ebs__right">
                        {/* Premium Metric Card */}
                        <div className="ebs__metricVault">
                            <div className="ebs__vaultHeader">
                                <span className="ebs__vaultTag">LIVE IMPACT</span>
                                <div className="ebs__vaultPulse"></div>
                            </div>
                            <div className="ebs__vaultGrid">
                                <div 
                                    className="ebs__vaultItem"
                                    onMouseEnter={() => setActiveMetric('energy')}
                                    onMouseLeave={() => setActiveMetric(null)}
                                >
                                    <div className="ebs__vaultIcon">
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" stroke="url(#ebsGradient1)" strokeWidth="1.5" fill="none"/>
                                        </svg>
                                    </div>
                                    <div className="ebs__vaultData">
                                        <span className="ebs__vaultValue">{currentSlide.stats.energy}</span>
                                        <span className="ebs__vaultLabel">Energy Generated</span>
                                    </div>
                                    <div className={`ebs__vaultGlow ${activeMetric === 'energy' ? 'ebs__vaultGlow--active' : ''}`}></div>
                                </div>
                                
                                <div 
                                    className="ebs__vaultItem"
                                    onMouseEnter={() => setActiveMetric('homes')}
                                    onMouseLeave={() => setActiveMetric(null)}
                                >
                                    <div className="ebs__vaultIcon">
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d="M3 9.5L12 4l9 5.5V20H3V9.5z" stroke="url(#ebsGradient2)" strokeWidth="1.5" fill="none"/>
                                            <path d="M8 13h8v7H8z" stroke="url(#ebsGradient2)" strokeWidth="1.5" fill="none"/>
                                        </svg>
                                    </div>
                                    <div className="ebs__vaultData">
                                        <span className="ebs__vaultValue">{currentSlide.stats.homes}</span>
                                        <span className="ebs__vaultLabel">Homes Powered</span>
                                    </div>
                                    <div className={`ebs__vaultGlow ${activeMetric === 'homes' ? 'ebs__vaultGlow--active' : ''}`}></div>
                                </div>

                                <div 
                                    className="ebs__vaultItem"
                                    onMouseEnter={() => setActiveMetric('co2')}
                                    onMouseLeave={() => setActiveMetric(null)}
                                >
                                    <div className="ebs__vaultIcon">
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d="M12 3v1M12 20v1M4 12H3M21 12h-1M6.5 6.5l-.7-.7M17.5 17.5l.7.7M6.5 17.5l-.7.7M17.5 6.5l.7-.7" stroke="url(#ebsGradient3)" strokeWidth="1.5"/>
                                            <circle cx="12" cy="12" r="4" stroke="url(#ebsGradient3)" strokeWidth="1.5" fill="none"/>
                                        </svg>
                                    </div>
                                    <div className="ebs__vaultData">
                                        <span className="ebs__vaultValue">{currentSlide.stats.co2}</span>
                                        <span className="ebs__vaultLabel">CO₂ Saved</span>
                                    </div>
                                    <div className={`ebs__vaultGlow ${activeMetric === 'co2' ? 'ebs__vaultGlow--active' : ''}`}></div>
                                </div>

                                <div 
                                    className="ebs__vaultItem"
                                    onMouseEnter={() => setActiveMetric('efficiency')}
                                    onMouseLeave={() => setActiveMetric(null)}
                                >
                                    <div className="ebs__vaultIcon">
                                        <svg width="28" height="28" viewBox="0 0 24 24">
                                            <path d="M12 6v4l2 2-2 2v4" stroke="url(#ebsGradient4)" strokeWidth="1.5" fill="none"/>
                                            <circle cx="12" cy="12" r="8" stroke="url(#ebsGradient4)" strokeWidth="1.5" fill="none"/>
                                        </svg>
                                    </div>
                                    <div className="ebs__vaultData">
                                        <span className="ebs__vaultValue">{currentSlide.stats.efficiency}</span>
                                        <span className="ebs__vaultLabel">System Efficiency</span>
                                    </div>
                                    <div className={`ebs__vaultGlow ${activeMetric === 'efficiency' ? 'ebs__vaultGlow--active' : ''}`}></div>
                                </div>
                            </div>
                            <div className="ebs__vaultFooter">
                                <span className="ebs__vaultUpdate">Updated in real-time</span>
                            </div>
                        </div>

                        {/* Achievement Timeline */}
                        <div className="ebs__timeline">
                            <div className="ebs__timelineTrack">
                                <div className="ebs__milestone">
                                    <span className="ebs__milestoneYear">2022</span>
                                    <span className="ebs__milestoneDesc">500th Installation</span>
                                </div>
                                <div className="ebs__milestone">
                                    <span className="ebs__milestoneYear">2023</span>
                                    <span className="ebs__milestoneDesc">1MW Capacity</span>
                                </div>
                                <div className="ebs__milestone ebs__milestone--current">
                                    <span className="ebs__milestoneYear">2024</span>
                                    <span className="ebs__milestoneDesc">2MW+ Capacity</span>
                                </div>
                            </div>
                        </div>

                        {/* Service Excellence Badge */}
                        <div className="ebs__excellence">
                            <div className="ebs__excellenceBadge">
                                <svg width="32" height="32" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v8c0 5 10 7 10 7s10-2 10-7V7l-10-5z" stroke="url(#ebsGradient5)" strokeWidth="1.5" fill="none"/>
                                    <path d="M8 12l3 3 6-6" stroke="url(#ebsGradient5)" strokeWidth="2"/>
                                </svg>
                                <div className="ebs__excellenceText">
                                    <strong>AP Innovation Award</strong>
                                    <span>Clean Energy Excellence 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Certified Partner Strip */}
                        <div className="ebs__certified">
                            <span className="ebs__certifiedBadge">● NEDCAP EMPANELED</span>
                            <span className="ebs__certifiedBadge">● MNRE APPROVED</span>
                            <span className="ebs__certifiedBadge">● ISO 45001:2018</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Unique Gradients */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <linearGradient id="ebsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="1">
                        <animate attributeName="stop-color" values="#3b82f6;#60a5fa;#3b82f6" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1">
                        <animate attributeName="stop-color" values="#8b5cf6;#a78bfa;#8b5cf6" dur="4s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
                <linearGradient id="ebsGradient2" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="1">
                        <animate attributeName="stop-color" values="#f59e0b;#fbbf24;#f59e0b" dur="5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#f97316" stopOpacity="1">
                        <animate attributeName="stop-color" values="#f97316;#fb923c;#f97316" dur="5s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
                <linearGradient id="ebsGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="1">
                        <animate attributeName="stop-color" values="#10b981;#34d399;#10b981" dur="3.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#059669" stopOpacity="1">
                        <animate attributeName="stop-color" values="#059669;#10b981;#059669" dur="3.5s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
                <linearGradient id="ebsGradient4" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1">
                        <animate attributeName="stop-color" values="#8b5cf6;#a78bfa;#8b5cf6" dur="4.5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="1">
                        <animate attributeName="stop-color" values="#ec4899;#f472b6;#ec4899" dur="4.5s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
                <linearGradient id="ebsGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="1">
                        <animate attributeName="stop-color" values="#f59e0b;#f97316;#f59e0b" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#f97316" stopOpacity="1">
                        <animate attributeName="stop-color" values="#f97316;#f59e0b;#f97316" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="1">
                        <animate attributeName="stop-color" values="#fbbf24;#f59e0b;#fbbf24" dur="3s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
            </svg>

            <style jsx>{`
                /* ===== UNIQUE CLASS NAMES - EASTERNBAY SOLAR ===== */
                /* Prefix: ebs__ (EasternBay Solar) - 100% Unique */

                .ebs__banner {
                    position: relative;
                    width: 100%;
                    height: 750px;
                    overflow: hidden;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    background: #0a0a0a;
                    margin-top:130px;
                }

                .ebs__wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                /* Background Elements */
                .ebs__background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .ebs__bgImage {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    filter: brightness(0.7);
                }

                .ebs__overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(110deg, #0f172a 0%, #1e293b 45%, #0f172a 100%);
                    opacity: 0.92;
                }

                .ebs__orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.25;
                    animation: ebsFloat 20s infinite alternate;
                }

                .ebs__orb--1 {
                    width: 500px;
                    height: 500px;
                    top: -100px;
                    right: -100px;
                    background: radial-gradient(circle, #3b82f6 0%, #1e3a8a 70%);
                    animation-delay: -5s;
                }

                .ebs__orb--2 {
                    width: 400px;
                    height: 400px;
                    bottom: -100px;
                    right: 50px;
                    background: radial-gradient(circle, #8b5cf6 0%, #5b21b6 70%);
                    animation-delay: -10s;
                }

                .ebs__orb--3 {
                    width: 300px;
                    height: 300px;
                    top: 30%;
                    right: 30%;
                    background: radial-gradient(circle, #f59e0b 0%, #b45309 70%);
                    animation-delay: -15s;
                }

                /* Main Grid Layout */
                .ebs__grid {
                    position: relative;
                    z-index: 10;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 60px;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                /* ===== LEFT SECTION ===== */
                .ebs__left {
                    animation: ebsSlideUp 0.8s ease-out;
                    color: white;
                }

                .ebs__badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 20px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 60px;
                    margin-bottom: 32px;
                    backdrop-filter: blur(10px);
                }

                .ebs__badgeDot {
                    width: 8px;
                    height: 8px;
                    background: #3b82f6;
                    border-radius: 50%;
                    box-shadow: 0 0 20px #3b82f6;
                    animation: ebsPulse 2s infinite;
                }

                .ebs__badgeText {
                    font-size: 13px;
                    letter-spacing: 2px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.9);
                }

                .ebs__titleGroup {
                    margin-bottom: 20px;
                }

                .ebs__mainTitle {
                    font-size: 58px;
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 16px;
                    letter-spacing: -1px;
                }

                .ebs__gradientText {
                    background: linear-gradient(135deg, #fff, #e2e8f0, #fff);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: ebsGradientFlow 4s linear infinite;
                    display: inline-block;
                }

                .ebs__accentLine {
                    width: 120px;
                    height: 4px;
                    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #f59e0b, #3b82f6);
                    background-size: 300% 100%;
                    animation: ebsGradientShift 6s linear infinite;
                    border-radius: 4px;
                }

                .ebs__subTitle {
                    font-size: 30px;
                    font-weight: 600;
                    margin-bottom: 16px;
                    color: rgba(255, 255, 255, 0.95);
                    line-height: 1.3;
                }

                .ebs__description {
                    font-size: 18px;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 24px;
                    max-width: 540px;
                }

                .ebs__location {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 22px;
                    background: rgba(59, 130, 246, 0.05);
                    border-radius: 40px;
                    margin-bottom: 32px;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 500;
                    font-size: 15px;
                    transition: all 0.3s ease;
                }

                .ebs__location:hover {
                    background: rgba(59, 130, 246, 0.12);
                    border-color: #3b82f6;
                    transform: translateX(8px);
                }

                .ebs__locationIcon {
                    color: #3b82f6;
                    animation: ebsBounce 2s infinite;
                }

                .ebs__ctaGroup {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 40px;
                }

                .ebs__btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    padding: 16px 36px;
                    border-radius: 14px;
                    font-weight: 600;
                    font-size: 16px;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    text-decoration: none;
                    position: relative;
                    overflow: hidden;
                }

                .ebs__btn--primary {
                    background: linear-gradient(145deg, #3b82f6, #2563eb);
                    color: white;
                    box-shadow: 0 10px 25px -8px #3b82f6;
                    border: none;
                }

                .ebs__btn--primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 35px -8px #3b82f6;
                }

                .ebs__btn--primary::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -60%;
                    width: 200%;
                    height: 200%;
                    background: rgba(255, 255, 255, 0.1);
                    transform: rotate(45deg);
                    transition: all 0.6s;
                }

                .ebs__btn--primary:hover::after {
                    left: 100%;
                }

                .ebs__btn--secondary {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    color: white;
                    backdrop-filter: blur(10px);
                }

                .ebs__btn--secondary:hover {
                    border-color: #3b82f6;
                    background: rgba(59, 130, 246, 0.1);
                    transform: translateY(-4px);
                }

                .ebs__trustPillars {
                    display: flex;
                    gap: 32px;
                }

                .ebs__pillar {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 14px;
                    font-weight: 500;
                }

                /* ===== RIGHT SECTION - COMPLETELY UNIQUE DESIGN ===== */
                .ebs__right {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    animation: ebsSlideRight 0.8s ease-out;
                }

                /* Metric Vault - Premium Card Design */
                .ebs__metricVault {
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 32px;
                    padding: 28px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.5);
                }

                .ebs__metricVault::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), #3b82f6, rgba(59, 130, 246, 0.3), transparent);
                }

                .ebs__vaultHeader {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 28px;
                }

                .ebs__vaultTag {
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 3px;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                }

                .ebs__vaultPulse {
                    width: 10px;
                    height: 10px;
                    background: #10b981;
                    border-radius: 50%;
                    box-shadow: 0 0 15px #10b981;
                    animation: ebsPulse 1.5s infinite;
                }

                .ebs__vaultGrid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .ebs__vaultItem {
                    background: rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.03);
                    border-radius: 20px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s ease;
                    cursor: default;
                }

                .ebs__vaultItem:hover {
                    border-color: rgba(59, 130, 246, 0.3);
                    background: rgba(15, 23, 42, 0.8);
                    transform: translateY(-4px);
                }

                .ebs__vaultIcon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 16px;
                    position: relative;
                    z-index: 2;
                }

                .ebs__vaultData {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .ebs__vaultValue {
                    font-size: 26px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #fff, #e2e8f0);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    line-height: 1;
                }

                .ebs__vaultLabel {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.55);
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                .ebs__vaultGlow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .ebs__vaultGlow--active {
                    opacity: 1;
                }

                .ebs__vaultFooter {
                    margin-top: 16px;
                    padding-top: 16px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    justify-content: flex-end;
                }

                .ebs__vaultUpdate {
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.35);
                    letter-spacing: 1px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .ebs__vaultUpdate::before {
                    content: '●';
                    color: #10b981;
                    font-size: 14px;
                    animation: ebsPulse 2s infinite;
                }

                /* Timeline */
                .ebs__timeline {
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 20px 24px;
                    border: 1px solid rgba(255, 255, 255, 0.03);
                }

                .ebs__timelineTrack {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                }

                .ebs__timelineTrack::before {
                    content: '';
                    position: absolute;
                    top: 25px;
                    left: 15%;
                    right: 15%;
                    height: 2px;
                    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #f59e0b);
                    opacity: 0.3;
                }

                .ebs__milestone {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    position: relative;
                    z-index: 2;
                }

                .ebs__milestoneYear {
                    font-size: 16px;
                    font-weight: 700;
                    color: white;
                    background: rgba(59, 130, 246, 0.2);
                    padding: 6px 14px;
                    border-radius: 20px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                    display: inline-block;
                    width: fit-content;
                }

                .ebs__milestone--current .ebs__milestoneYear {
                    background: linear-gradient(145deg, #3b82f6, #2563eb);
                    border: none;
                    box-shadow: 0 0 20px #3b82f6;
                }

                .ebs__milestoneDesc {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.7);
                }

                /* Excellence Badge */
                .ebs__excellence {
                    background: linear-gradient(145deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.02));
                    border: 1px solid rgba(245, 158, 11, 0.2);
                    border-radius: 16px;
                    padding: 16px 20px;
                }

                .ebs__excellenceBadge {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .ebs__excellenceText {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .ebs__excellenceText strong {
                    color: white;
                    font-size: 15px;
                }

                .ebs__excellenceText span {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 13px;
                }

                /* Certified Strip */
                .ebs__certified {
                    display: flex;
                    gap: 16px;
                    padding: 12px 0;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .ebs__certifiedBadge {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.6);
                    letter-spacing: 1px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .ebs__certifiedBadge:hover {
                    color: #3b82f6;
                    transform: translateY(-2px);
                }

                /* Animations */
                @keyframes ebsSlideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes ebsSlideRight {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes ebsGradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes ebsGradientShift {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }

                @keyframes ebsFloat {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(40px, 40px) scale(1.1); }
                }

                @keyframes ebsPulse {
                    0% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                    100% { opacity: 0.8; transform: scale(1); }
                }

                @keyframes ebsBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .ebs__grid {
                        grid-template-columns: 1fr;
                        padding: 40px;
                        gap: 40px;
                    }

                    .ebs__banner {
                        height: auto;
                        min-height: 1200px;
                    }

                    .ebs__mainTitle {
                        font-size: 48px;
                    }

                    .ebs__right {
                        max-width: 600px;
                        margin: 0 auto;
                    }
                }

                @media (max-width: 768px) {
                    .ebs__grid {
                        padding: 30px 20px;
                    }

                    .ebs__mainTitle {
                        font-size: 38px;
                    }

                    .ebs__subTitle {
                        font-size: 24px;
                    }

                    .ebs__ctaGroup {
                        flex-direction: column;
                    }

                    .ebs__vaultGrid {
                        grid-template-columns: 1fr;
                    }

                    .ebs__certified {
                        flex-direction: column;
                        gap: 8px;
                    }

                    .ebs__timelineTrack {
                        flex-direction: column;
                        gap: 20px;
                        align-items: flex-start;
                    }

                    .ebs__timelineTrack::before {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Banner;