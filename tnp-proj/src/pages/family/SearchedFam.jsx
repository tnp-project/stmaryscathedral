import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/viewmembers.css";

const SearchedFam = () => {
  const location = useLocation();
  const { family_number } = location.state || {}; // get family_number from SearchFamily
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!family_number) return;

    fetch(`http://localhost:8080/api/members?family_number=${family_number}`)
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch((err) => {
        console.error("Error fetching members:", err);
        setError("Could not load members");
      });
  }, [family_number]);

  return (
    <div className="member-table-container1">
      <h2>Family Members ({family_number})</h2>
      {error && <div style={{ color: "red", padding: "8px" }}>{error}</div>}

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
              <th>HoF</th>
              <th>Baptism</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member, idx) => (
                <tr key={member._id || idx}>
                  <td>{idx + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.gender}</td>
                  <td>{member.relation || ""}</td>
                  <td>{member.dob ? new Date(member.dob).toLocaleDateString() : ""}</td>
                  <td>{member.age || ""}</td>
                  <td>{member.occupation || ""}</td>
                  <td>{member.phone || ""}</td>
                  <td>{member.email || ""}</td>
                  <td>{member.blog_group || ""}</td>
                  <td>{member.aadhaar || ""}</td>
                  <td>{member.hof ? "Yes" : "No"}</td>
                  <td>{member.baptism ? "Yes" : "No"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13">No members found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchedFam;
