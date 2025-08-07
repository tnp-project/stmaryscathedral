import React from 'react'
import "../../css/addmarriage.css"

const AddMarriage = () => {
  return (
 <>
      <div className="marriage-flex-container">

        {/* Groom Section */}
        <div className="marriage-card">
          <h2 className="marriage-title">Search Groom</h2>
          <div className="marriage-input-wrapper">
            <input
              type="text"
              placeholder="SEARCH GROOM"
              name="groomSearch"
              className="marriage-input"
            />
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"></path>
            </svg>
          </div>

          <div className="marriage-table-container">
            <table className="marriage-table">
              <thead>
                <tr>
                  <th>SL NO</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Relation</th>
                  <th>DOB</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {/* Groom Rows Here */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bride Section */}
        <div className="marriage-card">
          <h2 className="marriage-title">Search Bride</h2>
          <div className="marriage-input-wrapper">
            <input
              type="text"
              placeholder="SEARCH BRIDE"
              name="brideSearch"
              className="marriage-input"
            />
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"></path>
            </svg>
          </div>

          <div className="marriage-table-container">
            <table className="marriage-table">
              <thead>
                <tr>
                  <th>SL NO</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Relation</th>
                  <th>DOB</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {/* Bride Rows Here */}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>

  )
}

export default AddMarriage
