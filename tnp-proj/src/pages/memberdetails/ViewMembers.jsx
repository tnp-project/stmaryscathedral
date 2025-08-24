// src/pages/memberdetails/ViewMembers.jsx
import React, { useEffect, useState } from "react";
import "../../css/viewmembers.css";
import { getMembers } from "../../api"; // <-- named import from src/api.js

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let mounted = true;
    getMembers()
      .then((res) => {
        if (!mounted) return;
        setMembers(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching members:", err);
        setError("Could not load members");
      });

    return () => {
      mounted = false;
    };
  }, []);

  const filteredMembers = members.filter((m) =>
    (m.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container-input2">
        <input
          type="text"
          placeholder="SEARCH MEMBER"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />
        {/* keep your svg here */}
      </div>

      <div className="member-table-container1">
        <h2>Members</h2>

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
                <th>Family No</th>
                <th>HoF</th>
                <th>Baptism</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, idx) => (
                  <tr key={member._id || idx}>
                    <td>{idx + 1}</td>
                    <td>{member.name || `${member.firstName || ""} ${member.lastName || ""}`}</td>
                    <td>{member.gender || ""}</td>
                    <td>{member.relation || ""}</td>
                    <td>{member.dob ? new Date(member.dob).toLocaleDateString() : ""}</td>
                    <td>{member.age || ""}</td>
                    <td>{member.occupation || ""}</td>
                    <td>{member.phone || ""}</td>
                    <td>{member.email || ""}</td>
                    <td>{member.blog_group || ""}</td>
                    <td>{member.aadhaar || member.aadhaar || ""}</td>
                    <td>{member.family_number || member.familyNo || ""}</td>
                    <td>{member.hof || member.isHof ? "Yes" : "No"}</td>
                    <td>{member.baptism ? "Yes" : "No"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="14">No members found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewMembers;
