import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { UsersResult } from '@poc/api';

function App() {
  const [users, setUsers] = useState<UsersResult>([]);

  useEffect(() => {
    axios.get<UsersResult>('http://localhost:4000/users').then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li>
            {user.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
