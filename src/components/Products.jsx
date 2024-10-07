import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import './Product.css'; // Import the custom CSS
import 'animate.css'; // Import animate.css for scroll animations

const Products = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const addtocart = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    const productCards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.2 }
    );
    productCards.forEach((card) => observer.observe(card));

    return () => {
      productCards.forEach((card) => observer.unobserve(card));
    };
  }, [products]);

  const cards = products.map((product) => (

    <div className="product-card">
      <div className="badge">Hot</div>
      <div className="product-tumb">
        <img src={product.image} alt="Women Leather Bag" />
      </div>
      <div className="product-details">
        <span className="product-category">{product.category}</span>
        <h4><a href="/">{product.title}</a></h4>
       
        <div className="product-bottom-details">

          <div className="product-price">
            <small>$230.99</small> <button onClick={() => addtocart(product)}>Add to Cart</button>
          </div>
          
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="products-header">Our Products</h2>
      <div className="product-container">{cards}</div>
    </>
  );
};

export default Products;




