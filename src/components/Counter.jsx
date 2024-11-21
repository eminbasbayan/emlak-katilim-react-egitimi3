import { useEffect, useState } from 'react';
import Button from './UI/Button';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    console.log('component ilk yüklendiğinde çalışır!');
  }, []);

  useEffect(() => {
    console.log('component güncellendiğinde çalışır!');
  }, [count]);

  return (
    <div className="counter mb-24">
      <div className='mb-10'>
        <h3 className="text-3xl font-bold">{fullName}</h3>
        <input
          type="text"
          className="border"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className=" flex items-center ">
        <Button onClick={() => setCount(count + 1)}>Arttır</Button>
        <p className="text-xl font-bold mx-2">{count}</p>
        <Button onClick={() => setCount(count - 1)} color="danger">
          Azalt
        </Button>
      </div>
    </div>
  );
};

export default Counter;
