import React from 'react';
import styles from './AboutUs.module.css'; 

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUsContent}>
      <h2 className='mb-5'>Welcome to Samir Shop</h2>
        <p>
          At Samir Shop, we're not just a store; we're a destination for discovery and innovation. Our journey began in the vibrant year of 2024, where a group of passionate individuals came together to redefine the shopping experience.
        </p>
        <p>
          Samir Shop is more than just a marketplace; it's a celebration of curated collections, cutting-edge designs.
        </p>
        
        <p>
          From fashion-forward apparel to must-have accessories, Samir Shop is your go-to destination for elevating your lifestyle.
        </p>
        <p>
          Thank you for choosing Samir Shop.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;