import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Lemonz</h1>
      <nav>
        <a href="#home" style={{ color: 'white', marginRight: '1rem' }}>Главная</a>
        <a href="#about" style={{ color: 'white', marginRight: '1rem' }}>О нас</a>
        <a href="#contact" style={{ color: 'white' }}>Контакты</a>
      </nav>
    </header>
  );
};

export default Header;
