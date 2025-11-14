import React from "react";

const CounterSection = () => {
  const counters = [
    {
      icon: "/assets/img/icon/counter_card_1_1.svg",
      number: "10,000,000",
      suffix: "+",
      text: "Instances of fault activity captured on LV networks",
    },
    {
      icon: "/assets/img/icon/counter_card_1_2.svg",
      number: "3,500,000",
      suffix: "",
      text: "Train pantographs inspected annually",
    },
    {
      icon: "/assets/img/icon/counter_card_1_3.svg",
      number: "20,000,000",
      suffix: "+",
      text: "Hours of LV circuit load profile data captured and analysed",
    },
  ];

  return (
    <section className="space-extra2-top space-bottom overflow-hidden">
      <div className="container">
        <div className="counter-card-wrap style3">
          {counters.map((counter, index) => (
            <React.Fragment key={index}>
              <div className="counter-card">
                <div className="box-icon">
                  <img src={counter.icon} alt={`Counter ${index + 1}`} />
                </div>
                <h3 className="box-number">
                  <span className="counter-number">{counter.number}</span>
                  {counter.suffix}
                </h3>
                <div className="media-body">
                  <p className="box-text mb-n1">{counter.text}</p>
                </div>
              </div>

              {/* Divider (skip last item) */}
              {index !== counters.length - 1 && <div className="divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
