import React from 'react'
import {useState,useEffect} from "react"
import Productcard from '../components/Productcard'
import { NavLink,useNavigate } from 'react-router-dom'
function Productpage() {
  
    const [data,setdata]=useState([])
    const [added,setadded]=useState(false);
    const [cart,setcart]=useState([])
    const navigate=useNavigate()
    const [Search,setsearch]=useState("")


    const getdata=()=>{
        return fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((res)=>setdata(res))
    }

    console.log(data)
    useEffect(()=>{
      getdata()
    },[Search])
    const handlequicklook=(id)=>{
       navigate(`/${id}`)
      
      
    }

    const handlecart=(id)=>{
       if(cart.includes(id)){
        console.log("No")
       }
    }
    const handlesearch=({Search})=>{
       
      fetch(`https://fakestoreapi.com/products/category/${Search}`).then((res)=>res.json()).then((res)=>setdata(res))
    }
    
   
  return (
    <div>Productpage
        <input value={Search} placeholder="Search based on category" onChange={(e)=>setsearch(e.target.value)}/> <button onClick={()=>handlesearch({Search})}>Search</button>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'40px'}}>
          
            {data?.map((el)=>(
                
                <Productcard key={el.id} image={el.image} price={el.price} title={el.title} category={el.category} handlequicklook={()=>handlequicklook(el.id)}/>
               
            ))}
           
        </div>
    </div>
  )
}

export default Productpage