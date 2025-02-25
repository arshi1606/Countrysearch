import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import CountryRegionPage from './pages/CountryRegionPage';
import SelectedRegionPage from './pages/SelectedRegionPage';
import './index.css';
import './style/style.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('Independent');
  const [region, setRegion] = useState(''); 

  return (
    <Router>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        region={region}       
        setRegion={setRegion}  
      />
      <Routes>
      
        <Route 
          path="/" 
          element={<Homepage searchTerm={searchTerm} filter={filter} region={region} />} 
        />
        <Route path="/country/:countryName" element={<CountryDetailsPage />} />
        <Route path="/country-region" element={<CountryRegionPage />} />
        <Route path="/region/:regionName" element={<SelectedRegionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
