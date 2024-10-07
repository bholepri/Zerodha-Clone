import React from 'react';
import './pricing.css'
function Hero() {
    return (
        <div className='container  main-div'>
            <div className='text-center mt-5 p-5 ms-5'>
                <h1 className='ms-5 '>Charges</h1>
                <p className='fs-5 mt-3 ms-5 '>List of all charges and taxes</p>
            </div>
            <div className=" hero-main-div  ms-5">
            <div className='row ms-5 p-4'>
                <div className="col-4 hero-div">
                    <img src="images/pricing1.svg" alt="" />
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 hero-div">
                    <img src="images/pricing3.svg" alt="" />
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 hero-div">
                    <img src="images/pricing2.svg" alt="" />
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            </div>
           
        </div>
      );
}


export default Hero;