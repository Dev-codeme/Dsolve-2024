import React, { useState, useEffect } from 'react';
import './Complaint.css'; // Import CSS file for Complaints styling
import AddComplaint from './AddComplaint'; // Import AddComplaint component

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    let url = 'https://sheetdb.io/api/v1/pz28m37vy1uih';
    const response= fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data));
      .then(json => {
        setComplaints(json);
        // console.log(data);
      });
  }, [])

  const handleUpvote = (id) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id && !complaint.voted ? { ...complaint, upvotes: complaint.upvotes + 1, voted: true } : complaint
      )
    );
    
  };

  const handleDownvote = (id) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === id && !complaint.voted ? { ...complaint, downvotes: complaint.downvotes + 1, voted: true } : complaint
      )
    );
  };

  const handleAddComplaint = (text) => {
    let url = 'https://api.sheety.co/498136fd3da474b49d7a566011f1a89c/sosDatabase/sheet1';
    const newComplaint = {
      id: complaints.length + 1,
      text: text,
      upvotes: 0,
      downvotes: 0,
      voted: false // Initially, the user hasn't voted on this complaint
    };
    let body = {
      sheet1: {
        newComplaint
      }
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => console.log(response.json()))
    .then(json => {
      // Do something with object
      console.log(json);
    });

    setComplaints([...complaints, newComplaint]);
  };

  return (
    <div className="complaints-container">
      <h2>Complaints</h2>
      <AddComplaint onAdd={handleAddComplaint} />
      <ul className="complaints-list">
        {complaints.map((complaint) => (
          <li key={complaint.id} className="complaints-item">
            <h3>{complaint.text}</h3>
            <div className="vote-buttons">
              <button onClick={() => handleUpvote(complaint.id)} disabled={complaint.downvoted}>
                <img src="green-arrow-png-16649.png" className={`up ${complaint.voted ? 'dull' : ''}`} alt="Upvote" />
              </button>
              <button onClick={() => handleDownvote(complaint.id)} disabled={complaint.voted}>
                <img src="pngegg.png" className={`down ${complaint.voted ? 'dull' : ''}`} alt="Downvote" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Complaints;
