import React, { useEffect, useState } from "react";

export default function Products({ checked, handleChange }) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data 받아옴");
        setProducts(data);
      })
      .catch((e) => setError("에러발생!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("clean");
    };
  }, [checked]);

  if (error) return <p>{error}</p>;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            id="checkbox"
            type="checkbox"
            value={checked}
            onChange={handleChange}
            checked={checked}
          />
          <label htmlFor="checkbox">Show Only Sale</label>
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
      )}
    </>
  );
}
