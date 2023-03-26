import React from 'react'

function Productcard({image,price,category,title,handlequicklook,handleaddcart}) {
  return (
    <div>
        <img src={image} style={{width:'100px'}} alt={title} />
        <h3>{title}</h3>
        <p>{category}</p>
        <p>Rs.{price}</p>
        <button onClick={handlequicklook}>Quick Look</button>
       
       
    </div>
  )
}

export default Productcard