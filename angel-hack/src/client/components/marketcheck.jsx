import {React, useState} from 'react';
import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/marketcheck.css'; // Assuming you have a CSS file for styling
import iconlogo from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/icon.png"
import SearchIcon from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/searchIcon.png"
import AssetsBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/AssetsBanner.png"
import InsuranceBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/insurancebanner.png"


const MarketCheck = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const cities = {
        hcm: 'Hồ Chí Minh',
        hanoi: 'Hà Nội',
        danang: 'Đà Nẵng'
      };
    
      const districts = {
        hcm: ['Củ Chi', 'Bình Tân', 'Tân Bình'],
        hanoi: ['Hoàn Kiếm', 'Ba Đình', 'Đống Đa'],
        danang: ['Hải Châu', 'Sơn Trà', 'Ngũ Hành Sơn']
      };
    
      const streets = {
        hcm: {
          'Củ Chi': ['Trần Văn Trà', 'Nguyễn Văn Khạ'],
          'Bình Tân': ['Kinh Dương Vương', 'Tỉnh Lộ 10'],
          'Tân Bình': ['Lê Văn Sỹ', 'Hoàng Văn Thụ']
        },
        hanoi: {
          'Hoàn Kiếm': ['Đinh Tiên Hoàng', 'Tràng Tiền'],
          'Ba Đình': ['Điện Biên Phủ', 'Nguyễn Thái Học'],
          'Đống Đa': ['Tôn Đức Thắng', 'Nguyễn Lương Bằng']
        },
        danang: {
          'Hải Châu': ['Nguyễn Văn Linh', 'Bạch Đằng'],
          'Sơn Trà': ['Võ Nguyên Giáp', 'Phạm Văn Đồng'],
          'Ngũ Hành Sơn': ['Trường Sa', 'Lê Văn Hiến']
        }
      };
      const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setSelectedDistrict('');
      };
    
      const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
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

      <div className='market-price-container'>
        <span>
            <div className='left-side'>      
                <div className='form-group'>
        <label htmlFor='city'>Which city?</label>
        <select id='city' className='dropdown' value={selectedCity} onChange={handleCityChange}>
          <option value=''>Select a city</option>
          {Object.keys(cities).map(cityKey => (
            <option key={cityKey} value={cityKey}>{cities[cityKey]}</option>
          ))}
        </select>
      </div>

      {selectedCity && (
        <div className='form-group'>
          <label htmlFor='district'>Which district?</label>
          <select id='district' className='dropdown' value={selectedDistrict} onChange={handleDistrictChange}>
            <option value=''>Select a district</option>
            {districts[selectedCity].map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
      )}

      {selectedCity && selectedDistrict && (
        <div className='form-group'>
          <label htmlFor='street-dropdown'>Which street?</label>
          <select id='street-dropdown' className='dropdown'>
            <option value=''>Select a street</option>
            {streets[selectedCity][selectedDistrict].map(street => (
              <option key={street} value={street}>{street}</option>
            ))}
          </select>
        </div>
      )}

      <div className='form-group'>
        <label htmlFor='area'>How much area?</label>
        <input type='text' id='area' className='input-text' placeholder='Enter area in m²' />
      </div>

      <div className='form-group'>
        <label htmlFor='street-input'>Which street?</label>
        <input type='text' id='street-input' className='input-text' placeholder='Enter street name' />
      </div>

      <div className='form-group'>
        <label htmlFor='land-type'>What kind of land?</label>
        <select id='land-type' className='dropdown'>
          <option value=''>Select land type</option>
          <option value='residential'>Residential</option>
          <option value='commercial'>Commercial</option>
          <option value='industrial'>Industrial</option>
        </select>
      </div>

      <div className='form-group'>
        <label>What kind of utility do you have?</label>
        <div className='checkbox-group'>
          <label>
            <input type='checkbox' value='electricity' /> Electricity
          </label>
          <label>
            <input type='checkbox' value='water' /> Water
          </label>
          <label>
            <input type='checkbox' value='internet' /> Internet
          </label>
          <label>
            <input type='checkbox' value='gas' /> Gas
          </label>
        </div>
      </div>
      <div className='calculation-button'>
        <button>Calculation</button></div>
    </div>


        <div className='result-box'>
            <h1>box</h1>
        </div>
        </span>

    </div>
  


    </section>
  );
}

export default MarketCheck;
