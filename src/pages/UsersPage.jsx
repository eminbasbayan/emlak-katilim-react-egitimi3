import React from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

const UsersPage = () => {
  const data = useLoaderData();
  const { productData } = useSelector((state) => state.product);

  return (
    <div className="users-page">
      <h1 className="text-3xl font-bold mb-5">Users Page</h1>
      {data.map((user) => (
        <p key={user.id}>{user.title}</p>
      ))}
      <h2 className="text-3xl my-4">Products</h2>
      {productData?.map((item) => (
        <p className="font-bold" key={item.id}>
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default UsersPage;
