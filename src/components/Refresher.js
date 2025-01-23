import React from "react";
import "./refresh.css";
import anim from "../assets/images/ss-logo.png";
export default function Refresher() {
  return (
    <div className="refresher-container">
      <img src={anim} alt="" />
    </div>
  );
}
