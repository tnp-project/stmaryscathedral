import React from 'react'  
import "../css/familydetails.css"  

import { useNavigate } from "react-router-dom";  


const FamilyDetails = () => {
   const navigate=useNavigate(); 
  return (
    <div class="card-container1">
  <div class="card" on onClick={()=> navigate("/AddFamily")}>
    <div class="card-details">
      <p class="text-title">ADD FAMILY</p>
    </div>
  </div>
  <div class="card" on onClick={()=> navigate("/SearchFamily")}>
    <div class="card-details">
      <p class="text-title">SEARCH FAMILY</p>
    </div>
  </div>
 
  </div>
  )
}

export default FamilyDetails
