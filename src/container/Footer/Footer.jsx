import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="footer__links">
      <div className="footer__links-contact">
        <h1 className="footer__headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York ,USA</p>
        <p className="p__opensans">+55 5555-5555-555</p>
        <p className="p__opensans">+44 4444-4444-444</p>
      </div>
      <div className="footer__links-logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className=" spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="footer__links-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer__links-work">
        <h1 className="footer__headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 am - 12.00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">05:00 am - 02.00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 , All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
