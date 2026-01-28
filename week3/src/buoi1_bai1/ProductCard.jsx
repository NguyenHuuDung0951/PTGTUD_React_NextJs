import React from 'react'
import './ProductCard.css'

function ProductCard({ image, name, price, onAdd }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <button className="add-button" onClick={onAdd}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
