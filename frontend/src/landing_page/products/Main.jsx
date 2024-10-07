import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
function Main() {
    return ( 
        <div>
           
           <LeftSection 
             image="images/products/kite.png" 
             productName="Kite"  
             productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  
             tryDemo="Try Demo"  
             learnMore="Learn More"  
             googlePlay=""  
             appStore=""/>
           <RightSection
             image="images/products/console.png" 
             productName="Console"  
             productDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  
             learnMore="Learn More"/>
            <LeftSection 
             image="images/products/coin.png" 
             productName="Coin"  
             productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices"  
             tryDemo="coin"  
             learnMore=""  
             googlePlay=""  
             appStore=""/>
             <RightSection
            image="images/products/kiteconnect.png" 
            productName="Kite Connect API"  
            productDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."  
            learnMore="Kite Connect"/>
             <LeftSection 
             image="images/products/varsity.png" 
             productName="Varsity mobile"  
             productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  
             tryDemo=""  
             learnMore=""  
             googlePlay=""  
             appStore=""/>
        </div>
     );
}

export default Main;