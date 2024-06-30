import React, { useState } from 'react';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/testing_mode.css'; // Changed to relative path
import iconlogo from '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/LogoMain.png'; // Changed to relative path

const I_Test = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/analyze-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAnalysisResult(`Analysis Result:\n${data.analysisResult}`);
    } catch (error) {
      console.error('Error:', error);
      setAnalysisResult('Error processing image');
    }
  };

  const handleClick = (page) => {
    console.log(`Navigating to ${page}`);
    // Add navigation logic if needed
  };

  return (
    <section className="header">
      <div className="logo">
        <img src={iconlogo} alt="Lowkey Soul Logo" className="logo-image" />
        <span className="logo-text">Financial Inclusion Solution</span>
      </div>
      <div className="header-bar">
        <div className="user-options">
          <div className="user-name">
            <div className="user-icon"></div>
            <p>User 1</p>
          </div>
          <button className="activate-account">Activate account →</button>
          <div className="information-box">
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
        <div className="result">
          {analysisResult}
        </div>
      </div>
    </section>
  );
};

export default I_Test;
