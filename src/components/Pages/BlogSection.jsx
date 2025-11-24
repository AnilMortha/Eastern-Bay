import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      img: "assets/img/blog/blog_1_1.jpg",
      date: "15 March , 2025",
      time: "08 min read",
      title:
        "On an island in the sun, coal power is king over abundant",
    },
    {
      id: 2,
      img: "assets/img/blog/blog_1_2.jpg",
      date: "16 March , 2025",
      time: "08 min read",
      title:
        "On an Island in the Sun, Coal Power Dominates Solar Energy",
    },
    {
      id: 3,
      img: "assets/img/blog/blog_1_3.jpg",
      date: "17 March , 2025",
      time: "08 min read",
      title:
        "On an Island in the Sun, Coal Power Rules Solar Potentia",
    },
    {
      id: 4,
      img: "assets/img/blog/blog_1_2.jpg",
      date: "19 March , 2025",
      time: "08 min read",
      title:
        "On an Island in the Sun, Coal Power Reigns Over Abundant",
    },
  ];

  return (
    <section
      className="overflow-hidden space overflow-hidden"
      id="blog-sec"
    >
      <div className="container">
        {/* Title */}
        <div className="title-area text-center">
          <span className="sub-title">News & Blog</span>
          <h2 className="sec-title">Our Latest News & Blogs</h2>
        </div>

        {/* Slider */}
        <div className="slider-area position-relative">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: ".blog-prev",
              nextEl: ".blog-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            className="swiper th-slider has-shadow"
          >
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blog-card">
                  <div className="box-img global-img">
                    <img src={blog.img} alt="blog image" />
                  </div>
                  <div className="box-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fa-regular fa-calendar"></i>
                        {blog.date}
                      </a>
                      <a href="blog.html">
                        <i className="fa-regular fa-clock"></i>
                        {blog.time}
                      </a>
                    </div>
                    <h3 className="box-title">
                      <a href="">{blog.title}</a>
                    </h3>
                    <a
                      href=""
                      className="th-btn border-btn th-icon text-uppercase fw-semibold"
                    >
                      <span
                        className="btn-text"
                        data-back="Read More"
                        data-front="Read More"
                      ></span>
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="slider-arrow slider-prev blog-prev">
            <i className="far fa-arrow-left"></i>
          </button>
          <button className="slider-arrow slider-next blog-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
