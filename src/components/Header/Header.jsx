import React from "react";
import { Link } from "react-scroll";

const duration = 1100;

const Header = () => {
  return (
    <div className="navigation text-gray-400 max-w-md md:max-w-lg lg:max-w-full ">
      <Link activeClass="active" to="home" spy smooth duration={duration} className="w-[6rem] lg:w-[10rem] px-[10px] py-[7px] lg:px-[32px] lg:py-[13px]">
        Home
      </Link>
      <Link activeClass="active" to="about" spy smooth duration={duration} className="w-[6rem] lg:w-[10rem] px-[10px] py-[7px] lg:px-[32px] lg:py-[13px]">
        About
      </Link>
      <Link activeClass="active" to="portfolio" spy smooth duration={duration} className="w-[6rem] lg:w-[10rem] px-[10px] py-[7px] lg:px-[32px] lg:py-[13px]">
        Portfolio
      </Link>
      <Link activeClass="active" to="skills" spy smooth duration={duration} className="w-[6rem] lg:w-[10rem] px-[10px] py-[7px] lg:px-[32px] lg:py-[13px]">
        Skills
      </Link>
      <Link activeClass="active" to="contact" spy smooth duration={duration} className="w-[6rem] lg:w-[10rem] px-[10px] py-[7px] lg:px-[32px] lg:py-[13px]">
        Contact
      </Link>
    </div>
  );
};

export default Header;
