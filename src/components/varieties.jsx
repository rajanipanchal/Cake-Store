
import React, {} from 'react'
import VarietiesCakes from '../components/VarietiesCakes'

function Varieties({cakes}) {
  return (
    <>
      <h1 className="varieties-h1 text-center " style={{paddingTop: "3em"}}> Varieties of Cake</h1>
      <div className="container py-5">
        <div className="row">
            {
              cakes.map(cake =><VarietiesCakes key={cake.id} cake={cake}/> )
            }
          </div>  
        </div>
      </>
  )
}

export default Varieties