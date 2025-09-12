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
                <th>Member Name</th>
                <th>Family Number</th>
                <th>Date of Death</th>
                <th>Reason</th>
                <th>Place of Death</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec) => (
                <tr key={rec._id}>
                  <td>{rec.memberName}</td>
                  <td>{rec.familyNumber}</td>
                  <td>{new Date(rec.dod).toLocaleDateString()}</td>
                  <td>{rec.reason || "-"}</td>
                  <td>{rec.place_of_death || "-"}</td>
                  <td>{rec.notes || "-"}</td>
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
