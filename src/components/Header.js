import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../css/header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header className="header">
      <a href="#" className="logo">Lemon.Fresh</a>
      <nav>
        <Link 
          to="/" 
          className={activeLink === '/' ? 'active' : ''}
          onClick={() => setActiveLink('/')}
        >
          Главная
        </Link>
        <Link 
          to="/about" 
          className={activeLink === '/about' ? 'active' : ''}
          onClick={() => setActiveLink('/about')}
        >
          О нас
        </Link>
        <Link 
          to="/info" 
          className={activeLink === '/info' ? 'active' : ''}
          onClick={() => setActiveLink('/info')}
        >
          Каталог
        </Link>
        <div className="animation"></div>
      </nav>
    </header>
  );
};

export default Header;
