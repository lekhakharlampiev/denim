import React from 'react';
import './product-card.css';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { img, title, price, mainPhoto, count } = props;
  return (
    <Link to={{
      pathname: '/card',
      state: { title: title, photo: img, price: price}
    }} 
      key={count} 
      className={"page-product__product-card" + (mainPhoto ? " page-product__product-card--main" : "" )}
    >
      <img src={img} alt={title} className="page-product__product-card__img" width="245"/>
      <div className="page-product__product-card__title">{title}</div>
      <div className="page-product__product-card__price"><span>$</span>{price}</div>
    </Link>
  );
}
export default ProductCard
