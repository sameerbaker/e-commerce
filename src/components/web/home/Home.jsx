import React from 'react'
import Categories from '../categories/Categories.jsx'
import  styles  from './Home.module.css';
import AboutUs from '../aboutUs/AboutUs.jsx';
import HomePage from '../introduction/HomePage.jsx';

export default function Home() {
  return (
    <div className={styles["home"]}>
      <HomePage/>
      
      <Categories/>
      
    </div>
  )
}
