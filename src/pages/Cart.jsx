import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { remove } from '../Store/CartSlice'

function Cart() {
  const cart = useSelector(state => state.cart)
 const totalAmount = cart.reduce((p,c)=>{
  return p+c.price
 },0)



  return (
    <div className="cart" style={{ minHeight: "80vh" }}>
      <div className="container" id="cake">
        <div className="row">
        <h4 className='buynow'>Your Items</h4>  
          <div className="col-lg-7 col-md-7 col-sm-12">
            {
              cart.map(product => <CartItem key={product.id} product={product} />)
            }
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="card p-3 m-2">
              <h6>
                Total Item :   {cart.length}
              </h6>
              <h6>
                Total Amount :  ₹{totalAmount}
              </h6>
             <a href="#" className="btn btn-light" style={{marginTop:"10px"}}>Buy Now</a>
           
              
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Cart