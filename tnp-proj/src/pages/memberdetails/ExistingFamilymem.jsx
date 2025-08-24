import React, { useState } from "react";
import "../../css/existingfamadd.css";

const ExistingFamilymem = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    relation: "",
    dob: "",
    age: "",
    occupation: "",
    phone: "",
    email: "",
    blog_group: "",
    aadhaar: "",
    family_number: "",
    hof: "No", // Yes/No, will convert to Boolean
    baptismStatus: "No", // Yes/No, will convert to Boolean
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // prepare payload matching backend model
      const payload = {
        sl_no: Date.now(), // temporary unique number
        name: formData.firstname + " " + formData.lastname,
        gender: formData.gender,
        relation: formData.relation,
        dob: formData.dob,
        age: formData.age ? Number(formData.age) : undefined,
        occupation: formData.occupation,
        phone: formData.phone,
        email: formData.email,
        blog_group: formData.blog_group,
        aadhaar: formData.aadhaar,
        family_number: formData.family_number,
        hof: formData.hof === "Yes",
        baptism: formData.baptismStatus === "Yes",
      };

      const res = await fetch("http://localhost:5000/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Backend error:", errData);
        throw new Error(errData.error || "Failed to add member");
      }

      const data = await res.json();
      alert("✅ Member added successfully!");
      console.log("Saved Member:", data);

      // reset form
      setFormData({
        firstname: "",
        lastname: "",
        gender: "",
        relation: "",
        dob: "",
        age: "",
        occupation: "",
        phone: "",
        email: "",
        blog_group: "",
        aadhaar: "",
        family_number: "",
        hof: "No",
        baptismStatus: "No",
      });
    } catch (err) {
      console.error(err);
      alert(`❌ Error adding member: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="name-row">
          <div className="input-group">
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <label>First Name</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
            <label>Last Name</label>
          </div>
        </div>

        {/* Gender & Relation */}
        <div className="name-row">
          <div className="input-group">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label>Gender</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
            />
            <label>Relation</label>
          </div>
        </div>

        {/* DOB & Age */}
        <div className="name-row">
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
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <label>Age</label>
          </div>
        </div>

        {/* Occupation & Phone */}
        <div className="name-row">
          <div className="input-group">
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
            <label>Occupation</label>
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <label>Phone</label>
          </div>
        </div>

        {/* Email & Blog Group */}
        <div className="name-row">
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="blog_group"
              value={formData.blog_group}
              onChange={handleChange}
            />
            <label>Blood Group / Blog Group</label>
          </div>
        </div>

        {/* Aadhaar & Family Number */}
        <div className="name-row">
          <div className="input-group">
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
            />
            <label>Aadhaar</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="family_number"
              value={formData.family_number}
              onChange={handleChange}
            />
            <label>Family Number</label>
          </div>
        </div>

        {/* Hof & Baptism */}
        <div className="name-row">
          <div className="input-group">
            <select
              name="hof"
              value={formData.hof}
              onChange={handleChange}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label>Head of Family</label>
          </div>
          <div className="input-group">
            <select
              name="baptismStatus"
              value={formData.baptismStatus}
              onChange={handleChange}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label>Baptism</label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default ExistingFamilymem;
