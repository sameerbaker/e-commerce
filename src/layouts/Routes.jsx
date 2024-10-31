import React from 'react'
import DashboardLayout from './DashboardLayout.jsx';
import Layout from './Layout.jsx';
import Home from '../components/web/home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Facebook from "../components/web/contactus/Facebook.jsx";
import Email from "../components/web/contactus/Email.jsx";
import Github from "../components/web/contactus/Github.jsx";
import Instagram from "../components/web/contactus/Instagram.jsx";
import Linkedin from "../components/web/contactus/Linkedin.jsx";
import Phone from "../components/web/contactus/Phone.jsx";
import Prportfolio from "../components/web/contactus/Prportfolio.jsx";
import Twitter from "../components/web/contactus/Twitter.jsx";
import Youtube from "../components/web/contactus/Youtube.jsx";
import ContactUs from '../components/web/contactus/ContactUs.jsx';
import Categories from '../components/web/categories/Categories.jsx';
import DashboardHome from '../components/dashboard/home/Home.jsx';
import DashboardCategories from '../components/dashboard/categories/Categories.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Register from '../components/web/register/Register.jsx';
import Login from '../components/web/login/Login.jsx';
import Product from '../components/web/products/Product.jsx';
import CategoriesDetails from '../components/web/categories/CategoriesDetails.jsx';
import Cart from '../components/web/cart/Cart.jsx';
import ProtectedRoute from '../components/web/ProtectedRoute/ProtectedRoute.jsx';
import Auth from '../components/web/ProtectedRoute/Auth.jsx';
import SendCode from '../components/web/forgotPassword/SendCode.jsx';
import ForgotPassword from '../components/web/forgotPassword/ForgotPassword.jsx';
import Profile from '../components/web/profile/Profile.jsx';
import Checkout from '../components/web/order/Chekout.jsx';
import UserInfo from '../components/web/profile/UserInfo.jsx';
import UserContact from '../components/web/profile/UserContact.jsx';
import Orders from '../components/web/profile/Orders.jsx';
import AllProducts from '../components/web/products/AllProducts.jsx';
import AboutUs from '../components/web/aboutUs/AboutUs.jsx';



 export const router = createBrowserRouter([
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        
        children:[
            
            {
                path:'home',
                element:<DashboardHome/>
            },
            {
                path:'categories',
                element:<DashboardCategories/>
            },
            {
                path:'*',
                element:<h2>404 page not found --dashboard  </h2>
            }
        ]
        
    },
    {
        path:'/',
        element:<Layout/>,
        
        children:[
            {
                path:'login',
                element:
                <Auth>
                    <Login/>
                </Auth>
            },
            {
                path:'register',
                element:
                <Auth>
                    <Register/>

                </Auth>
            },

            {
                path:'sendcode',
                element:<SendCode/>
            },
            {
                path:'forgotpassword',
                element:<ForgotPassword/>
            },

            
            
            {
            index:true , // its the same of  //  path:'/',
            element:<Home/>
        },
        {
            path:'cart',
            element:
            <ProtectedRoute>
                <Cart/>
            </ProtectedRoute>
            
        },
        {
            path:'categories',
            element:<Categories/>
        },
        
        {
            path:'products/category/:categoryId',
            element:<CategoriesDetails/>
        },
        {
            path:'product/:productId',
            element:<Product/>
        },
        {
            path:'products',
            element:<AllProducts/>
        },
        {
            path:'profile',
            element:
            <ProtectedRoute>
                <Profile/>
            </ProtectedRoute>
            ,
            children:[
                {
                    index:true , // its the same of  //  path:'/',
                    element:<UserInfo/>
                },
                {
                    path:'info',
                    element:<UserInfo/>
                },
                {
                    path:'contact',
                    element:<UserContact/>
                },
                {
                    path:'orders',
                    element:<Orders/>
                }
            ]
        },
       

        { 
            path:'ContactUs',
            element:<ContactUs/>,
            
                
        },
        { 
            path:'Facebook',
            element:<Facebook/>,      
        },
        { 
            path:'Instagram',
            element:<Instagram/>,      
        },
        { 
            path:'Linkedin',
            element:<Linkedin/>,      
        },
        { 
            path:'Email',
            element:<Email/>,      
        },
        { 
            path:'Github',
            element:<Github/>,      
        },
        { 
            path:'Phone',
            element:<Phone/>,      
        },
        { 
            path:'Prportfolio',
            element:<Prportfolio/>,      
        },
        { 
            path:'Twitter',
            element:<Twitter/>,      
        },
        { 
            path:'Youtube',
            element:<Youtube/>,      
        },
        
        
        
        { 
            path:'AboutUs',
            element:<AboutUs/>
        },
        
        {
            path:'checkout',
            element:<Checkout/>
        },
        

        {
            path:'*',
            element:<h2>404 page not found --user  </h2>
        }

    ]
    }
    
]);

