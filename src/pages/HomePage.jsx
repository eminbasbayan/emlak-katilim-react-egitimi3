import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="home-page">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className='my-4 text-2xl text-green-600'>Hoş geldiniz {user?.fullName}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet earum
        magnam repellat expedita provident? Placeat sint dolorum adipisci
        doloribus recusandae rem. Architecto inventore adipisci reiciendis non
        possimus placeat impedit neque!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet earum
        magnam repellat expedita provident? Placeat sint dolorum adipisci
        doloribus recusandae rem. Architecto inventore adipisci reiciendis non
        possimus placeat impedit neque!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet earum
        magnam repellat expedita provident? Placeat sint dolorum adipisci
        doloribus recusandae rem. Architecto inventore adipisci reiciendis non
        possimus placeat impedit neque!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet earum
        magnam repellat expedita provident? Placeat sint dolorum adipisci
        doloribus recusandae rem. Architecto inventore adipisci reiciendis non
        possimus placeat impedit neque!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet earum
        magnam repellat expedita provident? Placeat sint dolorum adipisci
        doloribus recusandae rem. Architecto inventore adipisci reiciendis non
        possimus placeat impedit neque!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet earum
        magnam repellat expedita provident? Placeat sint dolorum adipisci
        doloribus recusandae rem. Architecto inventore adipisci reiciendis non
        possimus placeat impedit neque!
      </p>
    </div>
  );
};

export default HomePage;
