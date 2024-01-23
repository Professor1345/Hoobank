// import React from 'react'

import { features } from "../constants";
import GetStartedTwo from "./GetStartedTwo";

const Business = () => {
  return (
    <section id="features" className="paddingY marginX business">
      <div className="busOne">
        <h2 className="busOneOne">
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <div className="busOneTwo">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </div>
        <div>
          <GetStartedTwo />
        </div>
      </div>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={feature.id} className={`features ${index !== features.length - 1? "my-2" : "my-0"}`}>
            <div className={`featuresOne`}>
              <img src={feature.icon} alt="icon" />
            </div>
            <div className={`featuresTwo`}>
              <div>{feature.title}</div>
              <div>{feature.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
