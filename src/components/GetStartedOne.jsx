// import React from 'react'

import { arrowUp } from "../assets";

const GetStartedOne = () => {
  return (
    <div>
      <div className="w-[95px] h-[95px] sm:w-[70px] sm:h-[70px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[140px] xl:h-[140px] bg-blue-gradient rounded-full p-[2px]">
        <div className="flex justify-center items-center w-full h-full  bg-[rgb(0,4,15)] rounded-full">
          <div className="text-gradient text-[14px] sm:text-[12px] md:text-[16px] leading-[16px] md:leading-[25px] xl:text-[18px] p-4 xl:leading-[25px] font-medium">
            <div className="flex flex-row items-center">
              <span className="self-center">Get</span>
              <img
                src={arrowUp}
                className="size-[20px] sm:size-[18px] md:size-[25px] xl:size-[28px] self-center"
                alt="arrow-up"
              />
            </div>
            <span>Started</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedOne;
