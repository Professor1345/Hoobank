// import React from 'react'

import GetStartedTwo from "./GetStartedTwo";

const Service = () => {
  return (
    <section className="paddingY marginX">
      <div className="service">
      <div className="serviceOne">
        <h2 className="serviceOneHeader">Let’s try our service now!</h2>
        <p className="serviceOneContent">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="serviceTwo">
        <GetStartedTwo />
      </div>
      </div>
      
    </section>
  );
};

export default Service;
