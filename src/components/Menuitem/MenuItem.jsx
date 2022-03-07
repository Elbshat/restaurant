import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="menuitem">
    <div className="menuitem__head">
      <div className="menuitem__name">
        <p className="p__cormorant" style={{ color: "#dcca78" }}>
          {title}
        </p>
      </div>

      <div className="menuitem__dash" />

      <div className="menuitem__price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="menuitem__sub">
      <p className="p__opensans" style={{ color: "#aaa" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
