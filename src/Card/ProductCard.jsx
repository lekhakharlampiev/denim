import React from 'react';
import './product-card.css';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { img, title, price, count } = props;
  return (
    <Link to={{
      pathname: '/card',
      hash: '#product-title',
      state: { title: title, photo: img, price: price}
    }} 
      key={count} 
      className="product-card"
    >
      <img src={img} alt={title} className="product-card__img" width="245"/>
      <div className="product-card__title">{title}</div>
      <div className="product-card__price"><span>$</span>{price}</div>
    </Link>
  );
}
export default ProductCard
