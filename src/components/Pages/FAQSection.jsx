import React from "react";

const FAQSection = () => {
  return (
    <div className="overflow-hidden bg-smoke2" id="faq-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="faq-image th-parallax">
              <img src="assets/img/normal/faq-image.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-5 mt-35 mt-xl-0">
            <div className="faq-area">
              <div className="title-area pe-xxl-5 me-xxl-5">
                <span className="sub-title">FAQ’S</span>
                <h2 className="sec-title">Have Any Questions?</h2>
              </div>

              <div className="accordion-area accordion" id="faqAccordion">
                {/* Accordion Item 1 */}
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      What is the experience of your employees?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Enthusiastically syndicate extensive technology before
                        granular testing procedures. Rapidiously aggregate
                        progressive niches through high standards. Globally
                        deploy user-centric sources.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2 (Active) */}
                <div className="accordion-card active">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="true"
                      aria-controls="collapse-2"
                    >
                      What is the experience of your employees?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Enthusiastically syndicate extensive technology before
                        granular testing procedures. Rapidiously aggregate
                        progressive niches through high standards. Globally
                        deploy user-centric sources.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-card">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      What is the experience of your employees?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Enthusiastically syndicate extensive technology before
                        granular testing procedures. Rapidiously aggregate
                        progressive niches through high standards. Globally
                        deploy user-centric sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
