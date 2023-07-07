import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>      
    </div>
  );
};

export default Dashboard;