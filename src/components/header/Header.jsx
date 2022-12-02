import { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Link } from "react-scroll/modules";
import backgroundVideo from "../video/backgroundVideo.mp4";
import "./header.css";

const Header = () => {
  const [activ, setActiv] = useState("#home");

  return (
    <div id="home" className="backgroundContainer">
      <video src={backgroundVideo} autoPlay loop muted></video>
      <div className="overlay"></div>

      <div className="navigation">
        <GiAirplaneDeparture className="logo" />
        <ul className="navigation-ul">
          <li>
            <Link to="home" smooth={true} duration={1500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1500}>
              About
            </Link>
          </li>
          <li>
            <Link to="citiesPage" smooth={true} duration={1500}>
              City
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={1500}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="registration" smooth={true} duration={1500}>
              Registration
            </Link>
          </li>
        </ul>
      </div>

      <h1 className="headerH1">
        Travel In <span className="header-span">Georgia</span>
      </h1>
    </div>
  );
};

export default Header;
