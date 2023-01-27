import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  const minusClick = () => setCount((prev) => prev - 1);
  return (
    <div className='container'>
      <div className="banner">
        Total Count: {count} {count > 10 ? '불' : '얼음'}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} onClick2={minusClick}/>
        <Counter total={count} onClick={handleClick} onClick2={minusClick}/>
      </div>

    </div>
  );
}

