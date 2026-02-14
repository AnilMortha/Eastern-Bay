import React, { useState } from "react";

const SolarCalculator = () => {
  const [formData, setFormData] = useState({
    electricityBill: "",
    roofArea: "",
    location: "andhra",
    applianceUsage: "medium",
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedState, setSelectedState] = useState("andhra");

  // Solar calculation parameters
  const solarParams = {
    andhra: { 
      solarHours: 5.2, 
      costPerKw: 45000,
      subsidy: 14500,
      state: "Andhra Pradesh",
      solarPotential: "Excellent",
      avgSunshine: "5.2 hrs/day"
    },
    telangana: { 
      solarHours: 5.1, 
      costPerKw: 46000,
      subsidy: 14000,
      state: "Telangana",
      solarPotential: "Very Good",
      avgSunshine: "5.1 hrs/day"
    },
    tamilnadu: { 
      solarHours: 4.9, 
      costPerKw: 47000,
      subsidy: 13500,
      state: "Tamil Nadu",
      solarPotential: "Good",
      avgSunshine: "4.9 hrs/day"
    },
    karnataka: { 
      solarHours: 5.0, 
      costPerKw: 46000,
      subsidy: 14000,
      state: "Karnataka",
      solarPotential: "Very Good",
      avgSunshine: "5.0 hrs/day"
    },
  };

  const applianceUsageLevels = {
    low: { 
      factor: 0.8, 
      description: "Basic lighting, fans, TV",
      icon: "low-usage"
    },
    medium: { 
      factor: 1.0, 
      description: "AC, refrigerator, washing machine",
      icon: "medium-usage"
    },
    high: { 
      factor: 1.3, 
      description: "Multiple ACs, geyser, full home",
      icon: "high-usage"
    },
  };

  const calculateSolarRequirements = () => {
    const billAmount = parseFloat(formData.electricityBill);
    const roofArea = parseFloat(formData.roofArea);
    const locationData = solarParams[formData.location];
    const usageData = applianceUsageLevels[formData.applianceUsage];

    if (!billAmount || billAmount < 500) {
      alert("Please enter a valid electricity bill amount (minimum ₹500)");
      return;
    }

    // Calculate required system size
    const monthlyUnits = billAmount / 8;
    const dailyUnits = monthlyUnits / 30;
    const systemSizeKw =
      (dailyUnits / locationData.solarHours) * usageData.factor;

    // Adjust based on roof area if provided
    let finalSystemSize = systemSizeKw;
    if (roofArea) {
      const maxSystemFromRoof = roofArea * 0.1;
      finalSystemSize = Math.min(systemSizeKw, maxSystemFromRoof);
    }

    // Round to nearest standard system size
    const standardSizes = [1, 2, 3, 4, 5, 7.5, 10];
    const recommendedSize =
      standardSizes.find((size) => size >= finalSystemSize) ||
      standardSizes[standardSizes.length - 1];

    // Calculate costs and savings
    const systemCost = recommendedSize * locationData.costPerKw;
    const govtSubsidy = recommendedSize >= 3 ? recommendedSize * locationData.subsidy : 0;
    const finalCost = systemCost - govtSubsidy;

    const monthlySavings = billAmount;
    const yearlySavings = monthlySavings * 12;
    const paybackPeriod = finalCost / yearlySavings;

    // Environmental impact
    const yearlyCO2Reduction = recommendedSize * 1.5;
    const treesEquivalent = yearlyCO2Reduction * 50;
    const fuelSaved = recommendedSize * 120;

    setResults({
      systemSize: recommendedSize,
      systemCost,
      govtSubsidy,
      finalCost,
      monthlySavings,
      yearlySavings,
      paybackPeriod: paybackPeriod.toFixed(1),
      yearlyCO2Reduction: yearlyCO2Reduction.toFixed(1),
      treesEquivalent: Math.round(treesEquivalent),
      requiredRoofArea: recommendedSize * 10,
      batteryBackup: recommendedSize >= 3 ? "Recommended" : "Optional",
      fuelSaved: fuelSaved.toFixed(0),
      stateData: locationData
    });

    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "location") {
      setSelectedState(value);
    }
  };

  const resetCalculator = () => {
    setFormData({
      electricityBill: "",
      roofArea: "",
      location: "andhra",
      applianceUsage: "medium",
    });
    setSelectedState("andhra");
    setShowResults(false);
    setResults(null);
  };

  // SVG Icons
  const SunIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="6" fill="#FF9500" />
      <g stroke="#FF9500" strokeWidth="1.5">
        <path d="M12 2V4" strokeLinecap="round" />
        <path d="M12 20V22" strokeLinecap="round" />
        <path d="M4 12H2" strokeLinecap="round" />
        <path d="M22 12H20" strokeLinecap="round" />
        <path d="M19.07 4.93L17.66 6.34" strokeLinecap="round" />
        <path d="M6.34 17.66L4.93 19.07" strokeLinecap="round" />
        <path d="M19.07 19.07L17.66 17.66" strokeLinecap="round" />
        <path d="M6.34 6.34L4.93 4.93" strokeLinecap="round" />
      </g>
    </svg>
  );

  const BillIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="#0f766e" strokeWidth="1.5" />
      <path d="M6 8H18" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 12H18" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 16H14" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  const RoofIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 10L12 3L21 10L18 10L18 19H6L6 10L3 10Z" stroke="#0f766e" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="9" y="13" width="6" height="6" stroke="#0f766e" strokeWidth="1.5" />
    </svg>
  );

  const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#0f766e" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="3" stroke="#0f766e" strokeWidth="1.5" />
    </svg>
  );

  const ApplianceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="#0f766e" strokeWidth="1.5" />
      <circle cx="12" cy="16" r="2" stroke="#0f766e" strokeWidth="1.5" />
      <rect x="8" y="6" width="8" height="4" rx="1" stroke="#0f766e" strokeWidth="1.5" />
    </svg>
  );

  const SystemIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="#0f766e" strokeWidth="1.5" />
      <rect x="6" y="10" width="3" height="4" fill="#0f766e" opacity="0.3" />
      <rect x="10" y="8" width="3" height="8" fill="#0f766e" opacity="0.5" />
      <rect x="14" y="6" width="3" height="12" fill="#0f766e" opacity="0.7" />
    </svg>
  );

  const SavingsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 6V8M12 16V18M8 10H16M7 12H17" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" stroke="#0ea5e9" strokeWidth="1.5" />
    </svg>
  );

  const CO2Icon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="#166534" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 13L12 18L21 13" stroke="#166534" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 18L12 23L21 18" stroke="#166534" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );

  const TreeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L8 8H11L9 14H13L11 20L12 22L13 20L15 14H11L13 8H16L12 2Z" fill="#166534" opacity="0.8" />
    </svg>
  );

  return (
    <div className="ebx__solar-calculator">
      {/* Animated Background */}
      <div className="ebx__calculator-bg">
        <div className="ebx__bg-particles"></div>
        <div className="ebx__bg-solar-panels"></div>
        <div className="ebx__bg-sun"></div>
      </div>

      <div className="ebx__calculator-container">
        {/* Header Section */}
        <div className="ebx__calculator-header">
          <div className="ebx__header-icon">
            <SunIcon />
          </div>
          <h1 className="ebx__header-title">
            <span>Solar Energy</span> Calculator
          </h1>
          <p className="ebx__header-subtitle">
            Calculate your perfect solar solution for {solarParams[selectedState].state}
          </p>
        </div>

        <div className="ebx__calculator-grid">
          {/* Calculator Form */}
          <div className="ebx__calculator-form">
            <div className="ebx__form-header">
              <h2>Enter Your Details</h2>
              <p>Get accurate solar system recommendation</p>
            </div>

            <div className="ebx__form-content">
              {/* Electricity Bill */}
              <div className="ebx__form-group">
                <label className="ebx__form-label">
                  <BillIcon />
                  <span>Monthly Electricity Bill (₹)</span>
                </label>
                <input
                  type="number"
                  name="electricityBill"
                  value={formData.electricityBill}
                  onChange={handleInputChange}
                  placeholder="e.g., 5000"
                  className="ebx__form-input"
                />
                <div className="ebx__form-hint">
                  Enter your average monthly bill amount
                </div>
              </div>

              {/* Roof Area */}
              <div className="ebx__form-group">
                <label className="ebx__form-label">
                  <RoofIcon />
                  <span>Available Roof Area (sq meters)</span>
                  <span className="ebx__label-optional">Optional</span>
                </label>
                <input
                  type="number"
                  name="roofArea"
                  value={formData.roofArea}
                  onChange={handleInputChange}
                  placeholder="e.g., 50"
                  className="ebx__form-input"
                />
                <div className="ebx__form-hint">
                  10 sq meters required per kW system
                </div>
              </div>

              {/* Location Selection with Visual */}
              <div className="ebx__form-group">
                <label className="ebx__form-label">
                  <LocationIcon />
                  <span>Select Location</span>
                </label>
                <div className="ebx__location-selector">
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="ebx__form-select"
                  >
                    <option value="andhra">Andhra Pradesh</option>
                    <option value="telangana">Telangana</option>
                    <option value="tamilnadu">Tamil Nadu</option>
                    <option value="karnataka">Karnataka</option>
                  </select>
                  <div className="ebx__location-info">
                    <div className="ebx__info-item">
                      <span>Solar Hours:</span>
                      <strong>{solarParams[selectedState].solarHours} hrs/day</strong>
                    </div>
                    <div className="ebx__info-item">
                      <span>Solar Potential:</span>
                      <strong>{solarParams[selectedState].solarPotential}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appliance Usage */}
              <div className="ebx__form-group">
                <label className="ebx__form-label">
                  <ApplianceIcon />
                  <span>Appliance Usage Level</span>
                </label>
                <div className="ebx__usage-selector">
                  {Object.keys(applianceUsageLevels).map((level) => (
                    <label key={level} className={`ebx__usage-option ${formData.applianceUsage === level ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="applianceUsage"
                        value={level}
                        checked={formData.applianceUsage === level}
                        onChange={handleInputChange}
                      />
                      <span className="ebx__usage-name">
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </span>
                      <span className="ebx__usage-desc">
                        {applianceUsageLevels[level].description}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="ebx__form-actions">
                <button
                  onClick={calculateSolarRequirements}
                  disabled={!formData.electricityBill}
                  className="ebx__btn ebx__btn-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                    <path d="M12 8V12L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>Calculate Solar Requirements</span>
                </button>
                
                <button
                  onClick={resetCalculator}
                  className="ebx__btn ebx__btn-secondary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 6V4H16V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="6" y="10" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="ebx__calculator-results">
            {showResults && results ? (
              <div className="ebx__results-card">
                <div className="ebx__results-header">
                  <SystemIcon />
                  <h2>Your Solar Solution</h2>
                  <p>Based on your inputs for {results.stateData.state}</p>
                </div>

                {/* System Size Highlight */}
                <div className="ebx__result-highlight">
                  <div className="ebx__highlight-label">Recommended System</div>
                  <div className="ebx__highlight-value">{results.systemSize} kW</div>
                  <div className="ebx__highlight-desc">
                    <SunIcon />
                    <span>{results.stateData.solarHours} solar hours available</span>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="ebx__result-section">
                  <h3>Investment Details</h3>
                  <div className="ebx__cost-breakdown">
                    <div className="ebx__cost-item">
                      <span>System Cost</span>
                      <strong>₹{results.systemCost.toLocaleString()}</strong>
                    </div>
                    <div className="ebx__cost-item ebx__cost-subsidy">
                      <span>Government Subsidy</span>
                      <strong>- ₹{results.govtSubsidy.toLocaleString()}</strong>
                    </div>
                    <div className="ebx__cost-item ebx__cost-total">
                      <span>Final Investment</span>
                      <strong>₹{results.finalCost.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                {/* Savings & Payback */}
                <div className="ebx__result-section">
                  <h3>Savings & Payback</h3>
                  <div className="ebx__savings-grid">
                    <div className="ebx__savings-card">
                      <SavingsIcon />
                      <div className="ebx__savings-value">₹{results.yearlySavings.toLocaleString()}</div>
                      <div className="ebx__savings-label">Yearly Savings</div>
                    </div>
                    <div className="ebx__savings-card">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#0ea5e9" strokeWidth="1.5" />
                        <path d="M12 6V12L16 14" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <div className="ebx__savings-value">{results.paybackPeriod} years</div>
                      <div className="ebx__savings-label">Payback Period</div>
                    </div>
                  </div>
                </div>

                {/* Environmental Impact */}
                <div className="ebx__result-section">
                  <h3>Environmental Impact</h3>
                  <div className="ebx__impact-grid">
                    <div className="ebx__impact-item">
                      <CO2Icon />
                      <div>
                        <strong>{results.yearlyCO2Reduction} tons</strong>
                        <span>CO₂ Reduction/year</span>
                      </div>
                    </div>
                    <div className="ebx__impact-item">
                      <TreeIcon />
                      <div>
                        <strong>{results.treesEquivalent}</strong>
                        <span>Equivalent Trees</span>
                      </div>
                    </div>
                    <div className="ebx__impact-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="8" width="16" height="12" rx="1" stroke="#166534" strokeWidth="1.5" />
                        <path d="M8 6V4H16V6" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <div>
                        <strong>{results.fuelSaved} L</strong>
                        <span>Diesel Saved/year</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="ebx__result-additional">
                  <h4>Additional Recommendations</h4>
                  <ul>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Required roof area: {results.requiredRoofArea} sq meters
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Battery backup: {results.batteryBackup}
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      5-year comprehensive warranty
                    </li>
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Free site visit & consultation
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="ebx__btn ebx__btn-consultation">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="white" strokeWidth="1.5" />
                    <path d="M7 9H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 13H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 17H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>Request Free Consultation</span>
                </button>
              </div>
            ) : (
              <div className="ebx__results-placeholder">
                <div className="ebx__placeholder-icon">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#e2e8f0" strokeWidth="1.5" />
                    <path d="M12 8V12L15 15" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="9" y="5" width="6" height="2" fill="#e2e8f0" />
                    <rect x="5" y="9" width="2" height="6" fill="#e2e8f0" />
                    <rect x="17" y="9" width="2" height="6" fill="#e2e8f0" />
                    <rect x="9" y="17" width="6" height="2" fill="#e2e8f0" />
                  </svg>
                </div>
                <h3>Solar Calculator</h3>
                <p>Enter your electricity bill amount to get instant solar system recommendation for {solarParams[selectedState].state}</p>
                <div className="ebx__placeholder-features">
                  <div className="ebx__feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>System size calculation</span>
                  </div>
                  <div className="ebx__feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>Cost & subsidy estimate</span>
                  </div>
                  <div className="ebx__feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>Savings & payback period</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ebx__solar-calculator {
          position: relative;
          min-height: 100vh;
          padding: 160px 20px;
          background: linear-gradient(145deg, #F8FAFC, #F1F5F9);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow: hidden;
        }

        /* Animated Background */
        .ebx__calculator-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .ebx__bg-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 10px 30px, #FF9500, transparent),
            radial-gradient(2px 2px at 30px 70px, #0f766e, transparent),
            radial-gradient(2px 2px at 70px 120px, #64748B, transparent);
          background-size: 100px 100px;
          opacity: 0.1;
          animation: floatParticles 20s linear infinite;
        }

        .ebx__bg-solar-panels {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(transparent, rgba(15,118,110,0.02));
          mask-image: url('data:image/svg+xml;utf8,<svg width="60" height="30" viewBox="0 0 60 30"><rect width="12" height="12" x="0" y="0" fill="black"/><rect width="12" height="12" x="16" y="0" fill="black"/><rect width="12" height="12" x="32" y="0" fill="black"/><rect width="12" height="12" x="48" y="0" fill="black"/><rect width="12" height="12" x="0" y="16" fill="black"/><rect width="12" height="12" x="16" y="16" fill="black"/><rect width="12" height="12" x="32" y="16" fill="black"/><rect width="12" height="12" x="48" y="16" fill="black"/></svg>');
          mask-size: 60px 30px;
          opacity: 0.05;
        }

        .ebx__bg-sun {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,149,0,0.05) 0%, transparent 70%);
          animation: pulseSun 4s ease-in-out infinite;
        }

        @keyframes floatParticles {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(-30px) translateX(20px); }
        }

        @keyframes pulseSun {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }

        .ebx__calculator-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Header Styles */
        .ebx__calculator-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .ebx__header-icon {
          display: inline-block;
          margin-bottom: 20px;
          animation: rotateSun 20s linear infinite;
        }

        @keyframes rotateSun {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .ebx__header-title {
          font-size: 42px;
          font-weight: 700;
          color: #1E3A5F;
          margin-bottom: 15px;
        }

        .ebx__header-title span {
          color: #FF9500;
          position: relative;
        }

        .ebx__header-title span::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 10px;
          background: rgba(255,149,0,0.2);
          z-index: -1;
        }

        .ebx__header-subtitle {
          font-size: 18px;
          color: #64748B;
          margin: 0;
        }

        /* Main Grid */
        .ebx__calculator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        /* Form Styles */
        .ebx__calculator-form {
          background: white;
          border-radius: 32px;
          padding: 35px;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .ebx__form-header {
          margin-bottom: 30px;
        }

        .ebx__form-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1E3A5F;
          margin-bottom: 8px;
        }

        .ebx__form-header p {
          color: #64748B;
          margin: 0;
        }

        .ebx__form-content {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .ebx__form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ebx__form-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: #1E3A5F;
          font-size: 15px;
        }

        .ebx__label-optional {
          font-size: 12px;
          font-weight: 400;
          color: #94A3B8;
          margin-left: 8px;
        }

        .ebx__form-input {
          padding: 14px 16px;
          background: #F8FAFC;
          border: 1.5px solid rgba(0,0,0,0.05);
          border-radius: 16px;
          font-size: 15px;
          color: #1E3A5F;
          transition: all 0.3s ease;
        }

        .ebx__form-input:focus {
          outline: none;
          border-color: #0f766e;
          background: white;
          box-shadow: 0 0 0 4px rgba(15,118,110,0.08);
        }

        .ebx__form-hint {
          font-size: 12px;
          color: #94A3B8;
        }

        .ebx__location-selector {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .ebx__form-select {
          padding: 14px 16px;
          background: #F8FAFC;
          border: 1.5px solid rgba(0,0,0,0.05);
          border-radius: 16px;
          font-size: 15px;
          color: #1E3A5F;
          cursor: pointer;
        }

        .ebx__location-info {
          display: flex;
          gap: 20px;
          padding: 12px 16px;
          background: rgba(15,118,110,0.04);
          border-radius: 12px;
        }

        .ebx__info-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
        }

        .ebx__info-item span {
          color: #64748B;
        }

        .ebx__info-item strong {
          color: #0f766e;
        }

        .ebx__usage-selector {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ebx__usage-option {
          display: flex;
          align-items: center;
          padding: 16px;
          background: #F8FAFC;
          border: 1.5px solid rgba(0,0,0,0.05);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ebx__usage-option.active {
          border-color: #0f766e;
          background: rgba(15,118,110,0.04);
        }

        .ebx__usage-option input {
          margin-right: 12px;
          accent-color: #0f766e;
        }

        .ebx__usage-name {
          font-weight: 600;
          color: #1E3A5F;
          min-width: 60px;
        }

        .ebx__usage-desc {
          font-size: 13px;
          color: #64748B;
        }

        .ebx__form-actions {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .ebx__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border: none;
          border-radius: 60px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .ebx__btn-primary {
          flex: 1;
          background: linear-gradient(145deg, #0f766e, #0d9488);
          color: white;
        }

        .ebx__btn-primary:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -10px rgba(15,118,110,0.4);
        }

        .ebx__btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .ebx__btn-secondary {
          background: transparent;
          border: 1.5px solid rgba(0,0,0,0.1);
          color: #64748B;
        }

        .ebx__btn-secondary:hover {
          background: rgba(0,0,0,0.02);
          border-color: #0f766e;
          color: #0f766e;
        }

        /* Results Styles */
        .ebx__calculator-results {
          position: relative;
        }

        .ebx__results-card {
          background: white;
          border-radius: 32px;
          padding: 35px;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .ebx__results-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .ebx__results-header h2 {
          font-size: 24px;
          color: #1E3A5F;
          margin: 15px 0 5px;
        }

        .ebx__results-header p {
          color: #64748B;
          margin: 0;
        }

        .ebx__result-highlight {
          background: linear-gradient(145deg, #f0fdfa, #ccfbf1);
          border: 2px solid #99f6e4;
          border-radius: 24px;
          padding: 25px;
          text-align: center;
          margin-bottom: 30px;
        }

        .ebx__highlight-label {
          font-size: 14px;
          font-weight: 600;
          color: #0f766e;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .ebx__highlight-value {
          font-size: 48px;
          font-weight: 800;
          color: #0f766e;
          line-height: 1;
          margin-bottom: 15px;
        }

        .ebx__highlight-desc {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #64748B;
          font-size: 14px;
        }

        .ebx__result-section {
          margin-bottom: 30px;
        }

        .ebx__result-section h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1E3A5F;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ebx__cost-breakdown {
          background: #F8FAFC;
          border-radius: 20px;
          padding: 20px;
        }

        .ebx__cost-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
        }

        .ebx__cost-item:not(:last-child) {
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .ebx__cost-subsidy {
          color: #059669;
        }

        .ebx__cost-total {
          font-size: 18px;
          color: #0f766e;
          padding-top: 15px;
        }

        .ebx__savings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .ebx__savings-card {
          background: #f0f9ff;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
        }

        .ebx__savings-value {
          font-size: 24px;
          font-weight: 700;
          color: #0ea5e9;
          margin: 10px 0 5px;
        }

        .ebx__savings-label {
          font-size: 13px;
          color: #64748B;
        }

        .ebx__impact-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ebx__impact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f0fdf4;
          border-radius: 16px;
        }

        .ebx__impact-item div {
          display: flex;
          flex-direction: column;
        }

        .ebx__impact-item strong {
          font-size: 16px;
          color: #166534;
        }

        .ebx__impact-item span {
          font-size: 13px;
          color: #64748B;
        }

        .ebx__result-additional {
          background: #fffbeb;
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 25px;
        }

        .ebx__result-additional h4 {
          font-size: 16px;
          color: #92400e;
          margin-bottom: 15px;
        }

        .ebx__result-additional ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ebx__result-additional li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #92400e;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .ebx__btn-consultation {
          width: 100%;
          background: linear-gradient(145deg, #f59e0b, #d97706);
          color: white;
        }

        .ebx__btn-consultation:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -10px rgba(245,158,11,0.4);
        }

        /* Placeholder Styles */
        .ebx__results-placeholder {
          background: white;
          border-radius: 32px;
          padding: 50px 35px;
          text-align: center;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .ebx__placeholder-icon {
          margin-bottom: 30px;
          opacity: 0.5;
        }

        .ebx__results-placeholder h3 {
          font-size: 24px;
          color: #1E3A5F;
          margin-bottom: 15px;
        }

        .ebx__results-placeholder p {
          color: #64748B;
          max-width: 300px;
          margin: 0 auto 30px;
        }

        .ebx__placeholder-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
          text-align: left;
        }

        .ebx__feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #0f766e;
          font-size: 14px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .ebx__calculator-grid {
            grid-template-columns: 1fr;
          }

          .ebx__header-title {
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .ebx__solar-calculator {
            padding: 40px 16px;
          }

          .ebx__calculator-form,
          .ebx__results-card,
          .ebx__results-placeholder {
            padding: 25px;
          }

          .ebx__form-actions {
            flex-direction: column;
          }

          .ebx__location-info {
            flex-direction: column;
            gap: 8px;
          }

          .ebx__usage-option {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }

          .ebx__usage-name {
            min-width: auto;
          }

          .ebx__savings-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .ebx__header-title {
            font-size: 28px;
          }

          .ebx__calculator-form,
          .ebx__results-card,
          .ebx__results-placeholder {
            padding: 20px;
          }

          .ebx__highlight-value {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default SolarCalculator;