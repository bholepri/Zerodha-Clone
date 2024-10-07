import React from 'react';
function Hero() {
    return (  
        <div className='container text-center mt-5 p-5'>
           <h1 className='mt-3' style={{fontSize:"46px"}}>Technology</h1>
           <p className='mt-3' style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</p>
           <p  className='mb-5' style={{fontSize:"17px"}}>Check out our <a href="">investment offerings →</a></p><br /><br />
           <hr />
        </div>
    );
}

export default Hero;