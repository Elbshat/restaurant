import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="chase the new flavour" />
      <h1 className="header__h1">the key to fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non
        perspiciatis consequatur earum soluta pariatur, aspernatur veniam sed
        sit. Possimus, officiis ipsum?
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header pic" />
    </div>
  </div>
);

export default Header;
