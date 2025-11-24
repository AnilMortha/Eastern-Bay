import React from "react";
import { useState, useEffect } from "react";

const staticBgImage = '/assets/img/bg/solar-panel.jpg'; 

const changingContent = [
    {
        subTitle: "Start generating your own clean power and lock in low rates for decades.",
        title: "Cut Your Electric Bills upto 75%"
    },
    {
        subTitle: "Maximize your federal tax credits and state rebates before they expire!",
        title: "0% Down Solar Installation"
    },
    {
        subTitle: "Switch to 100% clean solar energy and significantly reduce your carbon footprint.",
        title: "Power Your Home. Protect the Planet."
    }
];

const Banner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % changingContent.length
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const currentSlide = changingContent[currentIndex];

  return (
    <section className="th-hero-wrapper hero-1" id="hero">
            <div className="hero-inner">
                <div
                    className="th-hero-bg"
                    style={{ backgroundImage: `url(${staticBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="hero-shape-1">
                        <img src="/assets/img/bg/hero_overlay_1.png" alt="" />
                    </div>
                </div>
                <div className="container">
                    {/* The key on the div forces React to re-render the content, 
                        which helps re-trigger CSS animations like fade-in. */}
                    <div 
                        className="hero-style1 text-center text-lg-start fade-in-animation"
                        key={currentIndex} 
                    >
                        {/* 3. Accessing the currentSlide object */}
                        <span className="sub-title">
                            {currentSlide.subTitle} 
                        </span> 
                        <h1 className="hero-title">
                            {currentSlide.title} 
                        </h1>

                        <div className="btn-group justify-content-lg-start justify-content-center">
                            {/* CTA BUTTON CHANGED TO 'Know More' */}
                            <a href="/about" className="th-btn style1 th-icon"> 
                                <span className="btn-text" data-front="Know More" data-back="Know More"></span>
                                <i className="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ... other sections if you decide to uncomment them ... */}
        </section>
  );
};

export default Banner;
