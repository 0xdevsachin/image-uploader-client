import React from "react";
import "./inputContainer.css";
import BgImage from "../../assets/InputBg.svg";
function Image() {
  return (
    <div>
      <div className="input-container">
        <label className="inputBox">
          <input accept="image/*" type="file" />
        </label>
        <img src={BgImage} alt="bg" />
        <span className="drag">Drag & Drop your image here</span>
      </div>
      <div>
        <span className="drag">or</span>
        <input accept="image/*" id='btn' type="file" />
        <label htmlFor="btn" className="button">Upload Image</label>
      </div>
    </div>
  );
}

export default Image;
