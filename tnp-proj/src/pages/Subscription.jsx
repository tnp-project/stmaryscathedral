import React from 'react';
import '../css/subscription.css';

const Subscription = () => {
  const subscriptions = [
    {
      id: 1,
      member: 'Thomas Mathew',
      familyNo: 'F-001',
      amount: '₹500',
      date: '2025-01-10',
      type: 'Annual',
    },
    {
      id: 2,
      member: 'Anna Joseph',
      familyNo: 'F-014',
      amount: '₹250',
      date: '2025-04-20',
      type: 'Monthly',
    }
  ];

  return (
    <div className="sub-container">
      <h2 className="sub-title">Subscription Records</h2>
      <div className="sub-table-wrapper">
        <table className="sub-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Member Name</th>
              <th>Family No</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.member}</td>
                <td>{item.familyNo}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscription;
