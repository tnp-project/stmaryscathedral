import React, { useState } from "react";
import "../../css/deathadd.css";

const AddDeathRecord = () => {
  const [familyNumber, setFamilyNumber] = useState("");
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");
  const [formData, setFormData] = useState({
    dod: "",
    reason: "",
    place_of_death: "",
    notes: "",
  });

  // Fetch members by family number
  const fetchMembers = async () => {
    if (!familyNumber) {
      alert("⚠️ Please enter a family number.");
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:8080/api/members?family_number=${familyNumber}`
      );
      const data = await res.json();

      if (data.length === 0) {
        alert("❌ No members found for this family number.");
      }

      setMembers(data);
    } catch (err) {
      console.error("Error fetching members:", err);
      alert("❌ Could not fetch members for this family number.");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit death record
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMember) {
      alert("Please select a member.");
      return;
    }

    const memberObj = members.find((m) => m._id === selectedMember);

    const payload = {
      memberId: memberObj._id,
      memberName: memberObj.name,
      familyNumber: familyNumber,
      dod: formData.dod,
      reason: formData.reason,
      place_of_death: formData.place_of_death,
      notes: formData.notes,
    };

    try {
      const res = await fetch("http://localhost:8080/api/deaths", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to add death record");
      }

      alert("✅ Death record added successfully!");
      setFamilyNumber("");
      setMembers([]);
      setSelectedMember("");
      setFormData({
        dod: "",
        reason: "",
        place_of_death: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error adding death record.");
    }
  };

  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Add Death Record</h2>

        {/* Family Number with Fetch button */}
        <div className="input-group">
          <label>Family Number</label>
          <input
            type="text"
            name="familyNumber"
            value={familyNumber}
            onChange={(e) => setFamilyNumber(e.target.value)}
          />
          <button
            type="button"
            className="fetch-btn"
            onClick={fetchMembers}
          >
            Fetch Member
          </button>
        </div>

        {/* Member Selection */}
        {members.length > 0 && (
          <div className="input-group">
            <select
              value={selectedMember}
              onChange={(e) => setSelectedMember(e.target.value)}
              required
            >
              <option value="">Select Member</option>
              {members.map((m) => (
                <option key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))}
            </select>
            <label>Member</label>
          </div>
        )}

        {/* Date of Death */}
        <div className="input-group">
          <input
            type="date"
            name="dod"
            value={formData.dod}
            onChange={handleChange}
            required
          />
          <label>Date of Death</label>
        </div>

        {/* Reason */}
        <div className="input-group">
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          />
          <label>Reason</label>
        </div>

        {/* Place of Death */}
        <div className="input-group">
          <input
            type="text"
            name="place_of_death"
            value={formData.place_of_death}
            onChange={handleChange}
          />
          <label>Place of Death</label>
        </div>

        {/* Notes */}
        <div className="input-group">
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
          <label>Notes</label>
        </div>

        <button type="submit" className="submit-btn">
          Add Death Record
        </button>
      </form>
    </div>
  );
};

export default AddDeathRecord;
