import React from 'react';
import '../css/baptism.css';

const Baptism = () => {
  return (
    <>
      <div className="container-input3">
        <input
          type="text"
          placeholder="SEARCH MEMBER"
          name="text"
          className="input"
        />
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"></path>
        </svg>
      </div>

      <div className="table-wrapper">
        <div className="member-box">
          <h2 className="member-title">Baptism Records</h2>
          <div className="table-scroll">
            <table className="member-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Date of Baptism</th>
                  <th>Place</th>
                  <th>Priest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Mathew</td>
                  <td>Male</td>
                  <td>2002-01-15</td>
                  <td>2002-02-10</td>
                  <td>Pallikara Church</td>
                  <td>Fr. Jacob</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Maria Joseph</td>
                  <td>Female</td>
                  <td>2000-06-21</td>
                  <td>2000-07-05</td>
                  <td>Kakkanad Church</td>
                  <td>Fr. Mathew</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Baptism;
