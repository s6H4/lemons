import React from 'react';
import { Link } from 'react-router-dom';
import './../css/header.css';

const Header = () => {
  return (
    <header class="header">
      <a href="#" class="logo">Lemon.Fresh</a>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Catalog</a>
        <a href="#">Services</a>
        <a href="#">text5</a>
        <div class="animation home">
        </div>
      </nav>
    </header>
  );
};

export default Header;
