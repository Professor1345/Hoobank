// import {useState} from 'react'

import { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  
  return (
    <nav className="paddingB marginX header">
      <div>
        <img src={logo} alt="Hoobank" className="logo" />
      </div>
      <div
        className={`navbar-container ${
          toggle ? "flex sm:flex" : "hidden sm:flex"
        }`}
      >
        {navLinks.map((nav, index) => (
          <div
            key={nav.id}
            className={`navbar ${
              index === navLinks.length - 1 ? "mr-0 sm:mr-0" : "mr-0 sm:mr-10"
            }
            ${isActive === nav.title ? "text-white" : "text-dimWhite"}`}
          >
            <a
              href={`#${nav.id}`}
              onClick={() => {
                setIsActive(nav.title);
                setToggle(false);
              }}
            >
              {nav.title}
            </a>
          </div>
        ))}
      </div>

      <div
        onClick={() => setToggle((tog) => !tog)}
        className="flex sm:hidden w-[28px] h-[28px]"
      >
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
