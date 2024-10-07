import React from 'react';
import './footer.css'
function Footer() {
    return ( 
        <div className="container mt-5 offset-1 me-5 p-5 mt-5">
           
            <div className="row  ">
                <div className=" col-3 footer-div">
                  <img className="mt-3" src="images/zerodhaLogo.svg" alt="logo" height={"19px"} width={"150px"}/>
                  <p className="mt-3">© 2010 - 2024, Zerodha Broking Ltd.All rights reserved.</p>
                  <i class="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-brands fa-linkedin-in"></i><hr />
                  <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-brands fa-telegram"></i>
                </div>
                <div className=" col-3 footer-div text-center">
                    <h5>Company</h5>
                    <p>About</p>
                    <p>Products</p>
                    <p>Pricing</p>
                    <p>Referral programme</p>
                    <p>Careers</p>
                    <p>Zerodha.tech</p>
                    <p>Press & media</p>
                    <p>Zerodha Cares (CSR)</p>
                </div>
                <div className=" col-3 footer-div text-center">
                    <h5>Support</h5>
                    <p>Contact us</p>
                    <p>Support portal</p>
                    <p>Z-Connect blog</p>
                    <p>List of charges</p>
                    <p>Downloads & resources</p>
                    <p>Videos</p>
                    <p>Market overview</p>
                    <p>How to file a complaint?</p>
                    <p>Status of your complaints</p>
                </div>
                <div className=" col-3 footer-div text-center">
                    <h5>Account</h5>
                    <p>Open an account</p>
                    <p>Fund transfer</p>
                </div>
            </div>
            <div style={{fontSize:"11px", opacity:"0.7"}} className="me-5">
                <p className="mt-3">Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL:
                     Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 
                     Commodity Trading through  Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI 
                     Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
                      Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th  Phase, Bengaluru - 560078,
                       Karnataka, India. For any complaints pertaining to securities broking please write to 
                       <a href="">complaints@zerodha.com</a>, for DP related to <a href="">dp@zerodha.com</a>. Please ensure you carefully read 
                       the Risk  Disclosure Document as prescribed by SEBI | ICF <br /> 
                       <p>Procedure to file a complaint on 
                       <a href=""> SEBI SCORES </a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES:
                        Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy 
                        redressal of the grievances</p>
                        <a href=""> Smart Online Dispute Resolution | </a>&nbsp;<a href="">Grievances Redressal Mechanism </a><br />
                         <p>Investments in securities market are subject to market risks; read all the related documents
                         carefully before investing.</p>  <p>Attention investors: 1) Stock brokers can accept securities as
                           margins from clients only by way of pledge in the depository system w.e.f September 01, 
                           2020. 2) Update your e-mail and phone number with your stock broker  / depository participant
                            and receive OTP directly from depository on your e-mail and/or mobile number to create
                             pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued
                              by NSDL/  every month. </p> "Prevent unauthorised transactions in your account. Update 
                              your mobile numbers/email IDs with your stock brokers. Receive information of your 
                              transactions directly from Exchange on your mobile/email at the end of  the day. Issued
                               in the interest of investors. KYC is one time exercise while dealing in securities 
                               markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual
                                Fund etc.), you need not undergo the  same process again when you approach another 
                                intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to
                                 issue a cheque. Please write the Bank account number and sign the IPO application 
                                  form to authorize your bank to make payment in case of allotment. In case of non
                                  allotment the funds will remain in your bank account. As a business we don't give
                                   stock tips, and have not authorized anyone to trade on  behalf of  others. If you 
                                   find anyone claiming to be part of Zerodha and offering such services, please
                                    <a href=""> create a ticket here.</a></p>
            </div>
            <div style={{fontSize:"13px", opacity:"0.7", display:"flex",justifyContent:"space-around"}} className="me-5">
                <p>NSE</p>
                <p>BSE</p>
                <p>MCX</p>
                <p>Terms & conditions</p>
                <p>Policies & procedures</p>
                <p>Privacy policy </p>
                <p>Disclosure</p>
                <p>For investor's attention</p>
                <p>Investor charter</p>
            </div>
        </div>
     );
}

export default Footer;