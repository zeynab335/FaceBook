import React from "react";
import Story from "./Story";

function StoryReel() {
  return (
    <div style={{ display: "flex" }}>
      <Story
        profileImg="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204970/cld-sample.jpg"
        image="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204971/cld-sample-3.jpg"
        title="Zeze Mahmoud"
      />
      <Story
        profileImg="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204953/samples/people/boy-snow-hoodie.jpg"
        image="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204972/cld-sample-4.jpg"
        title="Addam Moh"
      />
      <Story
        profileImg="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204953/samples/people/boy-snow-hoodie.jpg"
        image="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204972/cld-sample-4.jpg"
        title="Addam Moh"
      />
      <Story
        profileImg="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204953/samples/people/boy-snow-hoodie.jpg"
        image="https://res.cloudinary.com/dnvinlruh/image/upload/v1662204972/cld-sample-4.jpg"
        title="Addam Moh"
      />
    </div>
  );
}

export default StoryReel;
