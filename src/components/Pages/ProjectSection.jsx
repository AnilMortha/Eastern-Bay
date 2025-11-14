import React from "react";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Bay Area Solar Farm",
      img: "/assets/img/project/project_1_1.jpg",
      link: "project-details.html",
      description:
        "We offer customized solar systems for homes of all sizes, helping households reduce electricity bills and environmental impact. Our team handles every step, from planning and permitting to installation and post-installation support.",
      stats: [
        { number: "96", label: "MW", text: "Capacity" },
        { number: "160", label: "HE", text: "Total Area" },
        { number: "2023", label: "YR", text: "Year Built" },
        { number: "16", label: "M", text: "USD Dollar Budget" },
      ],
    },
    {
      id: 2,
      title: "Green Forest Solar Station",
      img: "/assets/img/project/project_1_2.jpg",
      link: "project-details.html",
      description:
        "We offer customized solar systems for homes of all sizes, helping households reduce electricity bills and environmental impact. Our team handles every step, from planning and permitting to installation and post-installation support.",
      stats: [
        { number: "96", label: "MW", text: "Capacity" },
        { number: "160", label: "HE", text: "Total Area" },
        { number: "2023", label: "YR", text: "Year Built" },
        { number: "16", label: "M", text: "USD Dollar Budget" },
      ],
    },
    {
      id: 3,
      title: "Wearing Protection Equipment",
      img: "/assets/img/project/project_1_3.jpg",
      link: "project-details.html",
      description:
        "We offer customized solar systems for homes of all sizes, helping households reduce electricity bills and environmental impact. Our team handles every step, from planning and permitting to installation and post-installation support.",
      stats: [
        { number: "96", label: "MW", text: "Capacity" },
        { number: "160", label: "HE", text: "Total Area" },
        { number: "2023", label: "YR", text: "Year Built" },
        { number: "16", label: "M", text: "USD Dollar Budget" },
      ],
    },
  ];

  return (
    <section
      className="project-area bg-white position-relative space"
      id="project-sec"
      style={{ backgroundImage: "url('/assets/img/bg/project_bg_1.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-4">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title">Case Study</span>
              <h2 className="sec-title text-white">Our Latest Case Studies</h2>
              <p className="text-light">
                We offer customized solar systems for homes of all sizes,
                helping households reduce electricity bills.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="sec-btn">
              <a href="project.html" className="th-btn style1 th-icon">
                <span
                  className="btn-text"
                  data-back="View All Case Study"
                  data-front="View All Case Study"
                ></span>
                <i className="fa-regular fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="line-bottom"></div>

        <div className="project-box-static-wrap">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-box-static"
              style={{
                backgroundImage: "url('/assets/img/bg/project_bg_1.jpg')",
              }}
            >
              <div className="project-box">
                <div className="project-box-img">
                  <img src={project.img} alt={project.title} />
                </div>

                <div className="project-box-details">
                  <h3 className="box-title">
                    <a href={project.link}>{project.title}</a>
                  </h3>

                  <p className="box-text">{project.description}</p>

                  <div className="counter-grid_wrapp">
                    {project.stats.map((stat, i) => (
                      <div className="counter-grid" key={i}>
                        <h3 className="counter-grid-title">
                          <span className="counter-number">{stat.number}</span>
                          {stat.label}
                        </h3>
                        <p className="counter-text mb-0">{stat.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-50">
                    <a href="project.html" className="th-btn border-btn th-icon">
                      <span
                        className="btn-text"
                        data-back="View Details"
                        data-front="View Details"
                      ></span>
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
