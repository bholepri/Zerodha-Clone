import './pricing.css'
function Pricing() {
    return (
        <div className="row offset-1 p-5 mt-5 mb-5">
            <div className="col-5">
               <h3>Unbeatable pricing</h3>
               <p className="mt-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
               <a href="">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-7 row  ms-2" >
                <div className="col-4  row" >
                  <img className="col-6  " src="images/pricing1.svg" alt=""  height={"100px"} width={"150px"} />
                  <p className="col-6  bottomText"> Free account opening</p>
                </div>
                <div className="col-4 row">
                  <img className="col-6" src="images/pricing2.svg" alt="" height={"100px"} width={"150px"}/>
                  <p className="col-6 bottomText">Free equity delivery
                  and direct mutual funds</p>
                </div>
                <div className="col-4 row">
                  <img className="col-6" src="images/pricing3.svg" alt="" height={"100px"} width={"150px"}  />
                  <p className="col-6 bottomText">Intraday and
                  F&O</p>
                </div>
            </div>
        </div>
      );
}

export default Pricing;