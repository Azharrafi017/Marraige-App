import React, { useState } from 'react'
import "../index.css"
const Home = () => {
  const[circle1,setcircle1]=useState(true);
  const[circle2,setcircle2]=useState(false);
  const[circle3,setcircle3]=useState(false);
  const[circle4,setcircle4]=useState(false);
  const[circle5,setcircle5]=useState(false);
  const[circle6,setcircle6]=useState(false);
  console.log(circle1)
  return (
    <div>
        <div className="Home-1">
          <p className='font-style1'>Plan Your Perfect Event Effortlessly</p>
          <h3 className="Home-1-font">From <span className="Home-1-font">weddings</span> to <span>birthday parties</span>, our app helps you manage every detail with ease.</h3>
          <button className="btn-1">Get Started</button>
        </div>
        <div className='Home-2'>
          <img className="photo-2" src="src/Photos/Line 30.png" alt="image not found" />
          <p className='font-style3'>NOW YOU CAN PLAN YOUE WEDDING WITH ZERO HASSLE</p>
          <div className='Home-2Arr'>
            <img src="src/Photos/Arrow 3.png" alt="image not found"/>
            <btn className="Home-2-btn font-style1">Explore</btn>
          </div>
        </div>
        <div className="dot">
          <button  className="circle" ></button>
          <button  className="circle" ></button>
          <button  className="circle" ></button>
          <button  className="circle" ></button>
          <button  className="circle" ></button>
          <button  className="circle" ></button>
        </div>
        <h3 className="h3-heading middle">HOW IT <span className="h3-heading blue">WORKS?</span></h3>

        <div className="home3">
          <div className="box-1">
            <img src="src/Photos/Frame 13.png"/>
            <div className="b1">
              <p className="heading1">Step 1:</p>
              <h3 className="heading2">Create Your Event</h3>
              <p className="heading3">Start by creating an event profile with all the essential details.</p>
            </div>
          </div>
          <div className="box-2">
            <img src="src/Photos/Frame 13.png"/>
            <div className="b1">
              <p className="heading1">Step 2:</p>
              <h3 className="heading2">Customize and Plan</h3>
              <p className="heading3">Choose themes, set budgets, and manage guest lists with our easy-to-use tools.</p>
            </div>
          </div>
          <div className="box-3"></div>
        </div>
    </div>

  )
}

// Home2
 


export default Home