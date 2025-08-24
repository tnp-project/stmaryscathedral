import React, { useEffect, useState } from "react";
import "../../css/searchfamily.css";
import { useNavigate } from "react-router-dom";

const SearchFamily = () => {
  const [families, setFamilies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/families") // adjust if deployed
      .then((res) => res.json())
      .then((data) => setFamilies(data))
      .catch((err) => console.error("Error fetching families:", err));
  }, []);

  return (
    <>
      <div className="container-input4">
        <input
          type="text"
          placeholder="SEARCH FAMILY"
          name="text"
          className="input"
        />
        <svg
          fill="#000000"
          width="20px"
          height="20px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd"></path>
        </svg>
      </div>

      <div className="member-table-container1">
        <h2>FAMILIES</h2>
        <div className="table-wrapper1">
          <table className="member-table">
            <thead>
              <tr>
                <th>FAMILY NO</th>
                <th>FAMILY Name</th>
                <th>HoF</th>
              </tr>
            </thead>
            <tbody>
              {families.map((fam) => (
                <tr
                  key={fam._id}
                  onClick={() => navigate("/SearchedFam", { state: fam })}
                >
                  <td>{fam.family_number}</td>
                  <td>{fam.name}</td>
                  <td>{fam.hof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SearchFamily;
