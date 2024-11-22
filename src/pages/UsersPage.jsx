import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UsersPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="users-page">
      <h1 className="text-3xl font-bold mb-5">Users Page</h1>
      {data.map((user) => (
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  );
};

export default UsersPage;
