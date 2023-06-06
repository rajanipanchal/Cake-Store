import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../Store/CartSlice'

function VarietiesCakes({cake}) {
    const{image,title,price,id,rating} = cake
    const dispatch = useDispatch()
    const handleClick =()=>{
      dispatch(addCart(cake))
    }

  return (
    <div className="col-lg-3 col-md-3 col-sm-4">

    <div className="card ">
    <img className="card-img-top" src={image} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card title">{title}</h5>
      <div className="buttons d-flex justify-content-between">
        <div className="rating">
        <h6 className="price">₹ {price}/-</h6>
        </div>
        <a href="#" className="btn btn-light" onClick={()=>handleClick()} >Add to Card</a>
      </div>
   </div>
 </div>
 </div>

  )
}

export default VarietiesCakes