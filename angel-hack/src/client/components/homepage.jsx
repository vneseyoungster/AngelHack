import React from 'react';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/homepage.css'; // Assuming you have a CSS file for styling
import iconlogo from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/icon.png"
import SearchIcon from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/searchIcon.png"
import AssetsBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/AssetsBanner.png"
import InsuranceBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/insurancebanner.png"


const Header = () => {
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
              <p className="information-item" onClick={() => handleClick('Assets')}>Assets</p>
              <p className="information-item" onClick={() => handleClick('Loan')}>Loan</p>
            </span>
          </div>
      </div>
      </div>
      </div>
      





      <div className='information-banner'>
        <div className='banner-title'>
            <h1>Let's activate your account</h1>
            <p>Hello, we are here to help you protecting your property</p>
        </div>
        <div className='service-title'>
            <h1>Get a Loan</h1>
            <span className='service-name'>
                <div className='service-assets'>Assets
                    <div><img src={AssetsBanner} alt="Assets Banner" /></div>
                </div>
                <div className='service-insurance'>Insurance
                    <div><img src={InsuranceBanner} alt="Insurance Banner" /></div>
                </div>

            </span>
        </div>
      </div>
      
      

    </section>
  );
}

export default Header;
