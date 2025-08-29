import React from 'react';
import { Link } from 'react-router-dom';
import './../css/style.css';

const Header = () => {
  return (
    <header>
      <h1>Lemons</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/info">Информация</Link>
      </nav>
    </header>
  );
};

export default Header;
