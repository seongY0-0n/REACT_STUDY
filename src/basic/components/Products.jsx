import React, { useEffect, useState } from 'react';

export default function Products({checked, handleChange}) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log('data 받아옴');
      setProducts(data);
    })
    return () => {
      console.log('clean')
    }
  }, [checked])
  return (
    <>
      <input id="checkbox" type='checkbox' value={checked} onChange={handleChange} checked={checked} />
      <label htmlFor='checkbox'>Show Only Sale</label>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <article>
              <h3>{products.name}</h3>
              <p>{products.price}</p>
            </article>
          </li>
        ))}
      </ul>  
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

