import {React, useState, useEffect} from 'react';
import axios from 'axios';

import '/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/client/styling/marketcheck.css'; // Assuming you have a CSS file for styling
import iconlogo from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/icon.png"
import SearchIcon from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/searchIcon.png"
import AssetsBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/AssetsBanner.png"
import InsuranceBanner from "/Volumes/Extreme Pro/Personal/AngelHack/angel-hack/src/assets/insurancebanner.png"


const MarketCheck = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [area, setArea] = useState('');
    const [streetInput, setStreetInput] = useState('');
    const [landType, setLandType] = useState('');
    const [utilities, setUtilities] = useState([]);
    const [result, setResult] = useState('');
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
  
  
    useEffect(() => {
      axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
        .then(response => {
          setCities(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the data!", error);
        });
    }, []);
  
    const handleCityChange = (event) => {
        const selectedCityId = event.target.selectedOptions[0].getAttribute('data-id');
        setSelectedCity(event.target.value);
        setSelectedDistrict('');
        setSelectedWard('');
        setWards([]);
    
        const selectedCityData = cities.find(city => city.Id === selectedCityId);
        setDistricts(selectedCityData ? selectedCityData.Districts : []);
      };
    
      const handleDistrictChange = (event) => {
        const selectedDistrictId = event.target.selectedOptions[0].getAttribute('data-id');
        setSelectedDistrict(event.target.value);
        setSelectedWard('');
    
        const selectedDistrictData = districts.find(district => district.Id === selectedDistrictId);
        setWards(selectedDistrictData ? selectedDistrictData.Wards : []);
      };
    
      const handleWardChange = (event) => {
        setSelectedWard(event.target.value);
      };
    
      const handleAreaChange = (event) => {
        setArea(event.target.value);
      };
    
      const handleStreetInputChange = (event) => {
        setStreetInput(event.target.value);
      };
    
      const handleLandTypeChange = (event) => {
        setLandType(event.target.value);
      };
    
      const handleUtilityChange = (event) => {
        const value = event.target.value;
        if (utilities.includes(value)) {
          setUtilities(utilities.filter(utility => utility !== value));
        } else {
          setUtilities([...utilities, value]);
        }
      };
    
      const handleCalculation = () => {
        const cityName = cities.find(city => city.Id === selectedCity)?.Name || '';
        const districtName = districts.find(district => district.Id === selectedDistrict)?.Name || '';
        const wardName = wards.find(ward => ward.Id === selectedWard)?.Name || '';
    
        axios.get('http://127.0.0.1:5000/calculate', {
          params: {
            city: cityName,
            district: districtName,
            ward: wardName,
            street: streetInput
          }
        })
        .then(response => {
          setResult(response.data.message);
        })
        .catch(error => {
          console.error("There was an error fetching the result!", error);
        });
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
                {cities.map(city => (
                  <option key={city.Id} value={city.Id} data-id={city.Id}>{city.Name}</option>
                ))}
              </select>
            </div>

            {selectedCity && (
              <div className='form-group'>
                <label htmlFor='district'>Which district?</label>
                <select id='district' className='dropdown' value={selectedDistrict} onChange={handleDistrictChange}>
                  <option value=''>Select a district</option>
                  {districts.map(district => (
                    <option key={district.Id} value={district.Id} data-id={district.Id}>{district.Name}</option>
                  ))}
                </select>
              </div>
            )}

            {selectedCity && selectedDistrict && (
              <div className='form-group'>
                <label htmlFor='ward'>Which ward?</label>
                <select id='ward' className='dropdown' value={selectedWard} onChange={handleWardChange}>
                  <option value=''>Select a ward</option>
                  {wards.map(ward => (
                    <option key={ward.Id} value={ward.Id} data-id={ward.Id}>{ward.Name}</option>
                  ))}
                </select>
              </div>
            )}

            <div className='form-group'>
              <label htmlFor='area'>How much area?</label>
              <input type='text' id='area' className='input-text' value={area} onChange={handleAreaChange} placeholder='Enter area in m²' />
            </div>

            <div className='form-group'>
              <label htmlFor='street-input'>Which street?</label>
              <input type='text' id='street-input' className='input-text' value={streetInput} onChange={handleStreetInputChange} placeholder='Enter street name' />
            </div>

            <div className='form-group'>
              <label htmlFor='land-type'>What kind of land?</label>
              <select id='land-type' className='dropdown' value={landType} onChange={handleLandTypeChange}>
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
                  <input type='checkbox' value='electricity' checked={utilities.includes('electricity')} onChange={handleUtilityChange} /> Electricity
                </label>
                <label>
                  <input type='checkbox' value='water' checked={utilities.includes('water')} onChange={handleUtilityChange} /> Water
                </label>
                <label>
                  <input type='checkbox' value='internet' checked={utilities.includes('internet')} onChange={handleUtilityChange} /> Internet
                </label>
                <label>
                  <input type='checkbox' value='gas' checked={utilities.includes('gas')} onChange={handleUtilityChange} /> Gas
                </label>
              </div>
            </div>
            <div className='calculation-button'>
              <button onClick={handleCalculation}>Calculation</button>
            </div>
          </div>

          <div className='result-box'>
            <h1>{result}</h1>
          </div>
        </span>
      </div>
    </section>
  );
}

export default MarketCheck;