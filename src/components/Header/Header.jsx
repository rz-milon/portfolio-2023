import React from "react";
import { Link } from "react-scroll";

const duration = 1100;

const Header = () => {
  return (
    <div className="navigation">
      <Link activeClass="active" to="home" spy smooth duration={duration} >
        Home
      </Link>
      <Link activeClass="active" to="about" spy smooth duration={duration} >
        About
      </Link>
      <Link activeClass="active" to="portfolio" spy smooth duration={duration} >
        Portfolio
      </Link>
      <Link activeClass="active" to="skills" spy smooth duration={duration} >
        Skills
      </Link>
      <Link activeClass="active" to="contact" spy smooth duration={duration} >
        Contact
      </Link>
    </div>
  );
};

export default Header;
