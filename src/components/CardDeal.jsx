// import React from 'react'

import { card } from "../assets";
import GetStartedTwo from "./GetStartedTwo";

const CardDeal = () => {
  return (
    <section className="cardDeal paddingY marginX">
      <div className="cardOne">
        <h2 className="cardOneHeader">
          Find a better card deal in few easy
          steps.
        </h2>
        <div className="cardOneContent">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </div>
        <div>
          <GetStartedTwo />
        </div>
      </div>
      <div className="cardTwo">
        <img src={card} alt="card" className="size-full object-contain" />
      </div>
    </section>
  );
};

export default CardDeal;
