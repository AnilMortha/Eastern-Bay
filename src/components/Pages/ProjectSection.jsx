// import React, { useState } from "react";

// const ProjectSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const categories = [
//     { id: "all", label: "All Projects", icon: "fa-regular fa-grid-2" },
//     { id: "residential", label: "Residential", icon: "fa-regular fa-house" },
//     { id: "commercial", label: "Commercial", icon: "fa-regular fa-building" },
//     { id: "industrial", label: "Industrial", icon: "fa-regular fa-factory" },
//   ];

//   const projects = [
//     // Residential Projects
//     {
//       id: 1,
//       category: "residential",
//       title: "Visakhapatnam - 10kW Villa",
//       location: "Visakhapatnam",
//       img: "/assets/img/project/residential-1.jpg",
//       description:
//         "Complete off-grid solar system for a 4BHK home. Zero electricity bills since installation. NEDCAP approved installation.",
//       stats: [
//         { number: "10", label: "kW", text: "System Size" },
//         { number: "₹8.2", label: "k", text: "Monthly Save" },
//         { number: "2024", label: "", text: "Installed" },
//         { number: "5.2", label: "yr", text: "Payback" },
//       ],
//       features: ["Battery Backup", "Net Metering", "5 Year Warranty"],
//     },
//     {
//       id: 2,
//       category: "residential",
//       title: "Guntur - 5kW Independent House",
//       location: "Guntur",
//       img: "/assets/img/project/residential-2.jpg",
//       description:
//         "On-grid solar system for 3BHK house. Monthly electricity bill reduced from ₹4,500 to ₹300.",
//       stats: [
//         { number: "5", label: "kW", text: "System Size" },
//         { number: "₹4.2", label: "k", text: "Monthly Save" },
//         { number: "2024", label: "", text: "Installed" },
//         { number: "4.5", label: "yr", text: "Payback" },
//       ],
//       features: ["On-Grid", "DISCOM Approved", "LED Display"],
//     },
//     {
//       id: 3,
//       category: "residential",
//       title: "Rajahmundry - 8kW Duplex",
//       location: "Rajahmundry",
//       img: "/assets/img/project/residential-3.jpg",
//       description:
//         "Hybrid solar system with battery backup. Powers entire home including 2 ACs and geyser.",
//       stats: [
//         { number: "8", label: "kW", text: "System Size" },
//         { number: "₹6.5", label: "k", text: "Monthly Save" },
//         { number: "2023", label: "", text: "Installed" },
//         { number: "4.8", label: "yr", text: "Payback" },
//       ],
//       features: ["Hybrid System", "Lithium Battery", "Remote Monitoring"],
//     },

//     // Commercial Projects
//     {
//       id: 4,
//       category: "commercial",
//       title: "Vijayawada - Textile Unit",
//       location: "Vijayawada",
//       img: "/assets/img/project/commercial-1.jpg",
//       description:
//         "25kW on-grid system for textile manufacturing. 40% reduction in operational costs. DISCOM net meter installed.",
//       stats: [
//         { number: "25", label: "kW", text: "System Size" },
//         { number: "₹22", label: "k", text: "Monthly Save" },
//         { number: "2023", label: "", text: "Installed" },
//         { number: "3.8", label: "yr", text: "Payback" },
//       ],
//       features: ["Net Metering", "Tax Benefits", "AMS"],
//     },
//     {
//       id: 5,
//       category: "commercial",
//       title: "Tirupati - Shopping Mall",
//       location: "Tirupati",
//       img: "/assets/img/project/commercial-2.jpg",
//       description:
//         "50kW rooftop solar for shopping complex. Powers common areas, 20+ shops, and parking lighting.",
//       stats: [
//         { number: "50", label: "kW", text: "System Size" },
//         { number: "₹45", label: "k", text: "Monthly Save" },
//         { number: "2024", label: "", text: "Installed" },
//         { number: "4.1", label: "yr", text: "Payback" },
//       ],
//       features: ["Rooftop", "3-Phase System", "Generation Based"],
//     },
//     {
//       id: 6,
//       category: "commercial",
//       title: "Visakhapatnam - Hotel",
//       location: "Visakhapatnam",
//       img: "/assets/img/project/commercial-3.jpg",
//       description:
//         "30kW solar system for 3-star hotel. Powers rooms, restaurant, and swimming pool pumps.",
//       stats: [
//         { number: "30", label: "kW", text: "System Size" },
//         { number: "₹28", label: "k", text: "Monthly Save" },
//         { number: "2023", label: "", text: "Installed" },
//         { number: "4.2", label: "yr", text: "Payback" },
//       ],
//       features: ["Hybrid", "Backup", "Green Certification"],
//     },

//     // Industrial Projects
//     {
//       id: 7,
//       category: "industrial",
//       title: "Kakinada - Rice Mill",
//       location: "Kakinada",
//       img: "/assets/img/project/industrial-1.jpg",
//       description:
//         "100kW ground-mounted solar for rice mill. Powers entire milling operations and storage units.",
//       stats: [
//         { number: "100", label: "kW", text: "System Size" },
//         { number: "₹85", label: "k", text: "Monthly Save" },
//         { number: "2024", label: "", text: "Installed" },
//         { number: "3.2", label: "yr", text: "Payback" },
//       ],
//       features: ["Ground Mount", "High Voltage", "SCADA"],
//     },
//     {
//       id: 8,
//       category: "industrial",
//       title: "Nellore - Poultry Farm",
//       location: "Nellore",
//       img: "/assets/img/project/industrial-2.jpg",
//       description:
//         "40kW solar system for poultry farm. Powers ventilation, lighting, and automated feeding systems.",
//       stats: [
//         { number: "40", label: "kW", text: "System Size" },
//         { number: "₹35", label: "k", text: "Monthly Save" },
//         { number: "2023", label: "", text: "Installed" },
//         { number: "3.9", label: "yr", text: "Payback" },
//       ],
//       features: ["AMF", "Temperature Control", "Auto Tracking"],
//     },
//     {
//       id: 9,
//       category: "industrial",
//       title: "Anakapalle - Manufacturing",
//       location: "Anakapalle",
//       img: "/assets/img/project/industrial-3.jpg",
//       description:
//         "150kW industrial solar plant for manufacturing unit. Powers heavy machinery and workshop.",
//       stats: [
//         { number: "150", label: "kW", text: "System Size" },
//         { number: "₹1.2", label: "L", text: "Monthly Save" },
//         { number: "2024", label: "", text: "Installed" },
//         { number: "3.5", label: "yr", text: "Payback" },
//       ],
//       features: ["HT Connection", "Power Factor", "Remote Mgmt"],
//     },
//   ];

//   const filteredProjects = activeCategory === "all" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   // Category wise counts
//   const getCount = (category) => {
//     if (category === "all") return projects.length;
//     return projects.filter(p => p.category === category).length;
//   };

//   return (
//     <section
//       className="eby-project-area bg-white position-relative space mt-5"
//       id="eby-project-sec"
//     >
//       <div className="container">
//         {/* Title - Clean & Simple */}
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="eby-title-area text-center mb-50">
//               <span className="eby-sub-title">OUR WORK IN ANDHRA PRADESH</span>
//               <h2 className="eby-sec-title">
//                 Real Installations. <span>Real Savings.</span>
//               </h2>
//               <p className="eby-text">
//                 From Vizag to Tirupati — 2000+ happy customers. 
//                 See what we've installed for homes, businesses & industries across AP.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="row">
//           <div className="col-12">
//             <div className="eby-category-filter text-center mb-40">
//               {categories.map((category) => (
//                 <button
//                   key={category.id}
//                   className={`eby-category-btn ${activeCategory === category.id ? 'active' : ''}`}
//                   onClick={() => setActiveCategory(category.id)}
//                 >
//                   <i className={category.icon}></i>
//                   <span>{category.label}</span>
//                   <span className="eby-count">({getCount(category.id)})</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="row gy-4">
//           {filteredProjects.map((project) => (
//             <div key={project.id} className="col-md-6 col-lg-4">
//               <div className="eby-project-card">
                
//                 {/* Category Badge */}
//                 <div className="eby-category-badge">
//                   <i className={
//                     project.category === "residential" ? "fa-regular fa-house" :
//                     project.category === "commercial" ? "fa-regular fa-building" :
//                     "fa-regular fa-factory"
//                   }></i>
//                   <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
//                 </div>

//                 {/* Image */}
//                 <div className="eby-project-img">
//                   <img src={project.img} alt={project.title} />
//                   <div className="eby-project-location">
//                     <i className="fa-regular fa-location-dot"></i> {project.location}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="eby-project-content">
//                   <h3 className="eby-project-title">
//                     <a href={`/project/${project.id}`}>{project.title}</a>
//                   </h3>
                  
//                   <p className="eby-project-desc">{project.description}</p>

//                   {/* Features Chips */}
//                   <div className="eby-project-features">
//                     {project.features.slice(0, 3).map((feature, index) => (
//                       <span key={index} className="eby-feature-chip">{feature}</span>
//                     ))}
//                   </div>

//                   {/* Stats */}
//                   <div className="eby-project-stats">
//                     {project.stats.map((stat, i) => (
//                       <div className="eby-stat-item" key={i}>
//                         <h4>
//                           <span className="eby-stat-number">{stat.number}</span>
//                           <span className="eby-stat-label">{stat.label}</span>
//                         </h4>
//                         <p>{stat.text}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Button */}
//                   <div className="eby-project-btn mt-30">
//                     <a href={`/project/${project.id}`} className="eby-th-btn">
//                       <span>View Details</span>
//                       <i className="fa-regular fa-arrow-right ms-2"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* No Results Message */}
//         {filteredProjects.length === 0 && (
//           <div className="row">
//             <div className="col-12">
//               <div className="eby-no-results text-center py-5">
//                 <i className="fa-regular fa-circle-exclamation fa-2x mb-3" style={{ color: '#FF9500' }}></i>
//                 <h4>No projects found in this category</h4>
//                 <p className="text-muted">Check back soon for new installations</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* View All Link */}
//         <div className="row">
//           <div className="col-12">
//             <div className="eby-view-all text-center mt-50">
//               <a href="/projects" className="eby-view-link">
//                 View All 2000+ Installations Across AP
//                 <i className="fa-regular fa-arrow-right ms-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* ===== EASTERN BAY - PROJECT SECTION ===== */
        
//         .eby-project-area {
//           padding: 80px 0;
//           background: #f8fafc;
//           font-family: 'Inter', sans-serif;
//         }

//         /* Title Area */
//         .eby-title-area {
//           margin-bottom: 50px;
//         }

//         .eby-sub-title {
//           display: inline-block;
//           font-size: 14px;
//           font-weight: 600;
//           letter-spacing: 2px;
//           color: #FF9500;
//           text-transform: uppercase;
//           margin-bottom: 15px;
//           background: rgba(255, 149, 0, 0.08);
//           padding: 6px 18px;
//           border-radius: 30px;
//         }

//         .eby-sec-title {
//           font-size: 36px;
//           font-weight: 700;
//           color: #0B1A2E;
//           margin-bottom: 20px;
//           line-height: 1.2;
//         }

//         .eby-sec-title span {
//           color: #FF9500;
//         }

//         .eby-text {
//           font-size: 16px;
//           line-height: 1.7;
//           color: #64748B;
//           max-width: 600px;
//           margin: 0 auto;
//         }

//         /* Category Filter */
//         .eby-category-filter {
//           display: flex;
//           justify-content: center;
//           gap: 15px;
//           flex-wrap: wrap;
//           margin-bottom: 40px;
//         }

//         .eby-category-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 24px;
//           border: 1px solid rgba(0, 0, 0, 0.08);
//           background: white;
//           border-radius: 40px;
//           font-size: 15px;
//           font-weight: 500;
//           color: #64748B;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .eby-category-btn i {
//           font-size: 14px;
//           color: #FF9500;
//         }

//         .eby-category-btn .eby-count {
//           font-size: 12px;
//           color: #94A3B8;
//           margin-left: 4px;
//         }

//         .eby-category-btn:hover {
//           border-color: #FF9500;
//           color: #0B1A2E;
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(255, 149, 0, 0.1);
//         }

//         .eby-category-btn.active {
//           background: #FF9500;
//           color: white;
//           border-color: #FF9500;
//         }

//         .eby-category-btn.active i {
//           color: white;
//         }

//         .eby-category-btn.active .eby-count {
//           color: rgba(255, 255, 255, 0.8);
//         }

//         /* Category Badge on Cards */
//         .eby-category-badge {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           background: rgba(255, 255, 255, 0.95);
//           padding: 6px 14px;
//           border-radius: 30px;
//           font-size: 12px;
//           font-weight: 600;
//           color: #0B1A2E;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           backdrop-filter: blur(4px);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
//           z-index: 2;
//         }

//         .eby-category-badge i {
//           color: #FF9500;
//           font-size: 11px;
//         }

//         /* Project Card */
//         .eby-project-card {
//           background: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02);
//           transition: all 0.3s ease;
//           height: 100%;
//           border: 1px solid rgba(0, 0, 0, 0.03);
//           position: relative;
//         }

//         .eby-project-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 15px 30px rgba(255, 149, 0, 0.08);
//           border-color: rgba(255, 149, 0, 0.15);
//         }

//         /* Project Image */
//         .eby-project-img {
//           position: relative;
//           height: 240px;
//           overflow: hidden;
//         }

//         .eby-project-img img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }

//         .eby-project-card:hover .eby-project-img img {
//           transform: scale(1.05);
//         }

//         .eby-project-location {
//           position: absolute;
//           bottom: 20px;
//           left: 20px;
//           background: rgba(255, 255, 255, 0.95);
//           padding: 8px 18px;
//           border-radius: 30px;
//           font-size: 13px;
//           font-weight: 500;
//           color: #0B1A2E;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           backdrop-filter: blur(4px);
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
//         }

//         .eby-project-location i {
//           color: #FF9500;
//           font-size: 12px;
//         }

//         /* Project Content */
//         .eby-project-content {
//           padding: 25px;
//         }

//         .eby-project-title {
//           font-size: 20px;
//           font-weight: 700;
//           margin-bottom: 12px;
//           line-height: 1.3;
//         }

//         .eby-project-title a {
//           color: #0B1A2E;
//           text-decoration: none;
//           transition: color 0.2s ease;
//         }

//         .eby-project-title a:hover {
//           color: #FF9500;
//         }

//         .eby-project-desc {
//           font-size: 14px;
//           line-height: 1.7;
//           color: #64748B;
//           margin-bottom: 20px;
//         }

//         /* Features Chips */
//         .eby-project-features {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           margin-bottom: 20px;
//         }

//         .eby-feature-chip {
//           background: rgba(255, 149, 0, 0.08);
//           color: #FF9500;
//           font-size: 11px;
//           font-weight: 600;
//           padding: 4px 10px;
//           border-radius: 20px;
//           letter-spacing: 0.3px;
//         }

//         /* Stats */
//         .eby-project-stats {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 10px;
//           padding: 15px 0;
//           border-top: 1px solid rgba(0, 0, 0, 0.05);
//           border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//         }

//         .eby-stat-item {
//           text-align: center;
//         }

//         .eby-stat-item h4 {
//           font-size: 18px;
//           font-weight: 700;
//           color: #FF9500;
//           margin-bottom: 4px;
//         }

//         .eby-stat-number {
//           font-size: 18px;
//         }

//         .eby-stat-label {
//           font-size: 12px;
//           font-weight: 500;
//           color: #64748B;
//           margin-left: 2px;
//         }

//         .eby-stat-item p {
//           font-size: 11px;
//           color: #94A3B8;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           margin: 0;
//         }

//         /* Button */
//         .eby-th-btn {
//           display: inline-flex;
//           align-items: center;
//           background: transparent;
//           color: #FF9500;
//           font-weight: 600;
//           font-size: 14px;
//           padding: 10px 0;
//           text-decoration: none;
//           border-bottom: 2px solid transparent;
//           transition: all 0.2s ease;
//         }

//         .eby-th-btn:hover {
//           color: #0B1A2E;
//           border-bottom-color: #FF9500;
//         }

//         .eby-th-btn i {
//           transition: transform 0.2s ease;
//         }

//         .eby-th-btn:hover i {
//           transform: translateX(5px);
//         }

//         /* View All Link */
//         .eby-view-link {
//           display: inline-flex;
//           align-items: center;
//           background: #0B1A2E;
//           color: white;
//           padding: 14px 32px;
//           border-radius: 50px;
//           text-decoration: none;
//           font-weight: 600;
//           font-size: 15px;
//           transition: all 0.3s ease;
//           border: none;
//         }

//         .eby-view-link:hover {
//           background: #FF9500;
//           transform: translateY(-3px);
//           box-shadow: 0 10px 25px rgba(255, 149, 0, 0.25);
//         }

//         .eby-view-link i {
//           transition: transform 0.2s ease;
//         }

//         .eby-view-link:hover i {
//           transform: translateX(5px);
//         }

//         /* No Results */
//         .eby-no-results {
//           padding: 60px 20px;
//           background: white;
//           border-radius: 20px;
//           border: 1px solid rgba(0, 0, 0, 0.03);
//         }

//         .eby-no-results h4 {
//           color: #0B1A2E;
//           margin-bottom: 10px;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .eby-project-area {
//             padding: 60px 0;
//           }

//           .eby-sec-title {
//             font-size: 28px;
//           }

//           .eby-category-filter {
//             gap: 10px;
//           }

//           .eby-category-btn {
//             padding: 10px 18px;
//             font-size: 13px;
//           }

//           .eby-project-stats {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 15px;
//           }

//           .eby-view-link {
//             width: 100%;
//             justify-content: center;
//           }
//         }

//         @media (max-width: 480px) {
//           .eby-sec-title {
//             font-size: 24px;
//           }

//           .eby-sub-title {
//             font-size: 12px;
//           }

//           .eby-category-filter {
//             flex-direction: column;
//             align-items: stretch;
//             padding: 0 20px;
//           }

//           .eby-category-btn {
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProjectSection;

import React from "react";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <section
      className="eby-service-area bg-white position-relative space mt-5"
      id="eby-service-sec"
    >
      <div className="container">
        {/* Title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="eby-title-area text-center mb-50">
              <span className="eby-sub-title">OUR SOLAR SERVICES IN AP</span>
              <h2 className="eby-sec-title">
                Complete Solar Solutions <span>For Every Need</span>
              </h2>
              <p className="eby-text">
                From single homes to large industries — we design, install and maintain 
                solar systems across Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row gy-4">
          {/* Residential Service Card */}
          <div className="col-md-6 col-lg-4">
            <div className="eby-service-card">
              <div className="eby-service-icon">
                <i className="fa-solid fa-house-chimney"></i>
              </div>

              <span className="eby-service-category">RESIDENTIAL</span>
              <h3 className="eby-service-title">
                <Link to="/residential-solar-services">Home Solar Systems</Link>
              </h3>
              
              <p className="eby-service-desc">
                Complete solar solutions for houses, apartments and villas. 
                Zero electricity bills, government subsidy available, and 5-year warranty.
              </p>

              <div className="eby-service-features">
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>2kW to 20kW Systems</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Battery Backup Options</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Net Metering Installation</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>NEDCAP Subsidy Available</span>
                </div>
              </div>

              <div className="eby-service-stats">
                <div className="eby-stat">
                  <span className="eby-stat-value">1200+</span>
                  <span className="eby-stat-label">Homes</span>
                </div>
                <div className="eby-stat">
                  <span className="eby-stat-value">₹0</span>
                  <span className="eby-stat-label">Electricity Bill</span>
                </div>
                <div className="eby-stat">
                  <span className="eby-stat-value">5yr</span>
                  <span className="eby-stat-label">Warranty</span>
                </div>
              </div>

              <div className="eby-service-btn">
                <Link to="/residential-solar-services" className="eby-th-btn">
                  <span>Know Residential Services</span>
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Commercial Service Card */}
          <div className="col-md-6 col-lg-4">
            <div className="eby-service-card">
              <div className="eby-service-icon">
                <i className="fa-solid fa-building"></i>
              </div>

              <span className="eby-service-category">COMMERCIAL</span>
              <h3 className="eby-service-title">
                <Link to="/commercial-solar-services">Business Solar Solutions</Link>
              </h3>
              
              <p className="eby-service-desc">
                Solar for shops, offices, malls, hotels and restaurants. 
                Reduce operational costs with 40% savings and get 80% depreciation benefit.
              </p>

              <div className="eby-service-features">
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>10kW to 100kW Systems</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>3-Phase Connections</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Tax Benefits (80% Dep)</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>AMS Remote Monitoring</span>
                </div>
              </div>

              <div className="eby-service-stats">
                <div className="eby-stat">
                  <span className="eby-stat-value">500+</span>
                  <span className="eby-stat-label">Businesses</span>
                </div>
                <div className="eby-stat">
                  <span className="eby-stat-value">40%</span>
                  <span className="eby-stat-label">Cost Savings</span>
                </div>
                <div className="eby-stat">
                  <span className="eby-stat-value">3yr</span>
                  <span className="eby-stat-label">ROI</span>
                </div>
              </div>

              <div className="eby-service-btn">
                <Link to="/commercial-solar-services" className="eby-th-btn">
                  <span>Know Commercial Services</span>
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Industrial Service Card */}
          <div className="col-md-6 col-lg-4">
            <div className="eby-service-card">
              <div className="eby-service-icon">
                <i className="fa-solid fa-industry"></i>
              </div>

              <span className="eby-service-category">INDUSTRIAL</span>
              <h3 className="eby-service-title">
                <Link to="/industrial-solar-services">Industrial Solar Plants</Link>
              </h3>
              
              <p className="eby-service-desc">
                Large-scale solar for factories, rice mills, poultry farms and manufacturing units. 
                Maximum ROI with minimal maintenance and SCADA monitoring.
              </p>

              <div className="eby-service-features">
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>50kW to 500kW+ Systems</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>Ground Mount & Rooftop</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>SCADA Monitoring</span>
                </div>
                <div className="eby-feature-item">
                  <i className="fa-regular fa-circle-check"></i>
                  <span>HT/LT Connections</span>
                </div>
              </div>

              <div className="eby-service-stats">
                <div className="eby-stat">
                  <span className="eby-stat-value">300+</span>
                  <span className="eby-stat-label">Industries</span>
                </div>
                <div className="eby-stat">
                  <span className="eby-stat-value">₹1.2L+</span>
                  <span className="eby-stat-label">Monthly Save</span>
                </div>
                <div className="eby-stat">
                  <span className="eby-stat-value">3.2yr</span>
                  <span className="eby-stat-label">Payback</span>
                </div>
              </div>

              <div className="eby-service-btn">
                <Link to="/industrial-solar-services" className="eby-th-btn">
                  <span>Know Industrial Services</span>
                  <i className="fa-regular fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row">
          <div className="col-12">
            <div className="eby-cta-box text-center mt-50">
              <h3>Need a Custom Solar Solution?</h3>
              <p>Get free site visit and consultation within 48 hours</p>
              <Link to="/contact" className="eby-cta-btn">
                Get Free Consultation
                <i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== EASTERN BAY - SERVICES SECTION ===== */
        
        .eby-service-area {
          padding: 80px 0;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        /* Title Area */
        .eby-title-area {
          margin-bottom: 50px;
        }

        .eby-sub-title {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #FF9500;
          text-transform: uppercase;
          margin-bottom: 15px;
          background: rgba(255, 149, 0, 0.08);
          padding: 6px 18px;
          border-radius: 30px;
        }

        .eby-sec-title {
          font-size: 36px;
          font-weight: 700;
          color: #0B1A2E;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .eby-sec-title span {
          color: #FF9500;
        }

        .eby-text {
          font-size: 16px;
          line-height: 1.7;
          color: #64748B;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Service Card */
        .eby-service-card {
          background: white;
          border-radius: 20px;
          padding: 35px 25px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.03);
          position: relative;
          overflow: hidden;
        }

        .eby-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 30px rgba(255, 149, 0, 0.08);
          border-color: rgba(255, 149, 0, 0.15);
        }

        .eby-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FF9500, #FFB347);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .eby-service-card:hover::before {
          transform: scaleX(1);
        }

        /* Service Icon */
        .eby-service-icon {
          width: 70px;
          height: 70px;
          background: rgba(255, 149, 0, 0.1);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .eby-service-icon i {
          font-size: 32px;
          color: #FF9500;
        }

        /* Category */
        .eby-service-category {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #FF9500;
          background: rgba(255, 149, 0, 0.08);
          padding: 5px 12px;
          border-radius: 20px;
          margin-bottom: 15px;
        }

        /* Title */
        .eby-service-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .eby-service-title a {
          color: #0B1A2E;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .eby-service-title a:hover {
          color: #FF9500;
        }

        /* Description */
        .eby-service-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #64748B;
          margin-bottom: 20px;
        }

        /* Features List */
        .eby-service-features {
          margin-bottom: 25px;
        }

        .eby-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #475569;
        }

        .eby-feature-item i {
          color: #FF9500;
          font-size: 14px;
        }

        /* Stats */
        .eby-service-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          padding: 15px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          margin-bottom: 25px;
        }

        .eby-stat {
          display: flex;
          flex-direction: column;
        }

        .eby-stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #FF9500;
          margin-bottom: 4px;
        }

        .eby-stat-label {
          font-size: 11px;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        /* Button */
        .eby-th-btn {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #FF9500;
          font-weight: 600;
          font-size: 15px;
          padding: 12px 0;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .eby-th-btn:hover {
          color: #0B1A2E;
          border-bottom-color: #FF9500;
        }

        .eby-th-btn i {
          transition: transform 0.2s ease;
        }

        .eby-th-btn:hover i {
          transform: translateX(5px);
        }

        /* CTA Box */
        .eby-cta-box {
          background: linear-gradient(145deg, #0B1A2E, #1a2b40);
          padding: 50px;
          border-radius: 30px;
          color: white;
        }

        .eby-cta-box h3 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .eby-cta-box p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
        }

        .eby-cta-btn {
          display: inline-flex;
          align-items: center;
          background: #FF9500;
          color: #0B1A2E;
          padding: 14px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .eby-cta-btn:hover {
          background: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .eby-service-area {
            padding: 60px 0;
          }

          .eby-sec-title {
            font-size: 28px;
          }

          .eby-service-title {
            font-size: 22px;
          }

          .eby-cta-box {
            padding: 30px 20px;
          }

          .eby-cta-box h3 {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .eby-sec-title {
            font-size: 24px;
          }

          .eby-sub-title {
            font-size: 12px;
          }

          .eby-service-stats {
            gap: 10px;
          }

          .eby-stat-value {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;