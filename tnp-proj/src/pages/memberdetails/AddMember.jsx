import React from 'react'

import { useNavigate } from "react-router-dom"

const AddMember = () => {    
       const navigate=useNavigate(); 
  return (
    <div class="card-container1">
  <div class="card" on onClick={()=> navigate("/ExistingFamilymem")}>
    <div class="card-details">
      <p class="text-title">EXISTING FAMILY</p>
    </div>
  </div>
  <div class="card" >
    <div class="card-details">
      <p class="text-title">NEW FAMILY</p>
    </div>
  </div>
 
  </div>
  )
}

export default AddMember
