import React from "react";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "విశాఖపట్నం - 10kW Residential",
      location: "Visakhapatnam",
      img: "/assets/img/project/project_1_1.jpg",
      description:
        "Complete off-grid solar system for a 4BHK home. Zero electricity bills since installation. NEDCAP approved installation.",
      stats: [
        { number: "10", label: "kW", text: "System Size" },
        { number: "₹8.2", label: "k", text: "Monthly Save" },
        { number: "2024", label: "", text: "Installed" },
        { number: "5.2", label: "yr", text: "Payback" },
      ],
    },
    {
      id: 2,
      title: "విజయవాడ - Textile Unit",
      location: "Vijayawada",
      img: "/assets/img/project/project_1_2.jpg",
      description:
        "25kW on-grid system for textile manufacturing. 40% reduction in operational costs. DISCOM net meter installed.",
      stats: [
        { number: "25", label: "kW", text: "System Size" },
        { number: "₹22", label: "k", text: "Monthly Save" },
        { number: "2023", label: "", text: "Installed" },
        { number: "3.8", label: "yr", text: "Payback" },
      ],
    },
    {
      id: 3,
      title: "తిరుపతి - Housing Society",
      location: "Tirupati",
      img: "/assets/img/project/project_1_3.jpg",
      description:
        "50kW community solar project for 20+ families. Common area lighting & borewell pumps. AP government subsidy availed.",
      stats: [
        { number: "50", label: "kW", text: "System Size" },
        { number: "₹45", label: "k", text: "Monthly Save" },
        { number: "2024", label: "", text: "Installed" },
        { number: "4.1", label: "yr", text: "Payback" },
      ],
    },
  ];

  return (
    <section
      className="eby-project-area bg-white position-relative space mt-5"
      id="eby-project-sec"
    >
      <div className="container">
        {/* Title - Clean & Simple */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="eby-title-area text-center mb-50">
              <span className="eby-sub-title">OUR WORK IN ANDHRA PRADESH</span>
              <h2 className="eby-sec-title">
                Real Installations. <span>Real Savings.</span>
              </h2>
              <p className="eby-text">
                From Vizag to Tirupati — 2000+ happy customers. 
                See what we've installed for homes & businesses across AP.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid - Same Old Design, AP Content */}
        <div className="row gy-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="eby-project-card">
                
                {/* Image */}
                <div className="eby-project-img">
                  <img src={project.img} alt={project.title} />
                  <div className="eby-project-location">
                    <i className="fa-regular fa-location-dot"></i> {project.location}
                  </div>
                </div>

                {/* Content */}
                <div className="eby-project-content">
                  <h3 className="eby-project-title">
                    <a href={`/project/${project.id}`}>{project.title}</a>
                  </h3>
                  
                  <p className="eby-project-desc">{project.description}</p>

                  {/* Stats - Same Style, AP Numbers */}
                  <div className="eby-project-stats">
                    {project.stats.map((stat, i) => (
                      <div className="eby-stat-item" key={i}>
                        <h4>
                          <span className="eby-stat-number">{stat.number}</span>
                          <span className="eby-stat-label">{stat.label}</span>
                        </h4>
                        <p>{stat.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Button - Same Style */}
                  <div className="eby-project-btn mt-30">
                    <a href="/projects" className="eby-th-btn">
                      <span>View Case Study</span>
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="row">
          <div className="col-12">
            <div className="eby-view-all text-center mt-50">
              <a href="/projects" className="eby-view-link">
                View All 2000+ Installations Across AP
                <i className="fa-regular fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ===== EASTERN BEY - PROJECT SECTION ===== */
        /* Old Design Maintained - Content Changed */
        
        .eby-project-area {
          padding: 80px 0;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
        }

        /* Title Area - Same Style */
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

        /* Project Card - Same Old Design */
        .eby-project-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.03);
        }

        .eby-project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 149, 0, 0.08);
          border-color: rgba(255, 149, 0, 0.15);
        }

        /* Project Image */
        .eby-project-img {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .eby-project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .eby-project-card:hover .eby-project-img img {
          transform: scale(1.05);
        }

        .eby-project-location {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 500;
          color: #0B1A2E;
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(4px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
        }

        .eby-project-location i {
          color: #FF9500;
          font-size: 12px;
        }

        /* Project Content */
        .eby-project-content {
          padding: 25px;
        }

        .eby-project-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .eby-project-title a {
          color: #0B1A2E;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .eby-project-title a:hover {
          color: #FF9500;
        }

        .eby-project-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #64748B;
          margin-bottom: 20px;
        }

        /* Stats - Same Grid Style */
        .eby-project-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          padding: 15px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .eby-stat-item {
          text-align: center;
        }

        .eby-stat-item h4 {
          font-size: 18px;
          font-weight: 700;
          color: #FF9500;
          margin-bottom: 4px;
        }

        .eby-stat-number {
          font-size: 18px;
        }

        .eby-stat-label {
          font-size: 12px;
          font-weight: 500;
          color: #64748B;
          margin-left: 2px;
        }

        .eby-stat-item p {
          font-size: 11px;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }

        /* Button - Same Style */
        .eby-th-btn {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #FF9500;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 0;
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

        /* View All Link */
        .eby-view-link {
          display: inline-flex;
          align-items: center;
          background: #0B1A2E;
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          border: none;
        }

        .eby-view-link:hover {
          background: #FF9500;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 149, 0, 0.25);
        }

        .eby-view-link i {
          transition: transform 0.2s ease;
        }

        .eby-view-link:hover i {
          transform: translateX(5px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .eby-project-area {
            padding: 60px 0;
          }

          .eby-sec-title {
            font-size: 28px;
          }

          .eby-project-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .eby-view-link {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .eby-sec-title {
            font-size: 24px;
          }

          .eby-sub-title {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;