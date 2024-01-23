// import React from 'react'

import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="paddingB marginX stats">
      {stats.map((stat, index) => (
        <div key={stat.id} className="stats-container">
          <span className={`statsValue`}>{stat.value}</span>
          <span
            className={`statsTitle ${
              index === stats.length - 1 ? "text-right" : null
            }`}
          >
            {stat.title}
          </span>
          {index === stats.length - 1 ? (
            ""
          ) : (
            <span className={`statsLine`}>|</span>
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
