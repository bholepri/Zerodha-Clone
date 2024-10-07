import React from 'react';
function People() {
    return ( 
        <div className='container mb-5' style={{height:"500px",width:"1000px"}}>
            < p className='text-center' style={{fontSize:"40px"}}>People</p>
            <div className="row">
                <div className="col-5  p-5" > 
                    <img style={{height:"300px" ,width:"300px"}} className="rounded-circle ms-5 " src="images/people/nithinkamath.jpg" alt="" />
                    <div className='text-center mt-4 ms-5 p-3'>
                    <h5><b>Nithin Kamath</b></h5>
                    <p>Founder, CEO</p>
                    </div>
                </div>
                <div className="col-7 mt-5 p-5" style={{fontSize:"18px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on  
                        <a href=""> Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default People;