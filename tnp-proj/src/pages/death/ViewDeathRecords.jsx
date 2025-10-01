import React, { useEffect, useState } from "react";
import "../../css/viewdeath.css";

const ViewDeathRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/deaths");
        if (!res.ok) throw new Error("Failed to fetch death records");
        const data = await res.json();
        setRecords(data);
      } catch (err) {
        console.error(err);
        alert("❌ Error fetching records: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="death-container">
      <h2>Death Records</h2>
      {loading ? (
        <p>Loading...</p>
      ) : records.length === 0 ? (
        <p>No death records found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="death-table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Family No</th>
                <th>Name</th>
                <th>House Name</th>
                <th>Address/Place</th>
                <th>Father/Husband Name</th>
                <th>Mother/Wife Name</th>
                <th>Death Date</th>
                <th>Burial Date</th>
                <th>Age</th>
                <th>Conducted by</th>
                <th>Cause of Death</th>
                <th>Cell No</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec) => (
                <tr key={rec._id}>
                  <td>{rec.sl_no}</td>
                  <td>{rec.family_no}</td>
                  <td>{rec.name}</td>
                  <td>{rec.house_name || "-"}</td>
                  <td>{rec.address_place || "-"}</td>
                  <td>{rec.father_husband_name || "-"}</td>
                  <td>{rec.mother_wife_name || "-"}</td>
                  <td>{rec.death_date ? new Date(rec.death_date).toLocaleDateString() : "-"}</td>
                  <td>{rec.burial_date ? new Date(rec.burial_date).toLocaleDateString() : "-"}</td>
                  <td>{rec.age || "-"}</td>
                  <td>{rec.conducted_by || "-"}</td>
                  <td>{rec.cause_of_death || "-"}</td>
                  <td>{rec.cell_no || "-"}</td>
                  <td>{rec.remarks || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewDeathRecords;
