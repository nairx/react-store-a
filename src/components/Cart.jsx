import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
export default function Cart() {
  const { cart, setCart, products } = useContext(appContext);
  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  return (
    <div>
      {products.map(
        (value) =>
          cart[value.id] > 0 && (
            <div key={value.id}>
              {value.name}-{value.price}-
              <button onClick={() => decrement(value.id)}>-</button>
              {cart[value.id]}
              <button onClick={() => increment(value.id)}>+</button>-
              {value.price * cart[value.id]}-
              <button onClick={() => handleDelete(value.id)}>Delete</button>
            </div>
          )
      )}
      <hr></hr>
      <h3>Order Value:</h3>
    </div>
  );
}
