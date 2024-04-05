import React, { useState } from 'react';
import './Complaint.css'; // Import CSS file for Complaints styling

function Complaints() {
  const [complaints, setComplaints] = useState([
    { id: 1, text: 'Complaint 1', upvotes: 0, downvotes: 0 },
    { id: 2, text: 'Complaint 2', upvotes: 0, downvotes: 0 },
    // Add more complaints as needed
  ]);

  const handleUpvote = (id) => {
    setComplaints(prevComplaints =>
      prevComplaints.map(complaint =>
        complaint.id === id ? { ...complaint, upvotes: complaint.upvotes + 1 } : complaint
      )
    );
  };

  const handleDownvote = (id) => {
    setComplaints(prevComplaints =>
      prevComplaints.map(complaint =>
        complaint.id === id ? { ...complaint, downvotes: complaint.downvotes + 1 } : complaint
      )
    );
  };

  return (
    <div className="complaints-container">
      <h2>Complaints</h2>
      <ul className="complaints-list">
        {complaints.map(complaint => (
          <li key={complaint.id} className="complaints-item">
            <h3>{complaint.text}</h3>
            <div className="vote-buttons">
              <button onClick={() => handleUpvote(complaint.id)}>Upvote ({complaint.upvotes})</button>
              <button onClick={() => handleDownvote(complaint.id)}>Downvote ({complaint.downvotes})</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Complaints;
