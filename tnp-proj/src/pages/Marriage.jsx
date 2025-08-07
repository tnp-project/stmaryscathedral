import React from 'react'
import { useNavigate } from "react-router-dom";  

const Marriage = () => {

    
       const navigate=useNavigate(); 
  return (
    <div class="card-container1">
  <div class="card" on onClick={()=> navigate("/AddMarriage")}>
    <div class="card-details">
      <p class="text-title">ADD MARRIAGE</p>
    </div>
  </div>
  <div class="card" on onClick={()=> navigate("/SearchMarriage")}>
    <div class="card-details">
      <p class="text-title">SEARCH</p>
    </div>
  </div>
 
  </div>
  )
}

export default Marriage
