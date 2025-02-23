import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import LogoTextWhite from "../../assets/images/QURAN-ALONE-white.svg";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  let footerSec;
  if (location.pathname==='/quran-reader') {
    footerSec = 'p-[6px]';
  }
  else {
    footerSec = 'p-[23px]';
  }

  return (
    <footer className="bg-gradient">
      {/* <div className="footer-content content-container py-[26px] hidden lg:block">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-auto h-[107px]" src={Logo} alt="Quran Alone" />

          </div>

          <div
            className={`flex items-baseline space-x-3 xl:space-x-11 justify-end`}
          >
            <Link
              to=""
              className="text-white hover:text-primary lg:text-[14px]"
            >
              Home
            </Link>
            <Link
              to="the-quran"
              className="text-white hover:text-primary text-[12px] xl:text-[14px]"
            >
              The Quran
            </Link>
            <Link
              to="audio-video"
              className="text-white hover:text-primary text-[12px] xl:text-[14px]"
            >
              Audio & Video
            </Link>
            <Link
              to="contact-prayer"
              className="text-white hover:text-primary text-[12px] xl:text-[14px]"
            >
              Contact Prayer
            </Link>
            <Link
              to="articles"
              className="text-white hover:text-primary text-[12px] xl:text-[14px]"
            >
              Articles & Links
            </Link>
            <Link
              to="contact-us"
              className="text-white hover:text-primary text-[12px] xl:text-[14px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}
      <div className={`copyrights bg-black ${footerSec}`}>
        <p className="text-center text-[12px] md:text-[15px] text-white">
          Copyright © 2024 QuranAlone.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
