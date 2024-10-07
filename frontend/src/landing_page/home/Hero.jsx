
function Hero() {
    return (
      <div className="container p-5">
        <div className="row text-center">
          <img src="images/heroHome.png" alt="" />
          <h1>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button type="button" class="btn btn-primary fs-5" style={{maxWidth:"30%",margin:"0 auto"}}> Sign Up For Free</button>
        </div>
      </div>
          

        // <div className="mt-4">
        //     <div className=" text-center ">
        //       <img src="images/heroHome.png" alt="HeroImage"  className="mb-3 border" style={{height:"50vh",width:"100%"}}/>
        //       <h1 className="mt-5" style={{fontSize:"45px"}}>Invest in everything</h1>
        //       <p className="mt-3" style={{fontSize:"22px"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
              
        //     </div>
        //     <button type="button" class="btn btn-primary btn-lg offset-5 mt-4 mb-4"> Sign Up For Free</button>
        // </div>
      );
}

export default Hero;