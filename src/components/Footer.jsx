// import React from 'react'

import { copyright, logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="footer paddingFooterY paddingFooterX">
      <div className="footerOne">
        <div className="footerOneOne">
          <div className="footerOneOneImg">
            <img
              src={logo}
              alt="hoobank"
              className="size-full object-contain"
            />
          </div>
          <div className="footerOneOneContent">
            A new way to make the payments easy, reliable and secure.
          </div>
        </div>
        <div className="footerOneTwo">
          {footerLinks.map((footer) => (
            <div key={footer.title} className="footerOneTwoContainer">
              <h2 className="text-lg font-medium my-2">{footer.title}</h2>
              <p className="flex flex-col">
                {footer.links.map((link) => (
                  <a
                    href={link.link}
                    target="__blank"
                    key={link.name}
                    className={`my-1 text-base text-[rgba(255,255,255,0.70)] hover:text-white`}
                  >
                    {link.name}
                  </a>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-[#3F3E45]" />
      <div className="footerTwo">
        <div className="flex flex-wrap text-base sm:text-lg">
          <div>Copyright</div>
          <div className="mx-2">
            <img src={copyright} className="w-full h-full" alt="copyright" />
          </div>
          <div className="mt-1 sm:mt-0">2024 HooBank. All Rights Reserved.</div>
        </div>
        <div className="flex flex-wrap mx-0 sm:mx-3 my-3 sm:my-0">
          {socialMedia.map((social) => (
            <a href={social.link} key={social.id} className="mx-3">
              <img src={social.icon}
                alt={`${
                  social.icon.split("/")[social.icon.split("/").length - 1].slice(0, -4)
                }`}
                className="w-full h-full"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
