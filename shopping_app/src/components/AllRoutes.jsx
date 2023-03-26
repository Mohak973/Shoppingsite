import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cartpage from '../Pages/Cartpage'
import Productpage from '../Pages/Productpage'
import Singleproductpage from '../Pages/Singleproductpage'
function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Productpage />}/>
            <Route path='/Cartpage' element={<Cartpage />}/>
            <Route path='/:id' element={<Singleproductpage />} />
        </Routes>
    </div>
  )
}

export default AllRoutes