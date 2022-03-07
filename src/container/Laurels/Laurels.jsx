import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

import "./Laurels.css";

const Laurels = () => {
  return (
    <div className="app__wrapper app__bg section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="laurels__awards">
          {data.awards.map((award) => (
            <div key={award.title} className="laurels__awards-card">
              <img src={award.imgUrl} alt="award" />
              <div className="laurels__awards-card-content">
                <p className="p__cormorant" style={{ color: "#dcca87" }}>
                  {award.title}
                </p>
                <p className="p__cormorant">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
