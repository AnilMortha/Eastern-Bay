import React from "react";

const features = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="#009ceb" d="M439.6 0H204.9L55.4 256h149.5l-128 256l341.3-320H247.5z"/></svg>`,
    title: "Energy Solutions",
    text: "Solar panels with PV cells convert sunlight directly into electricity. PV panels are often installed on rooftops, in solar farms.",
    link: "/service-details",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#009ceb"><g fill="none" stroke="#009ceb" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="m8.5 14.5l-2 8.5l5.5-3.5l5.5 3.5l-2-8.5m-3.5-7L10.5 9l1.5 1.5L13.498 9l-1.5-1.5z"/><path d="M17.5 11.278L20 9l-2.5-2.278V3.5h-3.222L12 1L9.722 3.5H6.5v3.222L4 9l2.5 2.278V14.5h3.222L12 17l2.278-2.5H17.5z"/><path d="M8.5 7L12 5l3.5 2v4L12 13l-3.5-2z"/></g></svg>`,
    title: "Global Expertise",
    text: "Global expertise refers to having a broad, in-depth understanding, knowledge, and proficiency in a particular field or subject.",
    link: "/service-details",
  },
  {
    icon: `<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#009ceb" fill-rule="evenodd" d="M23.988 12.374a3.9 3.9 0 0 0-.16-1.458A8 8 0 0 0 22.071 8.8c-1.487-1.377-3.513-2.715-4.631-3.793l-3.613-3.483c-.09-.08-.76-.779-1.049-.998a.83.83 0 0 0-.838-.21a4.4 4.4 0 0 0-.998.669c-.6.529-1.178 1.237-1.667 1.677c-1.068.998-2.136 1.916-3.164 2.894S4.045 7.553 3.116 8.621c-.609.589-1.487 1.377-2.086 2.106c-.333.37-.594.8-.769 1.268a32.5 32.5 0 0 0-.23 5.55a33.4 33.4 0 0 0 .46 5.49a.35.35 0 0 0 .26.239a.36.36 0 0 0 .379.26c2.715-.11 5.434-.07 8.145.119c1.846.07 3.723.08 5.49.06a45 45 0 0 0 5.929-.38a.39.39 0 0 0 .195-.69a.4.4 0 0 0-.285-.088a75 75 0 0 1-8.165-.13c-1.088 0-2.196-.07-3.284-.08H6.95a44 44 0 0 0-5.79.47a32 32 0 0 1-.279-5.29a33 33 0 0 1 .33-5.251c.195-.436.473-.829.818-1.158c.6-.619 1.348-1.208 1.837-1.707A78 78 0 0 1 6.31 7.064c1.298-1.158 2.566-2.286 3.843-3.424c.5-.43 1.068-1.128 1.667-1.657q.16-.147.34-.27c.299.29.678.7.738.759l3.674 3.533c1.157.999 3.204 2.346 4.74 3.684a6.9 6.9 0 0 1 1.558 1.766c.122.71.142 1.432.06 2.146c-.06 2.855-.39 7.437-.23 9.743a.41.41 0 0 0 .42.369a.4.4 0 0 0 .379-.42c-.14-2.704.489-8.384.489-10.92" clip-rule="evenodd"/><path fill="#009ceb" d="M13.577 22.146a.51.51 0 0 0 .649 0a33 33 0 0 0 .23-4.592q.043-.778 0-1.557a3.6 3.6 0 0 0-.31-1.118a1.34 1.34 0 0 0-.998-.639a11.6 11.6 0 0 0-1.777 0a8.4 8.4 0 0 0-1.647 0a1.8 1.8 0 0 0-.848.42a1 1 0 0 0-.28.609c-.07.429-.34 5.67-.21 6.158a.43.43 0 0 0 .49.3c.579-.11.638-6.319.808-6.339h1.677c.35 0 .729-.06 1.208-.06q.324.01.639.09q.146.356.24.729q.106.706.129 1.417c.05.998 0 1.787 0 2.665c-.09.3-.19 1.747 0 1.917"/></svg>`,
    title: "Home Appliance",
    text: "A home appliance refers to any electrical or mechanical device that assists in household tasks, making daily life more convenient.",
    link: "/service-details",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#009ceb"><g fill="none" stroke="#009ceb" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m9 6l.4 2.214c.066.434.026.875-.119 1.296L5 22M15 6l-.4 2.214c-.066.434-.026.875.119 1.296L19 22"/><path d="m3 11l.324-1.08c.087-.29.13-.435.229-.557c.098-.121.244-.21.535-.386L8.474 6.32c.26-.158.391-.237.542-.278C9.166 6 9.328 6 9.65 6h4.7c.322 0 .483 0 .634.04c.15.042.281.12.542.279l4.386 2.658c.291.176.437.265.535.386c.098.122.142.267.23.558L21 11M3 22h18M4 9h15.5"/><path d="m9.5 10l6.5 4.5L5 22"/><path d="M14.5 10L8 14.5L19 22M9 6l1.4-2.24C11.133 2.587 11.5 2 12 2s.867.587 1.6 1.76L15 6"/></g></svg>`,
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
                <div className="box-icon" dangerouslySetInnerHTML={{ __html: feature.icon }}>
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
