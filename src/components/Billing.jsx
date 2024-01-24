// import React from 'react'

import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section id="product" className="paddingY marginX billing">
      <div className="bilOne">
        <h2 className="bilOneOne">Easily control your <br className="hidden md:hidden" /> billing & invoicing.</h2>
        <div className="bilOneTwo">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </div>
        <div className="bilLink">
          <img
            src={apple}
            alt="apple-store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google-play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className="bilTwo relative">
        <img
          src={bill}
          alt="bill"
          className="object-contain size-full relative z-[5]"
        />
        <div className="absolute z-[3] top-0 -left-1/2 size-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] bottom-0 -left-1/2 size-[50%] rounded-full pink__gradient"></div>
      </div>
    </section>
  );
};

export default Billing;
