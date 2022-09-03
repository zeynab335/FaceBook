import React from "react";
import SearchIcon from "@material-ui/icons/Search";

// css file
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* Header Left */}
      <div className="header__left">
        <img
          src="https://res.cloudinary.com/dnvinlruh/image/upload/v1662205314/Facebook-Clone-Project/facebook_vh6o4f.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
        </div>
      </div>

      {/* Header Center */}
      <div className="header__middle"></div>

      {/* Header right */}
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
