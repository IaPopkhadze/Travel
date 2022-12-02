import "./cities.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";
import data from "./data";

const Cities = () => {
  const [city, setCity] = useState("tbilisi");

  return (
    <div id="citiesPage">
      <div className="cities-title">
        <h1>
          Cities you can visit in{" "}
          <span className="cities-title-span"> georgia</span>
        </h1>
      </div>
      <div className="cityList">
        <div className="cityList1">
          <h1 className="cityList1Title">click the city you want to visit</h1>

          <div className="cityContainerList">
            <div
              className="tbilisi cityInGeorgia"
              onClick={() => setCity("tbilisi")}
              id={city === "tbilisi" ? "buttonActivation cityList2Activation" : " "}
            >
              Tbilisi
            </div>
            <div
              className="batumi cityInGeorgia"
              onClick={() => setCity("batumi")}
              id={city === "batumi" ? "buttonActivation" : " "}
            >
              Batumi
            </div>
            <div
              className="kutaisi cityInGeorgia"
              onClick={() => setCity("kutaisi")}
              id={city === "kutaisi" ? "buttonActivation" : " "}
            >
              Kutaisi
            </div>
            <div
              className="rustavi cityInGeorgia"
              onClick={() => setCity("rustavi")}
              id={city === "rustavi" ? "buttonActivation" : " "}
            >
              Rustavi
            </div>
            <div
              className="gori cityInGeorgia"
              onClick={() => setCity("gori")}
              id={city === "gori" ? "buttonActivation" : " "}
            >
              Gori
            </div>
            <div
              className="zugdidi cityInGeorgia"
              onClick={() => setCity("zugdidi")}
              id={city === "zugdidi" ? "buttonActivation" : " "}
            >
              Zugdidi
            </div>
            <div
              className="borjomi cityInGeorgia"
              onClick={() => setCity("borjomi")}
              id={city === "borjomi" ? "buttonActivation" : " "}
            >
              Borjomi
            </div>
            <div
              className="sighnaghi cityInGeorgia"
              onClick={() => setCity("sighnaghi")}
              id={city === "sighnaghi" ? "buttonActivation" : " "}
            >
              Sighnagi
            </div>
            <div
              className="martvili cityInGeorgia"
              onClick={() => setCity("martvili")}
              id={city === "martvili" ? "buttonActivation" : " "}
            >
              Martvili
            </div>
            <div
              className="chiatura cityInGeorgia"
              onClick={() => setCity("chiatura")}
              id={city === "chiatura" ? "buttonActivation" : " "}
            >
              Chiatura
            </div>
            <div
              className="telavi cityInGeorgia"
              onClick={() => setCity("telavi")}
              id={city === "telavi" ? "buttonActivation" : " "}
            >
              Telavi
            </div>
            <div
              className="kobuleti cityInGeorgia"
              onClick={() => setCity("kobuleti")}
              id={city === "kobuleti" ? "buttonActivation" : " "}
            >
              Kobuleti
            </div>
          </div>
        </div>

        <div className="cityList2">
          <h1>{data[city].title}</h1>
          <p>{data[city].text}</p>
          <div className="cityContainer">
            <div className="cityContainer-1">
              <img src={data[city].image} />
            </div>
            <div className="cityContainer-2">
              <ul>
                <li>
                  {" "}
                  <AiOutlineCheckCircle /> item 1{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineCheckCircle /> item 2{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineCheckCircle /> item 3{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineCheckCircle /> item 4{" "}
                </li>
                <li>
                  {" "}
                  <AiOutlineCheckCircle /> item 5{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
