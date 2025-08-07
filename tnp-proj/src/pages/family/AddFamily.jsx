import React from 'react'
import PopUp from '../../components/PopUp'
import { useState } from 'react'
const AddFamily = () => {
  const [buttonPopup, setButtonPopup] = useState(false); 
  return (
 <>
  <div class="container">
    <form class="register-form"> 

      <div class="name-row">
        <div class="input-group">
          <input type="text" name="firstname" required />
          <label>Name</label>
        </div>
        <div class="input-group">
          <input type="text" name="lastname" required />
          <label>House Name</label>
        </div>
      </div>

      <div class="input-group">
        <input type="text" name="email" required />
        <label>Kudumb Unit Name</label>
      </div>
      <div class="input-group">
        <input type="text" name="email" required />
        <label>Address</label>
      </div>

      <div class="input-group">
          <input type="number" name="lastname" required />
          <label>House Number</label>
        </div>

    

      <button type="submit" class="submit-btn" onClick={() => setButtonPopup(true)}>Submit</button> 
    </form>
    
  <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}/>
    
  </div>
  </>
  )
}

export default AddFamily
