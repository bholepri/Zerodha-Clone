import React from 'react';
import {Link} from "react-router-dom"


function Navbar() {
   
    return ( 
        <div className="container mt-4 mb-2">
            <div className="row">
                <div className="col ">
                    <Link to="/"><img src="images/zerodhaLogo.svg" alt="logo" height={"19px"} width={"150px"}/></Link>
                </div>
                <div className="col"></div>
                <div className="col  " style={{display:"flex",justifyContent:"space-around", opacity:"0.8"}}>
                    <div className='row'>
                    <Link className='col ' to="/signup" style={{textDecoration:"none" ,color:"black"}}>Signup</Link>
                    <Link className='col' to="/about" style={{textDecoration:"none" ,color:"black"}}>About</Link>
                    <Link className='col' to="/products" style={{textDecoration:"none" ,color:"black"}}>Products</Link>
                    <Link className='col' to="/pricing" style={{textDecoration:"none" ,color:"black"}}>Pricing</Link>
                    <Link className='col' to="/support" style={{textDecoration:"none" ,color:"black"}}>Support</Link>
                    </div>
                    
                </div>
               
            </div>
           
        </div>
        
     );
}

export default Navbar;