import React, { useState } from 'react';
import axios from 'axios';

function NewAssignment() {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to the server with the form data
    try {
      const response = await axios.post('/api/assignments', { name, dueDate, course });
      console.log(response.data);
      // TODO: handle success or error response from server as desired
    } catch (error) {
      console.error(error);
      // TODO: handle error as desired
    }

    // Reset the form
    setName('');
    setDueDate('');
    setCourse('');
  };

  return (
    <div>
      <h2>New Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
        </div>
        <div>
          <label>Course:</label>
          <input type="text" value={course} onChange={(event) => setCourse(event.target.value)} />
        </div>
        <div>
          <button type="submit">Create Assignment</button>
        </div>
      </form>
    </div>
  );
}

export default NewAssignment;
