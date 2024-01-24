/* eslint-disable react/prop-types */
// import React from 'react'

import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="fbc">
      <div className="fbc-quote">
        <img src={quotes} alt="double-quotes" className="size-full" />
      </div>
      <div className="fbc-content">{content}</div>
      <div className="fbc-client">
        <div className="size-[48px] sm:size-[40px] md:size-[48px]">
          <img src={img} alt={name} className="size-full"  />
        </div>
        <div className="fbc-nt">
          <div>{name}</div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
