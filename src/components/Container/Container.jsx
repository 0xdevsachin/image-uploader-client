import React from 'react';
import Image from '../ImageInput/Image';
import './container.css'

function Container() {
  return (
      <div className='container'>
          <div className='heading'>Upload your image</div>
          <div className='sub-heading'>File should be Jpg, Jpeg and Png</div>
          <Image />
      </div>
  );
}

export default Container;
