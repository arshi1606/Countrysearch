import React from 'react';
import '../style/Navbar.css';  
import Logo from "../assets/logo.png";
import { TbPointerSearch } from "react-icons/tb";
import {Link} from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm, filter, setFilter, region, setRegion }) => {
  return (
    <header className="header">
      <nav className="nav">
        
        <div  className="logo sm"><Link to="/">
          <img 
            src={Logo} 
            alt="logo" 
            className="h-25 w-40 object-cover rounded-full align-left" 
          />
          </Link>
        </div>
    
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>

      
        <div className="filters">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select-dropdown"
          >
            <option value="all">All</option>
            <option value="Independent">Independent</option>
            <option value="Dependent">Dependent</option>
          </select>

        
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="select-dropdown"
          >
            <option value="">Select Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>

       
      </nav>
    </header>
  );
};

export default Header;
