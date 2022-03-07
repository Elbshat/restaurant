import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding ">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Findus
      </h1>
      <div className="findus__content">
        <p className=" p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>

        <p
          className=" p__cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className=" p__opensans">Mon - Fri: 10:00 AM - 2.00 PM</p>
        <p className=" p__opensans">Sat - Sun: 10:00 AM - 5.00 PM</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
