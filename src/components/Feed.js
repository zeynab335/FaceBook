import React from "react";
import StoryReel from "./StoryReel";

import "./Feed.css";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="Feed">
      {/* storyReel */}
      <StoryReel />
      {/* Posts  */}
      <Posts />
    </div>
  );
}

export default Feed;
