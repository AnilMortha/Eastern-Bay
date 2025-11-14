import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section
      className="overflow-hidden space"
      data-bg-src="assets/img/bg/service_bg_1.jpg"
    >
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-5">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Personalized Solar Solutions for Your Needs
              </h2>
            </div>
          </div>

          <div className="col-auto">
            <div className="sec-btn">
              <div className="icon-box">
                <button className="slider-arrow default">
                  <FaArrowLeft />
                </button>
                <button className="slider-arrow default">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
            className="swiper th-slider has-shadow"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-card">
                  <div
                    className="service-overlay"
                    data-bg-src="assets/img/service/service_overlay_1.jpg"
                  ></div>
                  <div className="box-content">
                    <div className="box-icon">
                      <img src="assets/img/icon/service_1_1.svg" alt="Icon" />
                    </div>
                    <div
                      className="box-img"
                      data-mask-src="assets/img/shape/ser-shape.png"
                    >
                      <img
                        src="assets/img/service/service_1_1.jpg"
                        alt="img"
                      />
                    </div>
                    <h3 className="box-title">
                      <a href="service-details.html">
                        Solar Panel Installation
                      </a>
                    </h3>
                    <p className="box-text">
                      Our professional installation service ensures that your
                      solar panels are set up efficiently and securely for
                      maximum sunlight exposure.
                    </p>
                    <a
                      href="service.html"
                      className="th-btn border-btn th-icon fw-medium text-uppercase"
                    >
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
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-card">
                  <div
                    className="service-overlay"
                    data-bg-src="assets/img/service/service_overlay_2.jpg"
                  ></div>
                  <div className="box-content">
                    <div className="box-icon">
                      <img src="assets/img/icon/service_1_2.svg" alt="Icon" />
                    </div>
                    <div
                      className="box-img"
                      data-mask-src="assets/img/shape/ser-shape.png"
                    >
                      <img
                        src="assets/img/service/service_1_2.jpg"
                        alt="img"
                      />
                    </div>
                    <h3 className="box-title">
                      <a href="service-details.html">
                        Battery Storage Solutions
                      </a>
                    </h3>
                    <p className="box-text">
                      Store solar power with our cutting-edge battery
                      solutions, providing energy independence and uninterrupted
                      power.
                    </p>
                    <a
                      href="service.html"
                      className="th-btn border-btn th-icon fw-medium text-uppercase"
                    >
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
            </SwiperSlide>

             <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-card">
                  <div
                    className="service-overlay"
                    data-bg-src="assets/img/service/service_overlay_1.jpg"
                  ></div>
                  <div className="box-content">
                    <div className="box-icon">
                      <img src="assets/img/icon/service_1_1.svg" alt="Icon" />
                    </div>
                    <div
                      className="box-img"
                      data-mask-src="assets/img/shape/ser-shape.png"
                    >
                      <img
                        src="assets/img/service/service_1_1.jpg"
                        alt="img"
                      />
                    </div>
                    <h3 className="box-title">
                      <a href="service-details.html">
                        Solar Panel Installation
                      </a>
                    </h3>
                    <p className="box-text">
                      Our professional installation service ensures that your
                      solar panels are set up efficiently and securely for
                      maximum sunlight exposure.
                    </p>
                    <a
                      href="service.html"
                      className="th-btn border-btn th-icon fw-medium text-uppercase"
                    >
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
            </SwiperSlide>

             <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-card">
                  <div
                    className="service-overlay"
                    data-bg-src="assets/img/service/service_overlay_2.jpg"
                  ></div>
                  <div className="box-content">
                    <div className="box-icon">
                      <img src="assets/img/icon/service_1_2.svg" alt="Icon" />
                    </div>
                    <div
                      className="box-img"
                      data-mask-src="assets/img/shape/ser-shape.png"
                    >
                      <img
                        src="assets/img/service/service_1_2.jpg"
                        alt="img"
                      />
                    </div>
                    <h3 className="box-title">
                      <a href="service-details.html">
                        Battery Storage Solutions
                      </a>
                    </h3>
                    <p className="box-text">
                      Store solar power with our cutting-edge battery
                      solutions, providing energy independence and uninterrupted
                      power.
                    </p>
                    <a
                      href="service.html"
                      className="th-btn border-btn th-icon fw-medium text-uppercase"
                    >
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
            </SwiperSlide>

             <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-card">
                  <div
                    className="service-overlay"
                    data-bg-src="assets/img/service/service_overlay_2.jpg"
                  ></div>
                  <div className="box-content">
                    <div className="box-icon">
                      <img src="assets/img/icon/service_1_2.svg" alt="Icon" />
                    </div>
                    <div
                      className="box-img"
                      data-mask-src="assets/img/shape/ser-shape.png"
                    >
                      <img
                        src="assets/img/service/service_1_2.jpg"
                        alt="img"
                      />
                    </div>
                    <h3 className="box-title">
                      <a href="service-details.html">
                        Battery Storage Solutions
                      </a>
                    </h3>
                    <p className="box-text">
                      Store solar power with our cutting-edge battery
                      solutions, providing energy independence and uninterrupted
                      power.
                    </p>
                    <a
                      href="service.html"
                      className="th-btn border-btn th-icon fw-medium text-uppercase"
                    >
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
            </SwiperSlide>

             <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-card">
                  <div
                    className="service-overlay"
                    data-bg-src="assets/img/service/service_overlay_2.jpg"
                  ></div>
                  <div className="box-content">
                    <div className="box-icon">
                      <img src="assets/img/icon/service_1_2.svg" alt="Icon" />
                    </div>
                    <div
                      className="box-img"
                      data-mask-src="assets/img/shape/ser-shape.png"
                    >
                      <img
                        src="assets/img/service/service_1_2.jpg"
                        alt="img"
                      />
                    </div>
                    <h3 className="box-title">
                      <a href="service-details.html">
                        Battery Storage Solutions
                      </a>
                    </h3>
                    <p className="box-text">
                      Store solar power with our cutting-edge battery
                      solutions, providing energy independence and uninterrupted
                      power.
                    </p>
                    <a
                      href="service.html"
                      className="th-btn border-btn th-icon fw-medium text-uppercase"
                    >
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
            </SwiperSlide>


          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
