import React, { useState } from 'react';

export default function Counter({total, onClick, onClick2}) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <p className='number'>{count}<span className='total'>/{total}</span></p>
      <button className='button' onClick={()=>{
        setCount((prev) => prev + 1);
        onClick();
      }}>Add +</button>
      <button className='button' onClick={()=>{
        setCount((prev) => prev - 1);
        onClick2();
      }}>Minus -</button>         
    </div>
  );
}

