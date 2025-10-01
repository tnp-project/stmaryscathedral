import React, { useState, useEffect } from "react";
import "../../css/deathadd.css"; // reuse CSS

const AddBaptismRecord = () => {
  const [familyName, setFamilyName] = useState("");
  const [familySuggestions, setFamilySuggestions] = useState([]);
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [hofOptions, setHofOptions] = useState([]);
  const [selectedHof, setSelectedHof] = useState("");
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");

  const [formData, setFormData] = useState({
    sl_no: "",
    church_of_child: "",
    dob: "",
    baptism_date: "",
    place: "",
    house_name: "",
    father: "",
    mother: "",
    gender: "",
    bapt_name: "",
    official_name: "",
    godparent_name: "",
    godparent_house_name: "",
    church_where_baptised: "",
  });

  // 🔎 Fetch families for search suggestions
  useEffect(() => {
    if (familyName.trim() === "") {
      setFamilySuggestions([]);
      return;
    }
    fetch(`http://localhost:8080/api/families?name=${familyName}`)
      .then((res) => res.json())
      .then((data) => {
        setFamilySuggestions(data);
        setHofOptions(data.map((fam) => fam.hof)); // store HOFs for dropdown
      })
      .catch((err) => console.error("Error fetching families:", err));
  }, [familyName]);

  // 🏠 Select Family from suggestion
  const handleSelectFamily = (fam) => {
    setSelectedFamily(fam);
    setFamilyName(fam.name);
    setFamilySuggestions([]);
    setHofOptions([fam.hof]); // only this family’s hof
    setSelectedHof(fam.hof);
  };

  // 👨‍👩‍👦 Fetch members once family + hof selected
  const fetchMembers = async () => {
    if (!selectedFamily || !selectedHof) {
      alert("⚠️ Please select Family Name and HoF.");
      return;
    }
    try {
      const res = await fetch(
        `http://localhost:8080/api/members?family_number=${selectedFamily.family_number}`
      );
      const data = await res.json();
      if (data.length === 0) {
        alert("❌ No members found for this family.");
      }
      setMembers(data);
    } catch (err) {
      console.error("Error fetching members:", err);
      alert("❌ Could not fetch members.");
    }
  };

  // Autofill when member selected
  useEffect(() => {
    if (selectedMember) {
      const memberObj = members.find((m) => m._id === selectedMember);
      if (memberObj) {
        setFormData((prev) => ({
          ...prev,
          house_name: memberObj.house_name || "",
          father: memberObj.father_name || "",
          mother: memberObj.mother_name || "",
          dob: memberObj.dob ? memberObj.dob.split("T")[0] : "",
          gender: memberObj.gender || "",
        }));
      }
    }
  }, [selectedMember, members]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit baptism record
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMember) {
      alert("⚠️ Please select a member.");
      return;
    }

    const payload = {
      sl_no: formData.sl_no,
      reg_no_family_no: selectedFamily.family_number,
      church_of_child: formData.church_of_child,
      dob: formData.dob,
      baptism_date: formData.baptism_date,
      place: formData.place,
      house_name: formData.house_name,
      father: formData.father,
      mother: formData.mother,
      gender: formData.gender,
      bapt_name: formData.bapt_name,
      official_name: formData.official_name,
      godparent_name: formData.godparent_name,
      godparent_house_name: formData.godparent_house_name,
      church_where_baptised: formData.church_where_baptised,
    };

    try {
      const res = await fetch("http://localhost:8080/api/baptisms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add baptism record");

      alert("✅ Baptism record added successfully!");
      setFamilyName("");
      setSelectedFamily(null);
      setHofOptions([]);
      setSelectedHof("");
      setMembers([]);
      setSelectedMember("");
      setFormData({
        sl_no: "",
        church_of_child: "",
        dob: "",
        baptism_date: "",
        place: "",
        house_name: "",
        father: "",
        mother: "",
        gender: "",
        bapt_name: "",
        official_name: "",
        godparent_name: "",
        godparent_house_name: "",
        church_where_baptised: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Error adding baptism record.");
    }
  };

  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Add Baptism Record</h2>

        {/* 🔎 Family Name with suggestions */}
        <div className="input-group">
          <label>Family Name</label>
          <input
            type="text"
            value={familyName}
            onChange={(e) => {
              setFamilyName(e.target.value);
              setSelectedFamily(null);
              setSelectedHof("");
              setMembers([]);
              setSelectedMember("");
            }}
          />
          {familySuggestions.length > 0 && (
            <ul className="suggestions">
              {familySuggestions.map((fam) => (
                <li key={fam._id} onClick={() => handleSelectFamily(fam)}>
                  {fam.name} ({fam.hof})
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 🏠 HoF dropdown */}
        {hofOptions.length > 0 && (
          <div className="input-group">
            <label>Head of Family</label>
            <select
              value={selectedHof}
              onChange={(e) => setSelectedHof(e.target.value)}
            >
              <option value="">Select HoF</option>
              {hofOptions.map((hof, idx) => (
                <option key={idx} value={hof}>
                  {hof}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* 👨‍👩‍👦 Fetch Members Button */}
        {selectedFamily && (
          <button
            type="button"
            className="fetch-btn"
            onClick={fetchMembers}
          >
            Fetch Members
          </button>
        )}

        {/* Dropdown for Member */}
        {members.length > 0 && (
          <div className="input-group">
            <label>Member</label>
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
          </div>
        )}

        {/* 📋 Inputs (same as before) */}
        <div className="input-group">
          <input
            type="text"
            name="sl_no"
            value={formData.sl_no}
            onChange={handleChange}
            required
          />
          <label>Sl No</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="bapt_name"
            value={formData.bapt_name}
            onChange={handleChange}
          />
          <label>Baptism Name</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="church_of_child"
            value={formData.church_of_child}
            onChange={handleChange}
          />
          <label>Church of Child</label>
        </div>

        <div className="input-group">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          <label>Date of Birth</label>
        </div>

        <div className="input-group">
          <input
            type="date"
            name="baptism_date"
            value={formData.baptism_date}
            onChange={handleChange}
          />
          <label>Date of Baptism</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
          <label>Address</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="house_name"
            value={formData.house_name}
            onChange={handleChange}
          />
          <label>House Name</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="father"
            value={formData.father}
            onChange={handleChange}
          />
          <label>Father</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="mother"
            value={formData.mother}
            onChange={handleChange}
          />
          <label>Mother</label>
        </div>

        <div className="input-group">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Male/Female</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="official_name"
            value={formData.official_name}
            onChange={handleChange}
          />
          <label>Official Name</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="godparent_name"
            value={formData.godparent_name}
            onChange={handleChange}
          />
          <label>Godparent Name</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="godparent_house_name"
            value={formData.godparent_house_name}
            onChange={handleChange}
          />
          <label>Godparent House Name</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="church_where_baptised"
            value={formData.church_where_baptised}
            onChange={handleChange}
          />
          <label>Church Where Baptised</label>
        </div>

        <button type="submit" className="submit-btn">
          Add Baptism Record
        </button>
      </form>
    </div>
  );
};

export default AddBaptismRecord;
