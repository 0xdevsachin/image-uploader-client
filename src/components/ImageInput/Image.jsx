import React from "react";
import "./inputContainer.css";
import BgImage from "../../assets/InputBg.svg";
function Image() {
  return (
    <div className="input-container">
      <label className="inputBox">
        <input accept="image/*" type="file" />
      </label>
      <img src={BgImage} />
    </div>
  );
}

export default Image;
