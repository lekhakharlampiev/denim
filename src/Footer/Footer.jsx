import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-logo">
          <Link to="/">
            <img src="/img/logo-white.svg" alt="Nimes" />
          </Link>
        </div>
        <div className="footer-menu">
          <ul className="footer-menu__list">
            <li className="footer-menu__item">
              <Link to="/catalog">Shop</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/catalog">Delivery</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/catalog">Service</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/catalog">Sitemap</Link>
            </li>
            <li className="footer-menu__item">
              <Link to="/catalog">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://ru-ru.facebook.com/" className="footer-social--facebook">facebook</a>
          <a href="https://www.instagram.com/" className="footer-social--instagram">instagram</a>
          <a href="https://www.pinterest.ru/" className="footer-social--pinterest">pinterest</a>
          <a href="https://twitter.com/" className="footer-social--twitter">twitter</a>
        </div>
      </footer>
    </div>
  );
}
export default Footer