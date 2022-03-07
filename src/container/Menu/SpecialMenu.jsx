import React from "react";
import { data, images } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="specialmenu flex__center section__padding">
    <div className="specialmenu__title">
      <SubHeading title="menu that fits your palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="specialmenu__menu">
      <div className="specialmenu__menu-hot flex__center">
        <p className="specialmenu__menu-heading">Hot Drinks</p>
        <div className="specialmenu__menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="specialmenu__menu-img">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="specialmenu__menu-cold flex__center">
        <p className="specialmenu__menu-heading">Cold Drinks</p>
        <div className="specialmenu__menu-items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              tags={cocktails.tags}
              price={cocktails.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="specialmenu__button">
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
