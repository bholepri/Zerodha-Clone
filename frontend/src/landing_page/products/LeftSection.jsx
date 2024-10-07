import React from 'react';
function LeftSection({image,productName,productDes,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container p-5'>
            <div className="row ">
                <div className="col-5 p-5">
                    <img src={image} alt="" />
                </div>
                <div className="col-2"></div>
                <div className=" col-5 p-5 mt-5">
                    <h1 className='mt-5'>{productName}</h1>
                    <p className='mt-4'>{productDes}</p>
                    <div>
                        <a className='me-5' href={tryDemo}>{tryDemo}</a>
                        <a href={learnMore}>{learnMore}</a>
                    </div>
                    <div className='mt-4'>
                        <a className='me-3' href={googlePlay}><img src="images/products/ggoglePlay.svg" alt="" /></a>
                        <a href={appStore}><img src="images/products/AppStore.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;