import React from 'react';
import './main.css'
import { Link } from "react-router-dom";
import ProductCard from './../Card/ProductCard';

function Main() {
  const BestsellersCard = [
    {img: "/img/bestsellersCard/img-1.png", title: "Jacket", price: "120"},
    {img: "/img/bestsellersCard/img-2.png", title: "Overalls", price: "140"},
    {img: "/img/bestsellersCard/img-3.png", title: "Jacket", price: "90"},
    {img: "/img/bestsellersCard/img-4.png", title: "Overalls", price: "160"}
  ];
  const renderBestsellersCard = () => {
    return(
      <div className="bestsellers__product-list">
        {BestsellersCard.map(({ img, title, price }, i) => {
          const count = `${title} ${i}`;
          return (
            <ProductCard 
              title={title}
              img={img}
              price={price}
              count={count}
            />  
          );
        })}
      </div>
    );
  }
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
              <button type="button" className="button black-button main-header__offer-button">
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
      <main className="main">
        <section className="bestsellers">
          <div className="bestsellers__header">
            <h3 className="bestsellers__title">
              Bestsellers
            </h3>
            <button type="button" className="button bestsellers__button-show">View all</button>
          </div>
          <div className="bestsellers__product">
            {renderBestsellersCard()}
          </div>
        </section>
        <section className="new-collection">
          <div className="new-collection__img"></div>
          <div className="new-collection__content">
            <p className="new-collection__content-text">
              Street fashion collection
            </p>
            <h4 className="new-collection__content-title">
              Fall 2019
            </h4>
            <button className="button black-button new-collection__content-button">
              Shop now
            </button>
          </div>
        </section>
        <section className="categories">
          <div className="categories__header">
            <h3 className="categories__title">
              Shop by category
            </h3>
            <button type="button" className="button bestsellers__button-show">View all</button>
          </div>
          <div className="categories__content">
            <ul className="categories__list">
              <li className="categories__card">
                <Link to="/catalog">
                  <img className="categories__card__img" src="/img/categories/categories-1.png" alt="Jeans" width="270" height="350" />
                  <div className="categories__card__title">Jeans</div>
                </Link>
              </li>
              <li className="categories__card">
                <Link to="/catalog">
                  <img className="categories__card__img" src="/img/categories/categories-2.png" alt="Shirts" width="270" height="290" />
                  <div className="categories__card__title">Shirts</div>
                </Link>
              </li>
              <li className="categories__card">
                <Link to="/catalog">
                  <img className="categories__card__img" src="/img/categories/categories-3.png" alt="Jackets" width="270" height="349" />
                  <div className="categories__card__title">Jackets</div>
                </Link>
              </li>
              <li className="categories__card">
                <Link to="/catalog">
                  <img className="categories__card__img" src="/img/categories/categories-4.png" alt="Overalls" width="270" height="290" />
                  <div className="categories__card__title">Overalls</div>
                </Link>
              </li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  )
}
export default Main;