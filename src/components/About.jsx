
import React from 'react'

function About() {
  return (
    <>
    <div className="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="about-h1">
            <h1>We pride ourselves on making real food from the best ingredients.</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button type="button" className="btn btn-dark">Order Now</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12"  >
        <img src="https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548__480.jpg" id='cakes' className="img-fluid rounded-top" alt=""/>
        </div>
      </div>
    </div>
  </div>
  <h1 className="spcl py-5 text-center">For Special Occassion</h1>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
       <div className="grid">
          <div className="box-a">
              <img src="https://th.bing.com/th/id/OIP.aoX2pbBcqGPACZJUiM47JgHaFj?pid=ImgDet&rs=1" className="img-fluid   rounded-0" alt=""/>
          </div> 
          <div className="box-b">
            <img src="https://cdn.pixabay.com/photo/2019/01/10/19/36/valentine-3925931__480.jpg" className="img-fluid rounded-0"  alt=""/>
          </div> 
          <div className="box-c">
           <img src="https://th.bing.com/th/id/OIP.pripscbmFOUoioHXAcjt1gHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" className="img-fluid  rounded-0"  alt=""/>
          </div> 
          <div className="box-d">
             <img src="https://cdn.pixabay.com/photo/2017/09/14/14/33/cupcake-2749204__480.jpg" className="img-fluid  rounded-0"  alt=""/>
          </div> 
        </div>
  
      </div>
      <div className=" col-lg-6 col-md-6 col-sm-12">
        <div className=" spcl-h1">
          <h1>We make everything by hand with the best possible ingredients.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio similique dolorem quas amet inventore eligendi non, ducimus odio quia laboriosam!</p>
          <ul>
           <li className="bi bi-check">Lorem ipsum dolor sit amet.</li>
           <li className="bi bi-check"> Erat volutpa aliquet imperdiet.</li>
           <li className="bi bi-check"> prus a odio finibus bibendum.</li>
          </ul>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default About


