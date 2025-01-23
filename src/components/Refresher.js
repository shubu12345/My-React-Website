import React from "react";
import "./refresh.css";
import loading from "../assets/images/computer.gif";
export default function Refresher() {
  return (
    <>
      <div className="refresher-container">
        <img className="computer" src={loading} alt="loading" />
      </div>
      <div className="overlay"></div>
    </>
  );
}
