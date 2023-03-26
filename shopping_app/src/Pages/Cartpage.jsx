import React from 'react'
import { useState,useEffect } from 'react';
function Cartpage() {

  const [total,settotal]=useState(0)

  
  const addeddata=JSON.parse(localStorage.getItem("cartdata"))
  let uniqueArr = [];
let uniqueIds = [];

addeddata.forEach((item) => {
  if (!uniqueIds.includes(item.id)) {
    uniqueIds.push(item.id);
    uniqueArr.push(item);
  }
});

const [quantities, setQuantities] = useState({});
  
  const handleDecrement = (id,price) => {
    setQuantities({ ...quantities, [id]: (quantities[id] || 1) - 1 });
    settotal((prev)=>prev-price)
  };
  
  const handleIncrement = (id,price) => {
    setQuantities({ ...quantities, [id]: (quantities[id] || 0) + 1 });
    settotal((prev)=>prev+price)
  };
console.log(quantities.id)

  return (
    <div>Cartpage
      <div>
        {uniqueArr.map((el)=>(
         <div>
          <img src={el.image} alt="" />
          <p>{el.price*quantities[el.id]}</p>
          <button onClick={()=>handleDecrement(el.id,el.price)} disabled={quantities[el.id]===1}>-</button>
          <button>{quantities[el.id] || 0}</button>
          <button onClick={()=>handleIncrement(el.id,el.price)}>+</button>
          </div>
        ))}
        Total:{total}
      </div>
    </div>
  )
}

export default Cartpage