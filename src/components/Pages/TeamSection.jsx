import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "Mishel Marsh",
    role: "Founder",
    image: "/assets/img/team/team_1_1.jpg",
  },
  {
    name: "Alex Michel",
    role: "Engineer",
    image: "/assets/img/team/team_1_2.jpg",
  },
  {
    name: "Famhida Ruko",
    role: "Engineer",
    image: "/assets/img/team/team_1_3.jpg",
  },
  {
    name: "Alex Anfantino",
    role: "Engineer",
    image: "/assets/img/team/team_1_4.jpg",
  },
  {
    name: "Jack Connor",
    role: "Founder",
    image: "/assets/img/team/team_1_5.jpg",
  },
  {
    name: "Mason Robert",
    role: "Engineer",
    image: "/assets/img/team/team_1_6.jpg",
  },
  {
    name: "Ethan David",
    role: "Founder",
    image: "/assets/img/team/team_1_7.jpg",
  },
  {
    name: "Daniel Thomas",
    role: "Engineer",
    image: "/assets/img/team/team_1_8.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="team-sec space-bottom overflow-hidden">
      <div className="container z-index-common">
        {/* Title */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-xxl-5">
            <div className="title-area text-center">
              <span className="sub-title">Team Members</span>
              <h2 className="sec-title">
                Meet Our Amazing Team Of Solar Energy Experts
              </h2>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="slider-area position-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: ".slider-next",
              prevEl: ".slider-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            className="th-slider has-shadow"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="th-team team-box">
                  <div className="team-img-wrap">
                    <div className="box-img">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="th-social">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://facebook.com/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linkedin.com/"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">
                      <a href="/team-details">{member.name}</a>
                    </h3>
                    <span className="team-desig">{member.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <button className="slider-arrow slider-prev">
            <i className="far fa-arrow-left"></i>
          </button>
          <button className="slider-arrow slider-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
