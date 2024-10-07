import TextField from '@mui/material/TextField';
function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row p-5 mt-5">
            <div className="col-5">
                <img src="images/heroSignup.png" alt="" />
            </div>
            <div className="col-3"></div>
            <div className="col-4">
                <div className="mt-5 ">
                    
                  <h2>SignUp now</h2>
                  <p className="mb-4">Or track your existing application.</p>
                  <TextField
          id="outlined-number"
          label="Mobile No"
          type="number"
          defaultValue="91"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
                  <p className="mt-4">You will receive an OTP on your number</p>
                  <button type="button" class="btn btn-primary  "> Continue</button><br /><br />
                  <a style={{textDecoration:"none"}} href="">Want to open an NRI account?</a>
                </div>
            </div>
            <div className="mt-2">
            <p style={{fontSize:"12px"}} className="text-center">I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
            <p style={{fontSize:"12px"}} className="text-center">Please visit <a href="">this article</a> to know more.</p>
            <p style={{fontSize:"12px"}} className="text-center">If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href="">offline forms</a>. For help, <a href="">click here</a>.</p>
        
            </div>
           </div>
        </div>
     );
}

export default Hero;