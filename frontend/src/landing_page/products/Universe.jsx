import React from 'react';
import './product.css'
function Universe() {
    return ( 
        <div>
            <div className="container text-center mt-5">
              <p className='fs-5 '>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p><br />
              <h3 className='mt-5' style={{color:"black"}}> The Zerodha Universe</h3>
              <p className='mt-5'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='container  universe-outer-box '>
               <div  className='universe-box'>
                <img className='image'  src="images/products/zerodhafundhouse.png" alt="" />
                <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
               </div>
               <div className='universe-box'>
                <img className='image' src="images/products/sensibull.svg" alt="" />
                <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
               </div>
               <div className='universe-box' >
                <img className='image' src="images/products/tijori.svg" alt="" />
                <p>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
               </div >
               <div className='universe-box'>
               <img className='image'  src="images/products/streak.png" alt="" />
               <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
               </div>
               <div className='universe-box'>
               <img className='image' src="images/products/smallcase.png" alt="" />
               <p>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
               </div>
               <div className='universe-box'>
               <img className='image' src="images/products/ditto.png" alt="" />
               <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
               </div>
            </div>
            <div className='text-center'>
            <button type="button" class="btn btn-primary fs-5" style={{width:"12%",margin:"0 auto"}}> Sign Up For Free</button>
            </div>
        </div>
     );
}

export default Universe;