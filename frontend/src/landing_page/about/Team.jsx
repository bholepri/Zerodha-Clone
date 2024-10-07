import './about.css'
import React from 'react';
function Team() {
    return (
        <div className='container p-5 text-center '>
            <div className="row team-main-div">
            <div className=' team-div'>
                <img  className="people" src="images/people/NikhilKamath.jpg" alt="" />
                <p className="people-para"style={{fontSize:"20px"}}>Nikhil Kamath</p>
                <p className="people-para">Co-founder & CFO</p>
            </div>
            <div className=' team-div'>
            <img className="people" src="images/people/Kailash.jpg" alt="" />
            <p className="people-para" style={{fontSize:"20px"}}>Dr. Kailash Nadh</p>
            <p className="people-para">CTO</p>
            </div>
            <div className=' team-div'>
            <img className="people" src="images/people/Venu.jpg" alt="" />
            <p className="people-para" style={{fontSize:"20px"}}>Venu Madhav</p>
            <p className="people-para">COO</p>
            </div>
            <div className=' team-div'>
            <img className="people" src="images/people/Hanan.jpg" alt="" />
            <p className="people-para" style={{fontSize:"20px"}}>Hanan Delvi</p>
            <p className="people-para">CCO</p>
            </div>
            <div className=' team-div'>
            <img className="people" src="images/people/Seema.jpg" alt="" />
            <p className="people-para" style={{fontSize:"20px"}}>Seema Patil</p>
            <p className="people-para">Director</p>
            </div>
            <div className=' team-div'>
            <img className="people" src="images/people/karthik.jpg" alt="" />
            <p className="people-para" style={{fontSize:"20px"}}>Karthik Rangappa</p>
            <p className="people-para">Chief of Education </p>
            </div>
            <div className=' team-div'>
            <img className="people" src="images/people/Austin.jpg" alt="" />
            <p className="people-para" style={{fontSize:"20px"}}>Austin Prakesh</p>
            <p className="people-para">Director Strategy</p>
            </div>
            </div>
        </div>
      );
}

export default Team;