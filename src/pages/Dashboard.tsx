import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/apiService';
import { useUserStore } from '../store/userStore';

// Define the User type to match the data structure returned from the API
interface User {
  id: number;
  first_name: string;
  // Add other properties as needed (e.g., last_name, email)
}

const Dashboard = () => {
  // Set the state with an array of User objects
  const [users, setUsers] = useState<User[]>([]);
  const token = useUserStore((state) => state.token);

  useEffect(() => {
    if (token) {
      fetchUsers(token).then((fetchedUsers) => {
        setUsers(fetchedUsers);
      });
    }
  }, [token]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.first_name}</div>
      ))}
    </div>
  );
};

export default Dashboard;
