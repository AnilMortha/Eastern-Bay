import React, { useState, useEffect } from "react";

const SolarCalculator = () => {
  const [formData, setFormData] = useState({
    electricityBill: "",
    roofArea: "",
    location: "andhra",
    applianceUsage: "medium",
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Solar calculation parameters
  const solarParams = {
    andhra: { solarHours: 5.2, costPerKw: 45000 },
    telangana: { solarHours: 5.1, costPerKw: 46000 },
    tamilnadu: { solarHours: 4.9, costPerKw: 47000 },
    karnataka: { solarHours: 5.0, costPerKw: 46000 },
  };

  const applianceUsageLevels = {
    low: { factor: 0.8, description: "Basic lighting, fans, TV" },
    medium: { factor: 1.0, description: "AC, refrigerator, washing machine" },
    high: { factor: 1.3, description: "Multiple ACs, geyser, full home" },
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
    const monthlyUnits = billAmount / 8; // Approximate cost per unit
    const dailyUnits = monthlyUnits / 30;
    const systemSizeKw =
      (dailyUnits / locationData.solarHours) * usageData.factor;

    // Adjust based on roof area if provided
    let finalSystemSize = systemSizeKw;
    if (roofArea) {
      const maxSystemFromRoof = roofArea * 0.1; // 100W per sq meter
      finalSystemSize = Math.min(systemSizeKw, maxSystemFromRoof);
    }

    // Round to nearest standard system size
    const standardSizes = [1, 2, 3, 4, 5, 7.5, 10];
    const recommendedSize =
      standardSizes.find((size) => size >= finalSystemSize) ||
      standardSizes[standardSizes.length - 1];

    // Calculate costs and savings
    const systemCost = recommendedSize * locationData.costPerKw;
    const govtSubsidy = recommendedSize >= 3 ? recommendedSize * 14500 : 0;
    const finalCost = systemCost - govtSubsidy;

    const monthlySavings = billAmount;
    const yearlySavings = monthlySavings * 12;
    const paybackPeriod = finalCost / yearlySavings;

    // Environmental impact
    const yearlyCO2Reduction = recommendedSize * 1.5; // tons
    const treesEquivalent = yearlyCO2Reduction * 50;

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
      requiredRoofArea: recommendedSize * 10, // 10 sqm per kW
      batteryBackup: recommendedSize >= 3 ? "Recommended" : "Optional",
    });

    setShowResults(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetCalculator = () => {
    setFormData({
      electricityBill: "",
      roofArea: "",
      location: "andhra",
      applianceUsage: "medium",
    });
    setShowResults(false);
    setResults(null);
  };

  return (
    <div
    class="solar-bg-slider"
      style={{
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Calculator Form */}
        <div
          style={{
            flex: "1",
            minWidth: "400px",
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            border: "1px solid #e1f5fe",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                color: "#0f766e",
                margin: "0 0 10px 0",
                fontSize: "28px",
                fontWeight: "700",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#FFAC33"
                  d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"
                />
                <circle cx="18" cy="18" r="10" fill="#FFAC33" />
              </svg>
              &nbsp; Solar System Calculator
            </h1>
            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
                margin: 0,
              }}
            >
              Calculate your perfect solar solution in just 2 minutes
            </p>
          </div>

          {/* Electricity Bill Input */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              Monthly Electricity Bill (₹)
            </label>
            <input
              type="number"
              name="electricityBill"
              value={formData.electricityBill}
              onChange={handleInputChange}
              placeholder="e.g., 5000"
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#0d9488")}
              onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
            />
            <div
              style={{
                fontSize: "12px",
                color: "#64748b",
                marginTop: "5px",
              }}
            >
              Enter your average monthly electricity bill amount
            </div>
          </div>

          {/* Roof Area Input */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              Available Roof Area (sq meters) - Optional
            </label>
            <input
              type="number"
              name="roofArea"
              value={formData.roofArea}
              onChange={handleInputChange}
              placeholder="e.g., 50"
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
              }}
            />
            <div
              style={{
                fontSize: "12px",
                color: "#64748b",
                marginTop: "5px",
              }}
            >
              Approximately 10 sq meters required per kW
            </div>
          </div>

          {/* Location Selection */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              Location
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                background: "white",
                cursor: "pointer",
              }}
            >
              <option value="andhra">Andhra Pradesh</option>
              <option value="telangana">Telangana</option>
              <option value="tamilnadu">Tamil Nadu</option>
              <option value="karnataka">Karnataka</option>
            </select>
          </div>

          {/* Appliance Usage */}
          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#374151",
                fontSize: "15px",
              }}
            >
              Appliance Usage Level
            </label>
            <select
              name="applianceUsage"
              value={formData.applianceUsage}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "16px",
                background: "white",
                cursor: "pointer",
              }}
            >
              <option value="low">Low (Lights, Fans, TV)</option>
              <option value="medium">Medium (+ AC, Refrigerator)</option>
              <option value="high">High (Multiple ACs, Geyser)</option>
            </select>
            <div
              style={{
                fontSize: "12px",
                color: "#64748b",
                marginTop: "5px",
              }}
            >
              {applianceUsageLevels[formData.applianceUsage].description}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateSolarRequirements}
            disabled={!formData.electricityBill}
            style={{
              width: "100%",
              padding: "15px",
              background: !formData.electricityBill
                ? "#cbd5e1"
                : "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: !formData.electricityBill ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              marginBottom: "15px",
            }}
            onMouseEnter={(e) => {
              if (formData.electricityBill) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 5px 15px rgba(13, 148, 136, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (formData.electricityBill) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }
            }}
          >
            Calculate Solar Requirements
          </button>

          <button
            onClick={resetCalculator}
            style={{
              width: "100%",
              padding: "12px",
              background: "transparent",
              color: "#64748b",
              border: "2px solid #e2e8f0",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Reset Calculator
          </button>
        </div>

        {/* Results Section */}
        <div
          style={{
            flex: "1",
            minWidth: "400px",
            display: showResults ? "block" : "flex",
            alignItems: showResults ? "stretch" : "center",
            justifyContent: showResults ? "flex-start" : "center",
          }}
        >
          {showResults && results ? (
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                border: "1px solid #e1f5fe",
                height: "fit-content",
              }}
            >
              <h2
                style={{
                  color: "#0f766e",
                  textAlign: "center",
                  marginBottom: "25px",
                  fontSize: "24px",
                }}
              >
                Your Solar Solution
              </h2>

              {/* System Size */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                  marginBottom: "20px",
                  border: "2px solid #99f6e4",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#047857",
                    fontWeight: "600",
                  }}
                >
                  RECOMMENDED SYSTEM SIZE
                </div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "#0f766e",
                  }}
                >
                  {results.systemSize} kW
                </div>
                <div style={{ fontSize: "14px", color: "#64748b" }}>
                  Perfect for your energy needs
                </div>
              </div>

              {/* Cost Breakdown */}
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ color: "#374151", marginBottom: "15px" }}>
                  {" "}
                  Cost Breakdown
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>System Cost:</span>
                  <span style={{ fontWeight: "600" }}>
                    ₹{results.systemCost.toLocaleString()}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    color: "#059669",
                  }}
                >
                  <span>Govt Subsidy:</span>
                  <span style={{ fontWeight: "600" }}>
                    -₹{results.govtSubsidy.toLocaleString()}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    paddingTop: "8px",
                    borderTop: "2px solid #e2e8f0",
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "#0f766e",
                  }}
                >
                  <span>Final Investment:</span>
                  <span>₹{results.finalCost.toLocaleString()}</span>
                </div>
              </div>

              {/* Savings */}
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ color: "#374151", marginBottom: "15px" }}>
                  {" "}
                  Annual Savings
                </h3>
                <div
                  style={{
                    background: "#f0f9ff",
                    padding: "15px",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#0ea5e9",
                    }}
                  >
                    ₹{results.yearlySavings.toLocaleString()}
                  </div>
                  <div style={{ fontSize: "14px", color: "#64748b" }}>
                    Payback Period: {results.paybackPeriod} years
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ color: "#374151", marginBottom: "15px" }}>
                  {" "}
                  Environmental Impact
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "#f0fdf4",
                      padding: "12px",
                      borderRadius: "8px",
                      textAlign: "center",
                      border: "1px solid #bbf7d0",
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "#166534" }}>
                      CO₂ Reduction
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#166534",
                      }}
                    >
                      {results.yearlyCO2Reduction} tons/year
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#f0fdf4",
                      padding: "12px",
                      borderRadius: "8px",
                      textAlign: "center",
                      border: "1px solid #bbf7d0",
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "#166534" }}>
                      Equivalent Trees
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#166534",
                      }}
                    >
                      {results.treesEquivalent} trees
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div
                style={{
                  background: "#fffbeb",
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #fcd34d",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#92400e",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  Additional Recommendations
                </div>
                <div style={{ fontSize: "13px", color: "#92400e" }}>
                  • Required Roof Area: {results.requiredRoofArea} sq meters
                  <br />• Battery Backup: {results.batteryBackup}
                  <br />• Government subsidies available
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "15px",
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginTop: "20px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 5px 15px rgba(245, 158, 11, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Contact for Free Consultation
              </button>
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                color: "#64748b",
                padding: "40px",
              }}
            >
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                >
                  <title>Solar Calculator</title>
                  <rect
                    x="2"
                    y="3"
                    width="15"
                    height="20"
                    rx="2"
                    fill="#f3f4f6"
                    stroke="#e5e7eb"
                  />
                  <rect
                    x="4"
                    y="5.2"
                    width="10"
                    height="3"
                    rx="0.5"
                    fill="#111827"
                    opacity="0.92"
                  />
                  <g fill="#111827" opacity="0.9">
                    <circle cx="6.5" cy="11.5" r="0.8" />
                    <circle cx="9.5" cy="11.5" r="0.8" />
                    <circle cx="12.5" cy="11.5" r="0.8" />
                    <circle cx="6.5" cy="14.5" r="0.8" />
                    <circle cx="9.5" cy="14.5" r="0.8" />
                    <circle cx="12.5" cy="14.5" r="0.8" />
                    <circle cx="6.5" cy="17.5" r="0.8" />
                    <circle cx="9.5" cy="17.5" r="0.8" />
                    <circle cx="12.5" cy="17.5" r="0.8" />
                    <rect x="6" y="19.8" width="7" height="1.6" rx="0.4" />
                  </g>
                  <g transform="translate(19,6)">
                    <circle cx="0" cy="0" r="3" fill="#FFC857" />
                    <g stroke="#FF9F1C" stroke-width="0.8">
                      <path d="M0-4.4 L0-6" />
                      <path d="M0 4.4 L0 6" />
                      <path d="M4.4 0 L6 0" />
                      <path d="M-4.4 0 L-6 0" />
                      <path d="M3.1 -3.1 L4.3 -4.3" />
                      <path d="M-3.1 3.1 L-4.3 4.3" />
                      <path d="M3.1 3.1 L4.3 4.3" />
                      <path d="M-3.1 -3.1 L-4.3 -4.3" />
                    </g>
                  </g>
                </svg>
              </div>
              <h3 style={{ color: "#374151", marginBottom: "10px" }}>
                Solar Calculator
              </h3>
              <p>Enter your details to calculate perfect solar system</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;
