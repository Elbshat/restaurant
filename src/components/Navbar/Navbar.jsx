import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo-box">
        <img src={images.gericht} alt="logo " className="navbar__logo-img" />
      </div>

      <ul className="navbar__list">
        <li className="p__opensans">
          <a href="#home" className="navbar__link">
            home
          </a>
        </li>
        <li className="p__opensans">
          <a href="#about" className="navbar__link">
            about
          </a>
        </li>
        <li className="p__opensans">
          <a href="#menu" className="navbar__link">
            menu
          </a>
        </li>
        <li className="p__opensans">
          <a href="#awards" className="navbar__link">
            home
          </a>
        </li>
        <li className="p__opensans">
          <a href="#contact" className="navbar__link">
            contact
          </a>
        </li>
      </ul>

      <div className="navbar__login">
        <a href="#login">Log In / Register</a>
        <div />
        <a href="/">book table</a>
      </div>

      <div className="navbar__small-nav">
        <GiHamburgerMenu
          color="#FFF"
          fontSize={27}
          onClick={() => SetToggleMenu(true)}
          className="overlay__open"
        />
        {toggleMenu && (
          <div className="navbar__small-nav-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                SetToggleMenu(false);
              }}
            />
            <ul className="navbar__small-nav-list">
              <li className="p__opensans">
                <a href="#home" className="navbar__small-nav-link">
                  home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" className="navbar__small-nav-link">
                  about
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" className="navbar__small-nav-link">
                  menu
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards" className="navbar__small-nav-link">
                  home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" className="navbar__small-nav-link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
