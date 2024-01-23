// import React from 'react'
// import styles from "./style";
import {
  Billing, Business, CardDeal, Clients, FeedBack, Footer, Navbar, Next, Service, Stats } from "./components";
const App = () => (
  <div className="bg-[rgb(0,4,15)] text-white font-poppins">
    {/* <h1 className={`testing italic`}>Hello</h1>
    <h2 className={`${styles.marginX}`}>World</h2> */}
    <Navbar />
    <Next />
    <Stats />
    <Business />
    <Billing />
    <CardDeal />
    <FeedBack />
    <Clients />
    <Service />
    <Footer />
  </div>
);

export default App;
