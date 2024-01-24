// import React from 'react'

import { feedback } from "../constants";

import FeedBackCard from "./FeedBackCard";

const FeedBack = () => {
  return (
    <section id="clients" className="feedback paddingFeedY marginX">
      <div className="absolute -z-[0] w-[30%] h-[50%] right-0 rounded-full blue__gradient"></div>
      <div className="feedHeader">
        <h2 className="feedHeaderOne">What people are saying about us</h2>
        <p className="feedHeaderTwo">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="feedContent z-[5] relative">
        {feedback.map((feed, index) => (
          <FeedBackCard key={feed.id} {...feed} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeedBack;
