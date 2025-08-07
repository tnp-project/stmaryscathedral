import React from 'react';
import '../css/deathrecords.css'; // Create this file next

const DeathRecords = () => {
  const sampleData = [
    {
      id: 1,
      name: 'Joseph Mathew',
      dob: '1952-03-15',
      dod: '2022-12-01',
      age: 70,
      familyNo: 'F-023',
      cause: 'Natural Causes',
    },
    {
      id: 2,
      name: 'Elizabeth Jacob',
      dob: '1945-08-22',
      dod: '2023-03-10',
      age: 77,
      familyNo: 'F-045',
      cause: 'Cardiac Arrest',
    }
  ];

  return (
    <div className="death-container">
      <h2 className="death-title">Death Records</h2>
      <div className="death-table-wrapper">
        <table className="death-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Date of Death</th>
              <th>Age</th>
              <th>Family No</th>
              <th>Cause of Death</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.dob}</td>
                <td>{person.dod}</td>
                <td>{person.age}</td>
                <td>{person.familyNo}</td>
                <td>{person.cause}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeathRecords;
