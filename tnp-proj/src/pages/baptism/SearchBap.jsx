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

  const filteredBaptisms = baptisms.filter((b) =>
    (b.memberName || "").toLowerCase().includes(search.toLowerCase())
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
              <th>Member Name</th>
              <th>Family Number</th>
              <th>Baptism Date</th>
              <th>Priest</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredBaptisms.length > 0 ? (
              filteredBaptisms.map((bap, idx) => (
                <tr key={bap._id || idx}>
                  <td>{idx + 1}</td>
                  <td>{bap.memberName}</td>
                  <td>{bap.familyNumber}</td>
                  <td>{bap.baptismDate ? new Date(bap.baptismDate).toLocaleDateString() : ""}</td>
                  <td>{bap.priest || ""}</td>
                  <td>{bap.notes || ""}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No baptism records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBap;
