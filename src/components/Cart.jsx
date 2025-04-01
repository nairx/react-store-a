import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
export default function Cart() {
  const { cart, setCart, products } = useContext(appContext);
  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };
  
  return (
    <div>
      {products.map(
        (value) =>
          cart[value.id]>0 && (
            <div key={value.id}>
              {value.name}-{value.price}-<button>-</button>{cart[value.id]}<button>+</button>-
              {value.price * cart[value.id]}-
              <button onClick={() => handleDelete(value.id)}>Delete</button>
            </div>
          )
      )}
    </div>
  );
}
