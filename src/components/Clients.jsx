// import React from 'react'

import { clients } from "../constants";

const Clients = () => (
  <section className="paddingClientY marginX clients">
    {clients.map((client) => (
      <div key={client.id} className="client-container">
        <img src={client.logo} alt="client" className="object-contain size-full" />
      </div>
    ))}
  </section>
);

export default Clients;
