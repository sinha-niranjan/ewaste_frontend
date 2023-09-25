import React from "react";
import "./HomeDetail.css";

import img1 from "../../assets/backgroun removed/ewaste.png";
import img2 from "../../assets/backgroun removed/danger.jpeg";
import img3 from "../../assets/backgroun removed/types.png";

import { AiFillCheckCircle, AiFillYoutube } from "react-icons/ai";
import Heroic from "../Heroic/Heroic";
import LocationSearch from "../LocationSearch/LocationSearch";

const HomeDetail = () => {
  return (
    <>
      <Heroic />
      <LocationSearch />
      <div className="HomeDetail">
        <div className="detail">
          <div className="detail_image">
            {" "}
            <img src={img1} alt="" />
          </div>
          <div className="detail_container">
            <h2 className="detail_heading green">What is E-Waste ?</h2>
            <p className="para ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuntenim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo con
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
              cupidatat non proident, sunt in{" "}
            </p>
            <div className="points">
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                reiciendis!
              </div>
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eligendi
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="box ">
                <p>How to Learn ?</p>
              </div>

              <AiFillYoutube className="youtube" />
            </div>
          </div>
        </div>

        <div className="detail" style={{ backgroundColor: "white" }}>
          <div className="detail_container">
            <h2 className="detail_heading green">How it is dangerous ?</h2>
            <p className="para ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuntenim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo con
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
              cupidatat non proident, sunt in{" "}
            </p>
            <div className="points">
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                reiciendis!
              </div>
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eligendi
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="box ">
                <p>How to Learn ?</p>
              </div>

              <AiFillYoutube className="youtube" />
            </div>
          </div>
          <div className="detail_image">
            {" "}
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="detail">
          <div className="detail_image">
            {" "}
            <img style={{ width: "500px" }} src={img3} alt="" />
          </div>
          <div className="detail_container">
            <h2 className="detail_heading green">
              How many types of E-waste ?
            </h2>
            <p className="para ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuntenim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo con
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat
              cupidatat non proident, sunt in{" "}
            </p>
            <div className="points">
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                reiciendis!
              </div>
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="para point">
                <AiFillCheckCircle className="check" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda eligendi
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="box ">
                <p>How to Learn ?</p>
              </div>

              <AiFillYoutube className="youtube" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDetail;
