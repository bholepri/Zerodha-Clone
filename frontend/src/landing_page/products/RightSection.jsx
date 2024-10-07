import React from 'react';
function RightSection({image,productName,productDes,learnMore}) {
    return ( 
        <div className='container  '>
            <div className="row ">
                
                <div className=" col-6 mt-5 p-5 ">
                    <div className="container  p-5 ">
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='mt-4'>{productDes}</p>
                        <a href={learnMore}>{learnMore}</a>
                    </div>
                </div>
                <div className="col-6 ">
                    <img src={image} alt="" />
                </div>
                
            </div>
        </div>
     );
}

export default RightSection;