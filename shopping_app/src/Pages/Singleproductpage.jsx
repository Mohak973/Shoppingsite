import React, { useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import Productcard from '../components/Productcard';

function Singleproductpage() {
    const {id} =useParams();
    console.log(id)

    const [detail,setdetail]=useState({})
  
    

    const navigate=useNavigate();

    
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json()).then((res)=>setdetail(res))
    },[])

   
    const handlecart=(data)=>{
      let cartarr=JSON.parse(localStorage.getItem("cartdata"))|| []
      
       
       cartarr.push(data)
       localStorage.setItem("cartdata",JSON.stringify(cartarr))
    }
    
    
    
   
  return (
    <div>Singleproductpage
        <div>
           <img src={detail.image} style={{width:'150px'}} alt="" />
           <h4>{detail.title}</h4>
           <p>{detail.description}</p>
           <p>{detail.price}</p>
           <button onClick={()=>handlecart(detail)}>ADD to Cart</button>
           <button onClick={()=>navigate("/Cartpage")}>Go to cart Page</button>
        </div>
    </div>
  )
}

export default Singleproductpage