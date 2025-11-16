import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* Fix default marker icon issue when bundlers don't handle images */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* Enhanced solar panel SVG with better design */
const solarSVG = (size = 42) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0ea5a4" />
        <stop offset="100%" stop-color="#0891b2" />
      </linearGradient>
      <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fde047" />
        <stop offset="100%" stop-color="#f59e0b" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
    <g filter="url(#shadow)">
      <!-- Solar Panel Base -->
      <rect x="2" y="9" width="20" height="10" rx="1" ry="1" fill="url(#panelGrad)" stroke="#064e3b" stroke-width="0.5"/>
      
      <!-- Solar Cells -->
      <rect x="3.2" y="10.5" width="3.6" height="7" fill="#083344" opacity="0.15"/>
      <rect x="7.8" y="10.5" width="3.6" height="7" fill="#083344" opacity="0.15"/>
      <rect x="12.4" y="10.5" width="3.6" height="7" fill="#083344" opacity="0.15"/>
      <rect x="17" y="10.5" width="3.6" height="7" fill="#083344" opacity="0.15"/>
      
      <!-- Sun -->
      <rect x="7" y="1" width="10" height="3" rx="1" ry="1" fill="url(#sunGrad)" stroke="#b45309" stroke-width="0.5" />
      <circle cx="12" cy="2.5" r="1" fill="#ffffff" opacity="0.8"/>
    </g>
  </svg>
`;

/* Create a Leaflet DivIcon using the enhanced SVG */
function createSolarIcon(size = 42) {
  return L.divIcon({
    className: "solar-div-icon",
    html: solarSVG(size),
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 6],
  });
}

/* Andhra Pradesh Service Locations - Enhanced Data */
const AP_PLACES = [
  { id: 1, name: "Visakhapatnam", lat: 17.6868, lng: 83.2185, services: ["Solar Installation", "AMC", "Commercial"], phone: "+91-90000-00001", address: "Dwaraka Nagar, Visakhapatnam", type: "premium" },
  { id: 2, name: "Vijayawada", lat: 16.5062, lng: 80.6480, services: ["Solar Installation", "On-grid Systems", "Residential"], phone: "+91-90000-00002", address: "MG Road, Vijayawada", type: "premium" },
  { id: 3, name: "Rajahmundry", lat: 17.0000, lng: 81.7833, services: ["Solar Roof-top", "Maintenance", "Residential"], phone: "+91-90000-00003", address: "Main Road, Rajahmundry", type: "standard" },
  { id: 4, name: "Tirupati", lat: 13.6288, lng: 79.4192, services: ["Solar Pumps", "Installation", "Agricultural"], phone: "+91-90000-00004", address: "Near Railway Station, Tirupati", type: "standard" },
  { id: 5, name: "Guntur", lat: 16.3067, lng: 80.4365, services: ["Commercial Solar", "Inspection", "Industrial"], phone: "+91-90000-00005", address: "Guntur Centre", type: "premium" },
  { id: 6, name: "Nellore", lat: 14.4426, lng: 79.9865, services: ["On-grid", "Batteries", "Hybrid Systems"], phone: "+91-90000-00006", address: "Nellore Circle", type: "standard" },
  { id: 7, name: "Kakinada", lat: 16.9891, lng: 82.2475, services: ["Solar Installation", "AMC", "Industrial"], phone: "+91-90000-00007", address: "Kakinada Port Area", type: "premium" },
  { id: 8, name: "Eluru", lat: 16.7107, lng: 81.0952, services: ["Residential Solar", "Maintenance"], phone: "+91-90000-00008", address: "Eluru Main", type: "standard" },
  { id: 9, name: "Kadapa (YSR)", lat: 14.4674, lng: 78.8242, services: ["Solar Pumps", "Field Service", "Agricultural"], phone: "+91-90000-00009", address: "Kadapa Town", type: "standard" },
  { id: 10, name: "Kurnool", lat: 15.8281, lng: 78.0373, services: ["Commercial", "Design", "Consultation"], phone: "+91-90000-00010", address: "Kurnool Centre", type: "premium" },
  { id: 11, name: "Anantapur", lat: 14.6810, lng: 77.6000, services: ["Rooftop", "Installation", "Residential"], phone: "+91-90000-00011", address: "Anantapur Market", type: "standard" },
  { id: 12, name: "Srikakulam", lat: 18.2966, lng: 83.8965, services: ["Maintenance", "Inspection", "Repair"], phone: "+91-90000-00012", address: "Srikakulam Road", type: "standard" },
  { id: 13, name: "Chittoor", lat: 13.2171, lng: 79.1000, services: ["Residential", "Pumps", "Agricultural"], phone: "+91-90000-00013", address: "Chittoor Centre", type: "standard" },
  { id: 14, name: "Nandyal", lat: 15.4821, lng: 78.4836, services: ["Installation", "Support", "Residential"], phone: "+91-90000-00014", address: "Nandyal Main", type: "standard" },
  { id: 15, name: "Machilipatnam", lat: 16.1870, lng: 81.1310, services: ["Rooftop", "AMC", "Commercial"], phone: "+91-90000-00015", address: "Machilipatnam Port", type: "standard" },
];

function FitBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (!bounds || bounds.length === 0) return;
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, bounds]);
  return null;
}

export default function PlacesAP() {
  const [places, setPlaces] = useState(AP_PLACES);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);
  const solarIcon = createSolarIcon(44);

  // bounds for fit
  const bounds = places.map((p) => [p.lat, p.lng]);

  const handleLocationClick = (place) => {
    setSelectedPlace(place.id);
    const map = mapRef.current;
    if (map) {
      map.setView([place.lat, place.lng], 12, { animate: true });
    }
  };

  const getServiceBadges = (services) => {
    return services.map((service, index) => (
      <span key={index} style={{
        display: 'inline-block',
        backgroundColor: '#f0f9ff',
        color: '#0369a1',
        padding: '2px 8px',
        borderRadius: '12px',
        fontSize: '11px',
        margin: '2px',
        border: '1px solid #bae6fd'
      }}>
        {service}
      </span>
    ));
  };

  return (
    <div style={{ height: "85vh", width: "100%", display: "flex", gap: 0, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ 
        width: 350, 
        padding: 16, 
        borderRight: "1px solid #e5e7eb", 
        overflowY: "auto",
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
      }}>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ 
            margin: 0, 
            marginBottom: 4, 
            color: "#0f766e",
            fontSize: "24px",
            fontWeight: "700"
          }}>
            🌞 Solar Services - Andhra Pradesh
          </h2>
          <p style={{ 
            marginTop: 0, 
            color: "#64748b",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            {places.length} Service Locations Across AP
          </p>
        </div>

        <div style={{ 
          backgroundColor: "#ecfdf5", 
          padding: "12px", 
          borderRadius: "8px", 
          marginBottom: "16px",
          border: "1px solid #d1fae5"
        }}>
          <div style={{ fontSize: "13px", color: "#065f46", fontWeight: "600" }}>
            🎯 We Provide Solar Services Across All Districts of Andhra Pradesh
          </div>
          <div style={{ fontSize: "12px", color: "#047857", marginTop: "4px" }}>
            Installation • Maintenance • Consultation • Support
          </div>
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {places.map((p) => (
            <li 
              key={p.id} 
              style={{ 
                padding: 12, 
                borderRadius: 8, 
                marginBottom: 8, 
                cursor: "pointer", 
                border: selectedPlace === p.id ? "2px solid #0d9488" : "1px solid #e2e8f0",
                backgroundColor: selectedPlace === p.id ? "#f0fdfa" : "white",
                transition: "all 0.2s ease",
                boxShadow: selectedPlace === p.id ? "0 2px 8px rgba(13, 148, 136, 0.15)" : "0 1px 3px rgba(0,0,0,0.05)"
              }}
              onClick={() => handleLocationClick(p)}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "flex-start",
                marginBottom: 6 
              }}>
                <div style={{ 
                  fontWeight: 700, 
                  color: "#0f766e",
                  fontSize: "15px"
                }}>
                  {p.name}
                  {p.type === "premium" && (
                    <span style={{
                      marginLeft: "6px",
                      backgroundColor: "#fef3c7",
                      color: "#92400e",
                      padding: "1px 6px",
                      borderRadius: "8px",
                      fontSize: "10px",
                      fontWeight: "600"
                    }}>
                      PREMIUM
                    </span>
                  )}
                </div>
              </div>
              <div style={{ fontSize: 13, color: "#475569", marginBottom: 6 }}>
                📍 {p.address}
              </div>
              <div style={{ marginBottom: 6 }}>
                {getServiceBadges(p.services.slice(0, 2))}
                {p.services.length > 2 && (
                  <span style={{
                    fontSize: "11px",
                    color: "#64748b",
                    marginLeft: "4px"
                  }}>
                    +{p.services.length - 2} more
                  </span>
                )}
              </div>
              <div style={{ fontSize: 12, color: "#0ea5e9", fontWeight: "600" }}>
                📞 {p.phone}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Map */}
      <main style={{ flex: 1, position: "relative" }}>
        <div style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
          fontSize: "13px",
          fontWeight: "600",
          color: "#0f766e",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          🗺️ Solar Service Network - Andhra Pradesh
        </div>
        
        <MapContainer
          center={[15.9129, 79.7400]} /* Andhra Pradesh center */
          zoom={7}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {places.map((p) => (
            <Marker
              key={p.id}
              position={[p.lat, p.lng]}
              icon={solarIcon}
              eventHandlers={{
                click: () => setSelectedPlace(p.id),
              }}
            >
              <Popup>
                <div style={{ minWidth: 220 }}>
                  <div style={{ 
                    fontWeight: 700, 
                    fontSize: "16px", 
                    color: "#0f766e",
                    marginBottom: "4px"
                  }}>
                    {p.name}
                  </div>
                  <div style={{ 
                    fontSize: 13, 
                    color: "#475569",
                    marginBottom: "8px"
                  }}>
                    📍 {p.address}
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <div style={{ 
                      fontSize: "13px", 
                      fontWeight: "600", 
                      color: "#374151",
                      marginBottom: "4px"
                    }}>
                      Our Services:
                    </div>
                    <div>
                      {getServiceBadges(p.services)}
                    </div>
                  </div>
                  <div style={{ 
                    fontSize: 13, 
                    fontWeight: "600", 
                    color: "#0ea5e9",
                    padding: "6px",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "4px",
                    textAlign: "center"
                  }}>
                    📞 {p.phone}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {places.length > 0 && <FitBounds bounds={bounds} />}
        </MapContainer>
      </main>
    </div>
  );
}