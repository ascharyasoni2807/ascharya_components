import React, { useEffect, useState } from "react";

const fetchUsersData = async () => {
  try {
    const response = await fetch(
      "http://dummyjson.com/users/filter?key=hair.color&value=Brown"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch users data:", error);
    throw error;
  }
};
// Loading Component
const Loading = () => {
  return <div>Loading...</div>;
};

// Error Component
const Error = ({ message }) => {
  return <div>Error: {message}</div>;
};

// UsersTable Component
const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsersData();
        setUsers(data?.users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  console.log(users);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user?.id}>
            <td>{user?.id}</td>
            <td>{user?.firstName}</td>
            <td>{user?.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const UserList = () => {
  return (
    <div className="App">
      <h1>User List</h1>
      <UsersTable />
    </div>
  );
};

export default UserList;
