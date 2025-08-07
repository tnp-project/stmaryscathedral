import React, { useState } from 'react';
import "../../css/existingfamadd.css";
import PopUp from '../../components/PopUp';

const ExistingFamilymem = () => {
  const [buttonPopup, setButtonPopup] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setButtonPopup(true);
  };

  return (
    <>
      <div className="container">
        <form className="register-form" onSubmit={handleSubmit}> 

          <div className="name-row">
            <div className="input-group">
              <input type="text" name="firstname" required />
              <label htmlFor="firstname">Name</label>
            </div>
            <div className="input-group">
              <input type="text" name="housename" required />
              <label htmlFor="housename">House Name</label>
            </div>
          </div>

          <div className="input-group">
            <input type="text" name="kudumbunit" required />
            <label htmlFor="kudumbunit">Kudumb Unit Name</label>
          </div>

          <div className="input-group">
            <input type="text" name="address" required />
            <label htmlFor="address">Address</label>
          </div>

          <div className="input-group">
            <input type="number" name="housenumber" required />
            <label htmlFor="housenumber">House Number</label>
          </div>

          <button type="submit" className="submit-btn">Submit</button> 
        </form>

        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
      </div>
    </>
  );
};

export default ExistingFamilymem;
