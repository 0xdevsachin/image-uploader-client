import React, { useContext } from "react";
import "./inputContainer.css";
import BgImage from "../../assets/InputBg.svg";
import ContextState from "../../Context/ContextApi";
function Image() {
  const { setLoader, upload } = useContext(ContextState)
  const handleChange = (data) => {
    setLoader(true)
    upload(data);
  }
  const handleDrag = (e) =>{
    e.preventDefault()
  }
  const handleDrop = (e) =>{
    e.preventDefault();
    let file = e.dataTransfer.files[0]
    handleChange(file)
  }
  return (
    <div onDrop={handleDrop}
      onDragOver={handleDrag}
      >
      <div className="input-container">
        <label className="inputBox">
          <input accept="image/*" onChange={(e) => {
            handleChange(e.target.files[0])
          }}
          
          type="file" />
        </label>
        <img src={BgImage} alt="bg" />
        <span className="drag">Drag & Drop your image here</span>
      </div>
      <div>
        <span className="drag">or</span>
        <input accept="image/*" onChange={(e) => {
          handleChange(e.target.files[0])
          }} id='btn' type="file" />
        <label htmlFor="btn" className="button">Upload Image</label>
      </div>
    </div>
  );
}

export default Image;
