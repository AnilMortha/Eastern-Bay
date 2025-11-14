import React from "react";

const features = [
  {
    icon: "/assets/img/icon/feature_1_1.svg",
    title: "Energy Solutions",
    text: "Solar panels with PV cells convert sunlight directly into electricity. PV panels are often installed on rooftops, in solar farms.",
    link: "/service-details",
  },
  {
    icon: "/assets/img/icon/feature_1_2.svg",
    title: "Global Expertise",
    text: "Global expertise refers to having a broad, in-depth understanding, knowledge, and proficiency in a particular field or subject.",
    link: "/service-details",
  },
  {
    icon: "/assets/img/icon/feature_1_3.svg",
    title: "Home Appliance",
    text: "A home appliance refers to any electrical or mechanical device that assists in household tasks, making daily life more convenient.",
    link: "/service-details",
  },
  {
    icon: "/assets/img/icon/feature_1_4.svg",
    title: "Easy Installation",
    text: "Easy installation refers to the process of setting up or assembling a product, system, or device with minimal effort.",
    link: "/service-details",
  },
];

const Features = () => {
  return (
    <section className="position-relative overflow-hidden space-top">
      <div className="container">
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div className="col-md-6 col-xl-3" key={index}>
              <div className="feature-card th-ani text-center">
                <div className="box-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="box-title">
                  <a href={feature.link}>{feature.title}</a>
                </h3>
                <p className="box-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
