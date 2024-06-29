import React, { useState } from 'react';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/assets_function.css';
import cameralogo from '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/camera.png'
import iconlogo from '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/icon.png'

const Assets_function = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length === 2) {
      setFrontImage(URL.createObjectURL(files[0]));
      setBackImage(URL.createObjectURL(files[1]));
    } else {
      alert('Please select both front and back images of the document.');
    }
  };

  const handleClick = (section) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here
  };

  return (
      <section className="header">
        <div className="logo">
          <img src={iconlogo} alt="Lowkey Soul Logo" className="logo-image" />
          <span className="logo-text">Lowkey Soul</span>
        </div>
        <div className='header-bar'>
          <div className="user-options">
          <div className="user-name">
            <div className="user-icon"></div>
            <p>User 1</p>
          </div>
          <button className="activate-account">Activate account →</button>
          <div className='information-box'>
              <div className="information-details">
              <span>
                <p className="information-item" onClick={() => handleClick('Home')}>Home</p>
                <p className="information-item" onClick={() => handleClick('Market Check')}>Market Price</p>
                <p className="information-item" onClick={() => handleClick('Assets')}>Assets</p>
                <p className="information-item" onClick={() => handleClick('Loan')}>Loan</p>
              </span>
            </div>
        </div>
        </div>
        </div>

        <div className='input-image-container'>
        <label htmlFor='upload' className='upload-label'>
          <div className='upload-button'>
            <img className='camera-image' src={cameralogo} alt="camera logo" />
            <h3>Input your assets picture</h3>
          </div>
          <input
            type='file'
            id='upload'
            accept='image/*'
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {frontImage && backImage && (
        <div className='assets-image-container'>
          <div>
            <h3>Front</h3>
            <img src={frontImage} alt='Front of document' className='preview-image' />
          </div>
          <div>
            <h3>Back</h3>
            <img src={backImage} alt='Back of document' className='preview-image' />
          </div>
        </div>
      )}
    </section>
  );
}

export default Assets_function;