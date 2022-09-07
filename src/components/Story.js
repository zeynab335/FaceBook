import { Avatar } from "@material-ui/core";
import React from "react";

import "./Story.css";

function Story({ profileImg, title, image }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      <Avatar src={profileImg} className="profile__image" />
      <h4> {title} </h4>
    </div>
  );
}

export default Story;
