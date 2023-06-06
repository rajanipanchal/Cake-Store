import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice'
import { Rating,Typography } from '@mui/material'
function CartItem({product}) {
    const {image,id, title, price,rating} = product
    const dispatch = useDispatch()
    const handleClick = (id)=>{
     dispatch(remove(id))
    }
    // const [value, setValue] = React.useState<number | null>(5);
  return (
    <>
   

    <div class="card p-3 m-2">
        <div className="cakecard d-flex ">
        <div className="img w-50">
            <img src={image} class="card-img-top" alt="..."/>
            </div>
        <div class="card-body w-50">
            <h5 class="card-title" style={{textAlign :"initial"}}>{title}</h5>
            <h6 class="price" style={{textAlign :"initial" ,marginTop:"10px"}}>₹{price}</h6>
            <Typography component="legend">Rating</Typography>
              <Rating name="read-only" value={rating} readOnly />
            {/* <h6>Rating :   {rating}</h6> */}
            <button type="button" className="btn btn-dark" onClick={()=>handleClick(id)} style={{marginTop :"20px"}}>Remove To Cart</button>

        </div>
        </div>
        </div>
        </>
  )
}

export default CartItem