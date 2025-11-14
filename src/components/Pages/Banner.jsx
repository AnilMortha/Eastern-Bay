import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    bg: "/assets/img/hero/hero_bg_1_1.jpg",
    title: (
      <>
        Solar <span className="hero-img"><img src="/assets/img/shape/hero-shape.svg" alt="" /></span> Power Energy
      </>
    ),
  },
  {
    bg: "/assets/img/hero/hero_bg_1_2.jpg",
    title: (
      <>
        Powering <span className="hero-img"><img src="/assets/img/shape/hero-shape.svg" alt="" /></span> Solar Energy
      </>
    ),
  },
  {
    bg: "/assets/img/hero/hero_bg_1_3.jpg",
    title: (
      <>
        Harvesting <span className="hero-img"><img src="/assets/img/shape/hero-shape.svg" alt="" /></span> Sun’s Power
      </>
    ),
  },
  {
    bg: "/assets/img/hero/hero_bg_1_4.jpg",
    title: (
      <>
        Sun <span className="hero-img"><img src="/assets/img/shape/hero-shape.svg" alt="" /></span> For Everyone
      </>
    ),
  },
];

const Banner = () => {
  return (
    <section className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="hero-slider-1"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="hero-shape-1">
                  <img src="/assets/img/bg/hero_overlay_1.png" alt="" />
                </div>
              </div>
              <div className="container">
                <div className="hero-style1 text-center text-lg-start">
                  <span className="sub-title">Empower Your Future With</span>
                  <h1 className="hero-title">{slide.title}</h1>
                  <div className="btn-group justify-content-lg-start justify-content-center">
                    <a href="/contact" className="th-btn style1 th-icon">
                      <span className="btn-text" data-front="Get A Quote" data-back="Get A Quote"></span>
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Section */}
      <div className="hero-over-image">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-5 col-lg-4">
              <div className="hero-image global-img">
                <img src="/assets/img/hero/hero-img-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="hero1-item">
                <div className="box-icon">
                  <img src="/assets/img/icon/doller.svg" alt="" />
                </div>
                <div className="box-content">
                  <h3 className="box-title">Cost Savings</h3>
                  <p className="box-text">
                    Over time, solar energy can significantly lower electricity bills and even let users sell excess power back to the grid.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="hero-image global-img">
                <img src="/assets/img/hero/hero-img-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
