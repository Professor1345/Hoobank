// import React from 'react'

import { discount, robot } from "../assets";
import GetStartedOne from "./GetStartedOne";

const Next = () => {
  return (
    <section id="home" className="paddingY marginNextX Next">
      <div className="nextOne">
        <div className="discount bg-discount-gradient">
          <span className="px-1">
            <img
              src={discount}
              alt="discount"
              className="w-[24px] h-[24px] xs:w-[32px] xs:h-[32px]"
            />
          </span>
          <span className="text-white px-1">20%</span>
          DISCOUNT FOR <span className="text-white px-1">1 MONTH</span>{" "}
          ACCOUNT
        </div>

        <div className="theNext">
          <div>
            The Next <div className="text-gradient">Generation </div>
          </div>
          <div className="getOne"><GetStartedOne/></div>
          
        </div>
        <div className="payMet">Payment Method.</div>
        <div className="text-lg my-3 sm:my-4 mr-0 xs:mr-16 sm:mr-24 md:mr-32 lg:mr-44 xl:mr-52">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </div>
      </div>
      <div className="nextTwo">
        <img src={robot} alt="robot" className="relative z-[5] object-contain w-full h-full" />
        <div className="absolute w-[40%] h-[30%] z-[0] top-0 pink__gradient"></div>
        <div className="absolute w-[50%] h-[80%] z-[1] rounded-full right-0  bottom-40 white__gradient"></div>
        <div className="absolute w-[50%] h-[50%] z-[0] right-20 bottom-20 blue__gradient"></div>
      </div>

      {/* <div className="getOneTwo"><GetStartedOne/></div> */}

    </section>
  );
};

export default Next;
