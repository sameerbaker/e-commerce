// src/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../products/Product';
import './HomePage.css'; // Importing CSS for styles

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  const handleButtonClick = () => {
    to=('../products/Product.jsx'); // Navigate to Product Page
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  var animateButton = function (e) {

    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  return (
    <div className="home-container">
      <div 
        className="animated-box" 
        style={{ 
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` 
        }}
      >
        <h1>Welcome to Our E-Commerce Store!</h1>
        <img
          src="/storelogo.jpeg" // Replace with your product image
          alt="Product"
          className="product-image"
        />
        <p>Explore our amazing products!</p>
        <Link to="/products" className="bubbly-button" onClick={animateButton}> 
        Shop Now
        </Link> 

      </div>
    </div>
  );
};

export default HomePage;
