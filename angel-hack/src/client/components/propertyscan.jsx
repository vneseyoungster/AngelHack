import React, { useState } from 'react';
import axios from 'axios';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/propertyscan.css'; // Assuming you have a CSS file for styling
import iconlogo from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/icon.png";
import SearchIcon from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/searchIcon.png";
import AssetsBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/AssetsBanner.png";
import InsuranceBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/insurancebanner.png";

const PropertyScan = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [imageAnalysis, setImageAnalysis] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:3000/analyze-image', { imageUrl });

        const analysisResult = response.data;
        console.log('Image URL:', imageUrl);
        console.log('Analysis Result:', analysisResult);

        setImageAnalysis(analysisResult);
      } catch (error) {
        console.error('Error processing image URL:', error);
      }
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
        <div className="property-scan">
          <h1>Property Document Scan</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="imageUrl">Paste Image URL:</label>
              <input 
                type="text" 
                id="imageUrl" 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                placeholder="Enter image URL" 
              />
              {imageUrl && <img src={imageUrl} alt="Image Preview" className="image-preview" />}
            </div>
            <button type="submit">Submit</button>
          </form>
          {imageAnalysis && (
            <div className="image-analysis">
              <h2>Image Analysis:</h2>
              <pre>{JSON.stringify(imageAnalysis, null, 2)}</pre>
            </div>
          )}
        </div>
      </section>
    );
}

export default PropertyScan;
