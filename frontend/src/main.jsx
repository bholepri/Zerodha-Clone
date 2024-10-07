import React from 'react';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/SignupPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';

import './index.css'
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
