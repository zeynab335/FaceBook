import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

// css file
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";

const Header = () => {
  const HeaderIcons = [
    <HomeIcon />,
    <FlagIcon />,
    <StorefrontIcon />,
    <SubscriptionsIcon />,
    <SupervisedUserCircleIcon />,
  ];
  const HeaderBtnIcons = [
    <AddIcon />,
    <ForumIcon />,
    <NotificationsActiveIcon />,
  ];

  return (
    <div className="header">
      {/* Header Left */}
      <div className="header__left">
        <img
          src="https://res.cloudinary.com/dnvinlruh/image/upload/v1662205314/Facebook-Clone-Project/facebook_vh6o4f.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="header__search__icon" />
          <input type="text" placeholder="Search For..." />
        </div>
      </div>

      {/* Header Center */}
      <div className="header__middle">
        {HeaderIcons.map((icon, index) => (
          <div
            className={`header__option ${
              index === 0 ? "header__option--active" : ""
            }`}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Header right */}
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204970/cld-sample.jpg" />
          <h4> ZEZE </h4>
        </div>
        {HeaderBtnIcons.map((icon) => (
          <IconButton> {icon} </IconButton>
        ))}
      </div>
    </div>
  );
};

export default Header;
