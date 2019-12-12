import React from 'react';
import './page-header.css';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <header className="page-header">
        <nav className="page-header__menu">
          <ul className="page-header__menu-list">
            <li className="page-header__menu-item">
              <Link to="/page">Woman</Link>
            </li>
            <li className="page-header__menu-item">
              <Link to="/page">Man</Link>
            </li>
            <li className="page-header__menu-item">
              <Link to="/page">New</Link>
            </li>
          </ul>
        </nav>
        <div className="page-logo">
          <Link to="/">
            <img src="/img/Nîmes.svg" alt="Nimes" width="75"/>
          </Link>
        </div>
        <div className="page-header__user-option">
          <div className="page-header__basket">
            <Link to="/basket">Корзина</Link>
          </div>
          <div className="page-header__search">
            <button type="button" className="button page-header__search-button">Поиск</button>
          </div>
        </div>
      </header>
  );
};