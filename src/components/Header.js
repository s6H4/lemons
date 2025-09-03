import React from 'react';
import { Link } from 'react-router-dom';
import './../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/info">Информация</Link>
      </nav>
    </header>
  );
};

export default Header;
