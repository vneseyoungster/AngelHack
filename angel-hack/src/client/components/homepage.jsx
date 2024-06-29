import React from 'react';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/homepage.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <img src="path_to_logo" alt="Lowkey Soul Logo" className="logo-image" />
        <span className="logo-text">Lowkey Soul</span>
      </div>
      <div className="user-options">
        <div className="user-name">
          <div className="user-icon"></div>
          <span>Name User</span>
        </div>
        <button className="activate-account">Activate account →</button>
        <input type="text" className="search-bar" placeholder="Search" />
        <button className="search-button">Search</button>
        <button className="create-button">Create</button>
      </div>

    </section>
  );
}

export default Header;
