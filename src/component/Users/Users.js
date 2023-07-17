import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <div>
        <h2>Users:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
