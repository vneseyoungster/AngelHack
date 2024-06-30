
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './client/components/homepage'; // Assuming Header is in the same directory
import ActivatePage from './client/components/activatepage'
import Assets_function from './client/components/assets_function';
import MarketCheck from './client/components/marketcheck'
import PropertyScan from './client/components/propertyscan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/activate" element={<ActivatePage />} />
        <Route path="/assets-evaluate" element={<Assets_function />} />
        <Route path="/marketcheck" element={<MarketCheck />} />
        <Route path="/propertyscan" element={<PropertyScan />} />



      </Routes>
    </Router>
  );
}

export default App;
