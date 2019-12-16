import React from 'react';
import './catalog.css';
import { Link } from "react-router-dom";
import Filter from '../Filter/Filter';
import PageHeader from '../PageHeader/PageHeader';
import ProductCard from './../Card/ProductCard';

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
      <div className="page-product__product-list">
        {product.map(({ img, title, price, mainPhoto }, i) => {
          const count = `${title} ${i}`;
          return (
            <div className={`page-product__product-card ${mainPhoto ? `page-product__product-card--main` : ``}`}>
              <ProductCard 
                title={title}
                img={img}
                price={price}
                count={count}
              />
            </div>   
          )
        })}
      </div>
    )

  }
  return (
    <div className="container">
      <PageHeader />
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
            <Filter />
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