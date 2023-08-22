import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

// must call the functions
import { increment, decrement,incrementByAmount } from './redux/counter';

export default function App() {
  const { count } = useSelector(state => state.counter)
  // this does the same thing
  // const count = useSelector(state => state.counter.count)

  // dispatch is used to call any action from any reducer
  const dispatch = useDispatch();

  return (
    <div className='page'>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(30))}>Increment by 30</button>
    </div >
  );
}