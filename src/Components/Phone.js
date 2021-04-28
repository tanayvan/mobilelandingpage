import React from "react";
import phonevideo from "../assests/updated gif.gif";
var GifPlayer = require("react-gif-player");

export default function Phone() {
  return (
    <div>
      <GifPlayer
        gif={phonevideo}
        still={phonevideo}
        autoplay
        style={{ width: "100%" }}
      />
    </div>
  );
}
