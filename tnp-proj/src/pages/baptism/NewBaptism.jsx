import React, { useState } from "react";
import "../../css/newbaptism.css";


const NewBaptism = () => {
  const [formData, setFormData] = useState({
    memberName: "",
    familyNumber: "",
    baptismDate: "",
    priest: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/baptisms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save baptism record");

      alert("✅ Baptism record added successfully!");
      setFormData({
        memberName: "",
        familyNumber: "",
        baptismDate: "",
        priest: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error adding baptism record");
    }
  };

  return (
    <div className="container">
      <h2>New Baptism</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
            required
          />
          <label>Member Name</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="familyNumber"
            value={formData.familyNumber}
            onChange={handleChange}
            required
          />
          <label>Family Number</label>
        </div>
        <div className="input-group">
          <input
            type="date"
            name="baptismDate"
            value={formData.baptismDate}
            onChange={handleChange}
            required
          />
          <label>Baptism Date</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="priest"
            value={formData.priest}
            onChange={handleChange}
          />
          <label>Priest Name</label>
        </div>
        <div className="input-group">
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
          />
          <label>Notes</label>
        </div>

        <button type="submit" className="submit-btn">
          Add Baptism
        </button>
      </form>
    </div>
  );
};

export default NewBaptism;
