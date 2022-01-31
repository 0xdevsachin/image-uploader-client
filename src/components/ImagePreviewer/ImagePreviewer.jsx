import React, { useContext } from "react";
import ContextState from "../../Context/ContextApi";
import './preview.css'

function ImagePreviewer() {
    const { url } = useContext(ContextState)
  return (
    <div className="container">
      <div className="check">
        <div className="check-div">
            <i className="fa fa-check" aria-hidden="true"></i>
        </div>
      </div>
      <div className="upload-heading">Uploaded Successfully!</div>
      <div className="image-link">
          <img alt="loading-img" className="image-preview" src={url} />
      </div>
      <div className="links">
          <input className="url-input" id="myInput" type="text" value={url} disabled />
          <button className="copy-btn" onClick={ () => {
              var copyText = document.getElementById("myInput");
              copyText.select();
              copyText.setSelectionRange(0, 99999);
              navigator.clipboard.writeText(copyText.value);
          }}>Copy Link</button>
      </div>
    </div>
  );
}

export default ImagePreviewer;
