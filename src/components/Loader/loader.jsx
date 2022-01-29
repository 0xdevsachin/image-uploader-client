import React from "react";
import './loader.css'

function Loader() {
  return (
    <div className="loader">
      <div className="heading">Loading</div>
      <div className="loadingDiv">
          <div className="loading"></div>
      </div>
    </div>
  );
}

export default Loader;
