import React from 'react';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/activatepage.css'; // Assuming you have a CSS file for styling
import iconlogo from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/icon.png"
import SearchIcon from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/searchIcon.png"



const ActivatePage = () => {
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


        <div className='activate-container'>
          <div className='activate-title'>
            <h2>Let's activate your account</h2>
          </div>
          <div className='activate-paragraph'>
            <h3>Just a couple of minutes</h3>
          </div>
          <form className='activate-form'>
            <div className='form-group'>
              <label htmlFor='firstName'>First name *</label>
              <input type='text' id='firstName' placeholder='Zenta' />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last name *</label>
              <input type='text' id='lastName' placeholder='Nish' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email *</label>
              <input type='email' id='email' placeholder='email@domain.com' />
            </div>
            <div className='form-group phone-group'>
              <label htmlFor='phone'>Phone Number *</label>
              <div className='phone-input'>
                <span className="flag">🇻🇳</span>
                <span className="country-code">+84</span>
                <input type='text' id='phone' placeholder='333 570 449' />
              </div>
            </div>
          </form>
          <div className='next-button'>
            <button>
              <p>Next</p>
            </button>
          </div>
        </div>

    </section>
  );
}

export default ActivatePage;
