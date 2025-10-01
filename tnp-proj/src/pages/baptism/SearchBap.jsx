import React, { useEffect, useState } from "react";
import "../../css/viewmembers.css"; // reuse table styles

const SearchBap = () => {
  const [baptisms, setBaptisms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/baptisms")
      .then((res) => res.json())
      .then((data) => setBaptisms(data))
      .catch((err) => console.error("Error fetching baptisms:", err));
  }, []);

  // filter by child name, father, mother
  const filteredBaptisms = baptisms.filter((b) =>
    [
      b.baptName,
      b.officialName,
      b.father,
      b.mother,
      b.regNo,
      b.familyNo,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="member-table-container1">
      <div className="container-input2">
        <input
          type="text"
          placeholder="SEARCH BAPTISM"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />
      </div>

      <h2>Baptism Records</h2>

      <div className="table-wrapper1">
        <table className="member-table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Reg. No / Family No</th>
              <th>Church of Child</th>
              <th>Date of Birth</th>
              <th>Date of Baptism</th>
              <th>Place</th>
              <th>House Name</th>
              <th>Father</th>
              <th>Mother</th>
              <th>Male/Female</th>
              <th>Bapt. Name</th>
              <th>Official Name</th>
              <th>Godparent Name</th>
              <th>Godparent House</th>
              <th>Church Where Baptised</th>
            </tr>
          </thead>
          <tbody>
            {filteredBaptisms.length > 0 ? (
              filteredBaptisms.map((bap, idx) => (
                <tr key={bap._id || idx}>
                  <td>{idx + 1}</td>
                  <td>{bap.regNo || bap.familyNo || ""}</td>
                  <td>{bap.churchOfChild || ""}</td>
                  <td>
                    {bap.dob ? new Date(bap.dob).toLocaleDateString() : ""}
                  </td>
                  <td>
                    {bap.dateOfBaptism
                      ? new Date(bap.dateOfBaptism).toLocaleDateString()
                      : ""}
                  </td>
                  <td>{bap.place || ""}</td>
                  <td>{bap.houseName || ""}</td>
                  <td>{bap.father || ""}</td>
                  <td>{bap.mother || ""}</td>
                  <td>{bap.gender || ""}</td>
                  <td>{bap.baptName || ""}</td>
                  <td>{bap.officialName || ""}</td>
                  <td>{bap.godparentName || ""}</td>
                  <td>{bap.godparentHouseName || ""}</td>
                  <td>{bap.churchWhereBaptised || ""}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="15">No baptism records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBap;
