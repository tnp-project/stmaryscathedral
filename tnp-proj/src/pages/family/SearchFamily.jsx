import React from 'react'
import "../../css/searchfamily.css"
import { useNavigate } from "react-router-dom";  


const SearchFamily = () => {
     const navigate=useNavigate(); 
  return (
  <> 

  
  <div class="container-input4">
  <input type="text" placeholder="SEARCH FAMILY" name="text" class="input" />
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path  fill-rule="evenodd"></path>
</svg>
</div>




<div class="member-table-container1">
  <h2>FAMILIES</h2>
  <div class="table-wrapper1">
    <table class="member-table">
      <thead>
        <tr>
          <th>FAMILY NO</th>
          <th>FAMILY Name</th> 
          <th>HoF</th> 
        </tr>
      </thead>
      <tbody>
        <tr on onClick={()=> navigate("/SearchedFam")}>
          <td>F201</td>
          <td>Madathaparambil</td>
          <td>Thomas Varghese</td>
           
        </tr>
      </tbody>
    </table>
  </div>
</div>
</>
  )
}

export default SearchFamily
