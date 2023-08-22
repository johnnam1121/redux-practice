Notes:

What is Redux?
tldr a state management tool. makes it so we can access an items state from any component

configureStore.js is the file where we store the states
We must set up index.js with a provider from the redux library and set store to the function configureStore

3 things to understand on how redux works
state ex:count = 0
this is the state of the thing we are dealing with

action ex: increment, decrement
this is what happens when we do blah. actions trigger the reducer

reducer: count++, count--
this is what the action is supposed to do to the state when the action is called

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