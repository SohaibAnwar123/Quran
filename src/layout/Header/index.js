import React, { useState } from "react";
// import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import LogoText from "../../assets/images/QURAN-ALONE.svg";
import TogglerIcon from "./../../components/icons/TogglerIcon";
import CloseIcon from "./../../components/icons/CloseIcon";
import "./index.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("./");
  const location = useLocation();
  let mainNav,navLogo,navLinks;
  if(location.pathname==='/quran-reader'){
    mainNav = 'md:top-[48px] top-[45px] py-[6px]';
    navLogo = 'h-[50px]';
    navLinks = 'my-2';
  }
  else {
    mainNav = 'top-[63px] md:top-[72px] py-[11px]';
    navLogo = 'h-[42px] md:h-[72px]';
    navLinks = 'my-4';
  } 
  const handleClick = (route) => {
    setActiveLink(route);
    setIsOpen(false);
  };

  const buildLink = (to, text) => (
    <Link
      to={to}
      className={`nav-link w-full xl:w-auto py-[10px] xl:py-0 px-10 xl:px-0 ${navLinks} hover:text-primary text-[18px] xl:text-[14px] ${
        activeLink === to
          ? "active text-black xl:text-white"
          : "text-black xl:text-white"
      }`}
      onClick={() => handleClick(to)}
    >
      {text}
    </Link>
  );

  return (
    <header>
      <nav className={`bg-[#000000CC] text-dark z-50 absolute w-full left-0 ${mainNav}` }>
        <div className="content-container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-full flex items-center justify-start xl:justify-between">
              <div className="flex me-[13px] xl:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-0 rounded-md text-white focus:outline-none focus:ring-0 focus:ring-offset-0"
                >
                  <span className="sr-only">Open main menu</span>
                  <TogglerIcon />
                </button>
              </div>

              <Link to="/" onClick={() => handleClick("/")}>
                <div className="flex items-center">
                  <img
                    className={`w-auto  ${navLogo}`}
                    src={Logo}
                    alt="Quran Alone"
                  />
                  {/* <div>
                    <img
                      className="w-[86px] md:w-auto"
                      src={LogoText}
                      alt="Quran Alone"
                    />
                    <p className="text-white text-[6px] md:text-[7px] mt-[5px]">
                      A BEACON FOR THE RIGHTEOUS
                    </p>
                  </div> */}
                </div>
              </Link>
                  
              {isOpen ? <div className="overlay"></div> : null}
              <div
                className={`items-baseline xl:space-x-11 xl:justify-end ${
                  isOpen
                    ? "navbar-toggle-menu flex flex-col w-[332px] min-h-[100vh] fixed top-0 w-full left-0 bg-[#ffffff]"
                    : "hidden"
                } xl:flex`}
              >
                <div
                  className="absolute z-10 top-2 right-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <CloseIcon />
                </div>
                <div className="flex items-center px-10 xl:px-0 py-8 justify-center xl:hidden w-full border-b-2">
                  <Link
                    to="./"
                    className="inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      <img
                        className="w-auto h-[72px]"
                        src={Logo}
                        alt="Quran Alone"
                      />
                      <div>
                        <img
                          className="w-auto"
                          src={LogoText}
                          alt="Quran Alone"
                        />
                        <p className="text-black text-[7px] mt-[5px]">
                          A BEACON FOR THE RIGHTEOUS
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {buildLink("./", "Home")}
                {buildLink("the-quran", "The Quran")}
                {buildLink("audio-video", "Audio & Video")}
                {buildLink("contact-prayer", "Contact Prayer")}
                {buildLink("articles", "Articles & Links")}
                {buildLink("contact-us", "Contact Us")}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
