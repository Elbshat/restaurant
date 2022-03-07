import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus__overlay flex__center">
      <img src={images.G} alt=" g letter" />
    </div>

    <div className="aboutus__content flex__center">
      <div className="aboutus__content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          quibusdam similique eligendi sit animi officiis maiores quo eveniet
          voluptatibus doloremque?
        </p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="aboutus__content-knife">
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="aboutus__content-history">
        <h1 className="headtext__cormorant">our history</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          quibusdam similique eligendi sit animi officiis maiores quo eveniet
          voluptatibus doloremque?
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
