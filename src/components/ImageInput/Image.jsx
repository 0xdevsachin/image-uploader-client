import React, { useContext } from "react";
import "./inputContainer.css";
import BgImage from "../../assets/InputBg.svg";
import ContextState from "../../Context/ContextApi";
function Image() {
  const { setFiles, setLoader } = useContext(ContextState)
  return (
    <div>
      <div className="input-container">
        <label className="inputBox">
          <input accept="image/*" onChange={(e) => {
            setFiles(e.target.files[0])
            setLoader(true)
          }}  type="file" />
        </label>
        <img src={BgImage} alt="bg" />
        <span className="drag">Drag & Drop your image here</span>
      </div>
      <div>
        <span className="drag">or</span>
        <input accept="image/*" onChange={(e) => {
            setFiles(e.target.files[0])
            setLoader(true)
          }} id='btn' type="file" />
        <label htmlFor="btn" className="button">Upload Image</label>
      </div>
    </div>
  );
}

export default Image;
