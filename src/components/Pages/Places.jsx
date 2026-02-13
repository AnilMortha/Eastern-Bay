import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


/* Fix default marker icon issue */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

/* Premium Solar Panel SVG Icon */
const solarPanelSVG = (size = 44) => `
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="20" height="10" rx="1" fill="#059669" stroke="#064E3B" stroke-width="0.5"/>
    <path d="M4 10 L20 10" stroke="#FCD34D" stroke-width="0.5" stroke-dasharray="2 2"/>
    <path d="M4 13 L20 13" stroke="#FCD34D" stroke-width="0.5" stroke-dasharray="2 2"/>
    <path d="M4 16 L20 16" stroke="#FCD34D" stroke-width="0.5" stroke-dasharray="2 2"/>
    <rect x="7" y="4" width="10" height="2" fill="#FBBF24" rx="0.5"/>
    <circle cx="12" cy="5" r="1.5" fill="#FDE68A" opacity="0.8"/>
    <path d="M10 19 L14 19" stroke="#065F46" stroke-width="1.5"/>
    <path d="M12 17 L12 19" stroke="#065F46" stroke-width="1.5"/>
  </svg>
`;

/* Location Pin SVG */
const locationPinSVG = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.2 0 3 2.2 3 5c0 2.5 4 8 4 8s4-5.5 4-8c0-2.8-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#059669"/>
  </svg>
`;

/* Phone SVG */
const phoneSVG = `
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 9.7L10.3 8.5c-0.4-0.2-0.9-0.1-1.2 0.2L8 10c-1.3-0.7-2.4-1.8-3.1-3.1l1.3-1.1c0.3-0.3 0.4-0.8 0.2-1.2L5.3 2.5c-0.2-0.4-0.6-0.6-1-0.5l-2 0.5C2 2.7 1.7 3.1 1.7 3.5 1.7 8.5 5.7 12.5 10.7 12.5c0.4 0 0.8-0.3 0.9-0.6l0.5-2c0.1-0.4-0.1-0.8-0.5-1z" fill="#2563EB"/>
  </svg>
`;

/* Service Badge SVG */
const serviceBadgeSVG = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="5" fill="#059669" stroke="#064E3B" stroke-width="0.5"/>
    <path d="M4 6 L6 8 L9 4" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`;

/* Premium Badge SVG */
const premiumBadgeSVG = `
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0L9 4H13L10 7L12 11L7 9L2 11L4 7L1 4H5L7 0Z" fill="#FBBF24" stroke="#B45309" stroke-width="0.5"/>
  </svg>
`;

/* Create Leaflet DivIcon */
function createSolarIcon(size = 44) {
  return L.divIcon({
    className: "ap-solar-marker-icon",
    html: solarPanelSVG(size),
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 6],
  });
}

/* Andhra Pradesh Service Locations */
const AP_SERVICE_LOCATIONS = [
  { 
    id: 1, 
    city: "Visakhapatnam", 
    coordinates: { lat: 17.6868, lng: 83.2185 }, 
    services: ["Solar Installation", "Annual Maintenance", "Commercial Systems"], 
    contact: "+91 90000 00001", 
    address: "Dwaraka Nagar, Visakhapatnam - 530016",
    type: "premium",
    district: "Visakhapatnam"
  },
  { 
    id: 2, 
    city: "Vijayawada", 
    coordinates: { lat: 16.5062, lng: 80.6480 }, 
    services: ["Solar Installation", "On-grid Systems", "Residential"], 
    contact: "+91 90000 00002", 
    address: "MG Road, Vijayawada - 520010",
    type: "premium",
    district: "Krishna"
  },
  { 
    id: 3, 
    city: "Rajahmundry", 
    coordinates: { lat: 17.0000, lng: 81.7833 }, 
    services: ["Solar Rooftop", "Maintenance", "Residential"], 
    contact: "+91 90000 00003", 
    address: "Main Road, Rajahmundry - 533101",
    type: "standard",
    district: "East Godavari"
  },
  { 
    id: 4, 
    city: "Tirupati", 
    coordinates: { lat: 13.6288, lng: 79.4192 }, 
    services: ["Solar Pumps", "Installation", "Agricultural Systems"], 
    contact: "+91 90000 00004", 
    address: "Near Railway Station, Tirupati - 517501",
    type: "standard",
    district: "Chittoor"
  },
  { 
    id: 5, 
    city: "Guntur", 
    coordinates: { lat: 16.3067, lng: 80.4365 }, 
    services: ["Commercial Solar", "Inspection", "Industrial Systems"], 
    contact: "+91 90000 00005", 
    address: "Guntur Centre, Guntur - 522002",
    type: "premium",
    district: "Guntur"
  },
  { 
    id: 6, 
    city: "Nellore", 
    coordinates: { lat: 14.4426, lng: 79.9865 }, 
    services: ["On-grid Systems", "Battery Backup", "Hybrid Systems"], 
    contact: "+91 90000 00006", 
    address: "Nellore Circle, Nellore - 524001",
    type: "standard",
    district: "Nellore"
  },
  { 
    id: 7, 
    city: "Kakinada", 
    coordinates: { lat: 16.9891, lng: 82.2475 }, 
    services: ["Solar Installation", "Annual Maintenance", "Industrial"], 
    contact: "+91 90000 00007", 
    address: "Kakinada Port Area, Kakinada - 533001",
    type: "premium",
    district: "East Godavari"
  },
  { 
    id: 8, 
    city: "Kurnool", 
    coordinates: { lat: 15.8281, lng: 78.0373 }, 
    services: ["Commercial Systems", "Design", "Consultation"], 
    contact: "+91 90000 00008", 
    address: "Kurnool Centre, Kurnool - 518001",
    type: "premium",
    district: "Kurnool"
  },
  { 
    id: 9, 
    city: "Anantapur", 
    coordinates: { lat: 14.6810, lng: 77.6000 }, 
    services: ["Rooftop Systems", "Installation", "Residential"], 
    contact: "+91 90000 00009", 
    address: "Anantapur Market, Anantapur - 515001",
    type: "standard",
    district: "Anantapur"
  },
  { 
    id: 10, 
    city: "Kadapa", 
    coordinates: { lat: 14.4674, lng: 78.8242 }, 
    services: ["Solar Pumps", "Field Service", "Agricultural"], 
    contact: "+91 90000 00010", 
    address: "Kadapa Town, Kadapa - 516001",
    type: "standard",
    district: "YSR Kadapa"
  }
];

function MapBoundsController({ locations }) {
  const map = useMap();
  useEffect(() => {
    if (!locations || locations.length === 0) return;
    const bounds = locations.map(loc => [loc.coordinates.lat, loc.coordinates.lng]);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, locations]);
  return null;
}

export default function AndhraPradeshSolarServices() {
  const [serviceLocations] = useState(AP_SERVICE_LOCATIONS);
  const [activeLocation, setActiveLocation] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const mapReference = useRef(null);
  const solarIcon = createSolarIcon(46);

  const districts = ["all", ...new Set(serviceLocations.map(loc => loc.district))];

  const filteredLocations = selectedDistrict === "all" 
    ? serviceLocations 
    : serviceLocations.filter(loc => loc.district === selectedDistrict);

  const handleLocationSelect = (location) => {
    setActiveLocation(location.id);
    if (mapReference.current) {
      mapReference.current.setView(
        [location.coordinates.lat, location.coordinates.lng], 
        13, 
        { animate: true }
      );
    }
  };

  const renderServiceTags = (services) => {
    return services.map((service, index) => (
      <span key={index} className="ap-service-tag">
        <span className="ap-service-tag-icon" dangerouslySetInnerHTML={{ __html: serviceBadgeSVG }} />
        {service}
      </span>
    ));
  };

  return (
    <div className="ap-solar-container">
      {/* Sidebar */}
      <aside className="ap-solar-sidebar">
        <div className="ap-solar-header">
          <div className="ap-solar-title-wrapper">
            <div className="ap-solar-icon-wrapper" dangerouslySetInnerHTML={{ __html: solarPanelSVG(32) }} />
            <h1 className="ap-solar-title">Solar Services Andhra Pradesh</h1>
          </div>
          <p className="ap-solar-subtitle">{serviceLocations.length} Service Centers Across {districts.length - 1} Districts</p>
        </div>

        <div className="ap-solar-coverage-banner">
          <div className="ap-solar-coverage-content">
            <span className="ap-solar-coverage-icon" dangerouslySetInnerHTML={{ __html: solarPanelSVG(20) }} />
            <span className="ap-solar-coverage-text">Complete Solar Coverage Across Andhra Pradesh</span>
          </div>
          <p className="ap-solar-coverage-description">
            Installation • Maintenance • Consultation • Support
          </p>
        </div>

        <div className="ap-solar-filter-section">
          <label className="ap-solar-filter-label">Filter by District:</label>
          <select 
            className="ap-solar-filter-select"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            {districts.map(district => (
              <option key={district} value={district}>
                {district === "all" ? "All Districts" : district}
              </option>
            ))}
          </select>
        </div>

        <div className="ap-solar-locations-list">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className={`ap-solar-location-card ${activeLocation === location.id ? "ap-solar-location-card-active" : ""}`}
              onClick={() => handleLocationSelect(location)}
            >
              <div className="ap-solar-location-header">
                <span className="ap-solar-location-name">{location.city}</span>
                {location.type === "premium" && (
                  <span className="ap-solar-premium-badge">
                    <span dangerouslySetInnerHTML={{ __html: premiumBadgeSVG }} />
                    PREMIUM
                  </span>
                )}
              </div>
              
              <div className="ap-solar-location-details">
                <div className="ap-solar-location-address">
                  <span className="ap-solar-location-icon" dangerouslySetInnerHTML={{ __html: locationPinSVG }} />
                  <span>{location.address}</span>
                </div>
                
                <div className="ap-solar-service-tags">
                  {renderServiceTags(location.services.slice(0, 2))}
                  {location.services.length > 2 && (
                    <span className="ap-solar-service-more">+{location.services.length - 2}</span>
                  )}
                </div>
                
                <div className="ap-solar-contact-info">
                  <span className="ap-solar-contact-icon" dangerouslySetInnerHTML={{ __html: phoneSVG }} />
                  <span className="ap-solar-contact-number">{location.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Map Section */}
      <main className="ap-solar-map-section">
        <div className="ap-solar-map-header">
          <span className="ap-solar-map-header-icon" dangerouslySetInnerHTML={{ __html: solarPanelSVG(18) }} />
          <span className="ap-solar-map-header-text">Solar Service Network - Andhra Pradesh</span>
        </div>
        
        <MapContainer
          center={[15.9129, 79.7400]}
          zoom={7}
          className="ap-solar-map-container"
          whenCreated={(mapInstance) => (mapReference.current = mapInstance)}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceLocations.map((location) => (
            <Marker
              key={location.id}
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={solarIcon}
              eventHandlers={{
                click: () => setActiveLocation(location.id),
              }}
            >
              <Popup>
                <div className="ap-solar-popup">
                  <h3 className="ap-solar-popup-title">{location.city}</h3>
                  <p className="ap-solar-popup-address">
                    <span dangerouslySetInnerHTML={{ __html: locationPinSVG }} />
                    {location.address}
                  </p>
                  <div className="ap-solar-popup-services">
                    <p className="ap-solar-popup-services-title">Available Services:</p>
                    <div className="ap-solar-popup-service-tags">
                      {renderServiceTags(location.services)}
                    </div>
                  </div>
                  <div className="ap-solar-popup-contact">
                    <span dangerouslySetInnerHTML={{ __html: phoneSVG }} />
                    {location.contact}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {filteredLocations.length > 0 && (
            <MapBoundsController locations={filteredLocations} />
          )}
        </MapContainer>
      </main>
    </div>
  );
}