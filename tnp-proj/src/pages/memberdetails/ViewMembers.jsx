import React from 'react';
import "../../css/viewmembers.css";

const ViewMembers = () => {
  return (
    <>
      {/* Search Bar */}
      <div className="container-input2">
        <input type="text" placeholder="SEARCH MEMBER" name="text" className="input" />
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M1408.941 1331.953 1920 1843.01 1843.01 1920l-511.059-511.059c-111.059 91.764-253.176 146.376-407.63 146.376C422.494 1555.317 0 1132.823 0 622.659 0 112.494 422.494-310 924.317-310c501.823 0 924.317 422.494 924.317 932.659 0 220.282-76.988 423.53-203.718 581.782Zm-484.624-107.718c355.059 0 643.514-288.455 643.514-643.514S1279.376-64.793 924.317-64.793 280.803 223.662 280.803 578.721c0 355.059 288.454 643.514 643.514 643.514Z" />
        </svg>
      </div>

      {/* Members Table */}
      <div className="member-table-container1">
        <h2>Members</h2>
        <div className="table-wrapper1">
          <table className="member-table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Relation</th>
                <th>DOB</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Blood Group</th>
                <th>Aadhaar</th>
                <th>Family No</th>
                <th>HoF</th>
                <th>Baptism</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>John Mathew</td>
                  <td>Male</td>
                  <td>Son</td>
                  <td>2002-01-15</td>
                  <td>23</td>
                  <td>Student</td>
                  <td>9876543210</td>
                  <td>john@example.com</td>
                  <td>O+</td>
                  <td>1234-5678-9101</td>
                  <td>F-001</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewMembers;
