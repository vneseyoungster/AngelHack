
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './client/components/homepage'; // Assuming Header is in the same directory
import ActivatePage from './client/components/activatepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/activate" element={<ActivatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
