import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header >
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Mo Ansar Mansoorie</h1>
        <h2 className="text-light">Full Stack Developer</h2>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        
      </div>
    </header>
  );
};

export default Header;
