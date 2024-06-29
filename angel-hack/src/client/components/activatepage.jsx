import React from 'react';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/activatepage.css'; // Assuming you have a CSS file for styling
import iconlogo from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/icon.png"
import SearchIcon from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/searchIcon.png"



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


      <div className='activate-container'>
        <span className='activate-box'>
            <div className='progress-bar'>
                <div className='progress'>
                    <h3>Progress</h3>
                </div>
            </div>
            <div className='detail-input'>Details</div>
        </span>
      </div>


      
      

    </section>
  );
}

export default Header;
