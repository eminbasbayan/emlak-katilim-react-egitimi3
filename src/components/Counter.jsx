import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import { arttir, azalt } from '../redux/slices/counterSlice';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('component ilk yüklendiğinde çalışır!');
  }, []);

  useEffect(() => {
    console.log('component güncellendiğinde çalışır!');
  }, [count]);

  return (
    <div className="counter mb-24">
      <div className=" flex items-center ">
        <Button onClick={() => dispatch(arttir())}>Arttır</Button>
        <p className="text-xl font-bold mx-2">{count}</p>
        <Button onClick={() => dispatch(azalt())} color="danger">
          Azalt
        </Button>
      </div>
    </div>
  );
};

export default Counter;
