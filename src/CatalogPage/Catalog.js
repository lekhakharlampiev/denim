import React from 'react';
import './catalog.css';
import { Link } from "react-router-dom";
const product = [
  {img: "/img/catalog/product-1.png", title: "Jacket", price: "40", mainPhoto: false},
  {img: "/img/catalog/product-2.png", title: "Jacket", price: "70", mainPhoto: false},
  {img: "/img/catalog/product-3.png", title: "Jacket", price: "60", mainPhoto: false},
  {img: "/img/catalog/product-4.png", title: "Jacket", price: "50", mainPhoto: false},
  {img: "/img/catalog/product-5.png", title: "Jacket", price: "40", mainPhoto: false},
  {img: "/img/catalog/product-6.png", title: "Jacket", price: "110", mainPhoto: false},
  {img: "/img/catalog/product-8.png", title: "Jacket", price: "35", mainPhoto: false},
  {img: "/img/catalog/product-9.png", title: "Jacket", price: "85", mainPhoto: false},
  {img: "/img/catalog/product-10.png", title: "Jacket", price: "160", mainPhoto: true},
];

function Catalog() {
  function renderBreadCrumb() {
    return (
      <div className="page-info__page-navigation">
        <Link to="/">All categories</Link>
        <Link to="/">Woman</Link>
        <Link to="/">Jackets</Link>
      </div>  
    )
  }
  function renderCatalogCard() {
    return (
      <ul className="page-product__product-list">
        {product.map(({ img, title, price, mainPhoto }, i) => {
          const count = i + 1;
          return (
            <li key={count} className={"page-product__product-card" + (mainPhoto ? " page-product__product-card--main" : "" )}>
              <img src={img} alt={title} className="page-product__product-card__img" width="245"/>
              <div className="page-product__product-card__title">{title}</div>
              <div className="page-product__product-card__price"><span>$</span>{price}</div>
            </li>
          )
        })}
      </ul>
    )

  }
  return (
    <div className="container">
      <header className="catalog-header">
        <nav className="catalog-header__menu">
          <ul className="catalog-header__menu-list">
            <li className="catalog-header__menu-item">
              <Link to="/catalog">Woman</Link>
            </li>
            <li className="catalog-header__menu-item">
              <Link to="/catalog">Man</Link>
            </li>
            <li className="catalog-header__menu-item">
              <Link to="/catalog">New</Link>
            </li>
          </ul>
        </nav>
        <div className="catalog-logo">
          <Link to="/">
            <img src="/img/Nîmes.svg" alt="Nimes" width="75"/>
          </Link>
        </div>
        <div className="catalog-header__user-option">
          <div className="catalog-header__basket">
            <Link to="/basket">Корзина</Link>
          </div>
          <div className="catalog-header__search">
            <button type="button" className="button catalog-header__search-button">Поиск</button>
          </div>
        </div>
      </header>
      <main className="page-body">
        <section className="page-info">
          <div className="page-info__content">
            {renderBreadCrumb()}
            <h2 className="page-title">
              Denim Collection<br /> Fall 2019
            </h2>
          </div>
          <div className="page-info__img">
            <img src="/img/page-img.png" alt="page" width="300"/>
          </div>
        </section>
        <section className="page-product">
          <div className="page-product__filter">
            <input type="text" name="filter" />
          </div>
          <div className="page-product__container">
            {renderCatalogCard()}
          </div>
          <div className="page-product__selection-output">
            <div className="selection-output__container">
              <div className="selection-output__caption">Showing 9 of 45 items</div>
              <div className="selection-output__indicator">
                <div className="selection-output__indicator__inner"></div>
              </div>
              <button type="button" className="button black-button selection-output__button">
                Load more
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Catalog