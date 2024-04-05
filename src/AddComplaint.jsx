// AddComplaint.js
import React, { useState } from 'react';

function AddComplaint({ onAdd }) {
  const [newComplaint, setNewComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComplaint.trim()) return;
    onAdd(newComplaint);
    setNewComplaint('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your complaint..."
        value={newComplaint}
        onChange={(e) => setNewComplaint(e.target.value)}
      />
      <button type="submit">Add Complaint</button>
    </form>
  );
}

export default AddComplaint;
