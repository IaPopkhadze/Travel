import beach from "../video/beach.mp4";
import view from "../video/view.mp4";
import island from "../video/island.mp4";
import tbilisiVideo from "../video/tbilisiVideo.mp4";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import "./about.css";
import { BsCheckAll } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="aboutContent">
        <h1 className="aboutH1">About us</h1>
        <p className="aboutP1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          natus cupiditate labore rerum quis dignissimos neque nesciunt corporis
          odio dicta?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Rem quasi fuga reiciendis provident! Deserunt tenetur magni ipsam eos,
          voluptatibus mollitia ut laudantium neque, ullam, quos molestias
          accusantium assumenda dolor voluptates.
        </p>
      </div>
      <div className="boxes">
        <div className="box-child">
          <video src={beach} autoPlay loop muted></video>
        </div>
        <div className="box-child box-child-two second-box">
          <h1 className="box-title"> Travel Agencies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            doloremque similique quia, perspiciatis odit quam odio sit rem,
            soluta illum totam laborum dolores ea quas aspernatur a culpa iste
            cupiditate.
          </p>
          <div className="overlayBoxChild">
            <div className="textContent">
              <h1>Traveling</h1>
            </div>
          </div>
        </div>
        <div className="box-child">
          <video src={view} autoPlay loop muted></video>
        </div>
        <div className="box-child box-child-two">
          <ul className="box-items">
            <li>
              {" "}
              <BsCheckAll /> item one
            </li>
            <li>
              <BsCheckAll /> item two
            </li>
            <li>
              <BsCheckAll /> item four
            </li>
            <li>
              <BsCheckAll /> item five{" "}
            </li>
            <li>
              <BsCheckAll /> item six
            </li>
            <li>
              <BsCheckAll /> item seven
            </li>
            <li>
              <BsCheckAll /> item eight
            </li>
          </ul>
        </div>
        <div className="box-child">
          <video src={island} autoPlay loop muted></video>
        </div>
        <div className="box-child box-child-two box-images">
          <img className=" imghover" src={img1} />
          <img className=" imghover" src={img2} />
          <img className=" imghover" src={img3} />
          <img className=" imghover" src={img4} />
        </div>
      </div>

      <div className="lineContainer">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </div>
  );
};

export default About;
