import React from 'react'
import image from '../imges/logo2.png'

function Hero() {
  return (
    <div className="Home">
    <div className="container" id="home">
    <div className="row" id="row">
       <div className="col-lg-6 col-md-6 col-sm-12">
        <img src="https://cdn.pixabay.com/photo/2015/02/17/09/45/wedding-cake-639181__480.jpg" className="bg-img"></img>
       </div>
       <div className="col-lg-6 col-md-6 col-sm-12" id="bg-2">
         <div className="bg-content">
           <div className="con1 d-flex">
             <img src={image} style={{"width" :" 10%" ,"margin-left": "-19px"}} alt=""/>
             <h6>Fresh Baked | Every Day</h6>
           </div>
           <h1 className="con1-h1">Morning</h1>
             <h1 className="con1-h1">Berry</h1>
           <p className="con1-p py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua.Ut enimad minim <br/>veniam, quis nostrud exercitation ullamco.ut labore<br/> et dolore magna aliqua.Ut enim ad minim veniam, quis<br/> nostrud exercitation ullamco</p>
           <button type="button" className="btn btn-dark">Order</button>
           <button type="button" className="btn btn-transparent mx-3">Explore</button>
         </div>  
       </div>
     </div>
    </div>
   </div>
  )
}

export default Hero