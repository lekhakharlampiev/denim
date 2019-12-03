import React from 'react';
import './main.css'
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="container">
      <header className="main-header">
        <div className="main-logo">
          <img src="/img/Nîmes.svg" alt="Nimes" />
        </div>
        <div className="main-header__content">
          <nav className="main-header__menu">
            <ul className="main-header__menu-list">
              <li className="main-header__menu-item">
                <Link to="/catalog">Woman</Link>
              </li>
              <li className="main-header__menu-item">
                <Link to="/catalog">Man</Link>
              </li>
              <li className="main-header__menu-item">
                <Link to="/catalog">New</Link>
              </li>
            </ul>
            <div className="main-header__arrow-button">
              <button type="button" className="button main-header__arrow-button--down" />
            </div>
          </nav>
          <div className="main-header__offer">
            <div className="main-header__offer-text">
              <p className="main-header__offer-slogan">
                The quality you deserve
                            </p>
              <h1 className="main-header__main-title">DENIM</h1>
              <button type="button" className="button main-header__offer-button">
                Check new collection
                            </button>
            </div>
            <div className="main-header__img">
              <img src="/img/main-header-img.png" alt="DENIM" width="430" />
            </div>
          </div>
          <div className="main-header__info-block">
            <div className="main-header__info-block-option">
              <div className="main-header__basket">
                <Link to="/basket">Корзина</Link>
              </div>
              <div className="main-header__search">
                <button type="button" className="button main-header__search-button">Поиск</button>
              </div>
            </div>
            <div className="main-header__social">
              <a href="https://ru-ru.facebook.com/">Facebook</a>
              <a href="https://www.instagram.com/">Instagram</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Main;