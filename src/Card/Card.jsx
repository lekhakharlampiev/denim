import React from 'react';
import './card.css';
import './../Filter/filter.css';
import PageHeader from '../PageHeader/PageHeader';

function ProductCard() {
  return (
    <div className="container">
      <PageHeader />
      <section className="product-full-card">
        <div className="product-slider">
          <button type="button" className="button product-slider-arrow product-slider--previous" />
          <button type="button" className="button product-slider-arrow product-slider--next" />
          <div className="product-slider__full-img">
            <img src="/img/card/slider-1.png" alt="product" width="400" />
          </div>
          <div className="product-slider__list-img">
            <img src="/img/card/slider-2.png" alt="product" width="85" />
            <img src="/img/card/slider-3.png" alt="product" width="85" />
            <img src="/img/card/slider-4.png" alt="product" width="85" />
            <img src="/img/card/slider-5.png" alt="product" width="85" />
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-info__title">Overalls</h2>
          <p className="product-info__description">
            Overalls in washed organic cotton denim. 
            Collar, button fly, and adjustable belt 
            at waist. Chest pockets with flap. Long, 
            gently flared sleeves and straight legs 
            with front pockets and back pockets.
          </p>
          <div className="product-info__color">
            <span className="product-info__color-title">Color</span>
            <span className="product-info__color-valid selection-color">
              <input type="checkbox" id="silver" value="silver" />
              <label htmlFor="silver" className="checkbox-color checkbox-color--silver" />
              <input type="checkbox" id="blue-gray" value="blue-gray" />
              <label htmlFor="blue-gray" className="checkbox-color checkbox-color--blue-gray" />
              <input type="checkbox" id="gray" value="gray" />
              <label htmlFor="gray" className="checkbox-color checkbox-color--gray" />
            </span>
          </div>
          <div className="product-info__size">
            <div className="product-info__size-title">Size</div>
            <div className="product-info__size-options">
              <span>xs</span>
              <span className="valid">s</span>
              <span>m</span>
              <span>l</span>
              <span>xl</span>
            </div>  
          </div>
          <div className="product-info__price">
            <span>$<span>160</span></span>
          </div>
          <button type="button" className="button black-button product-info__button">Add to cart</button>
        </div>
      </section>
    </div>
  )
}
export default ProductCard;