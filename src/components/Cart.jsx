import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
export default function Cart() {
  const { cart, setCart, products } = useContext(appContext);
  return (
    <div>
      {products.map((value) => cart[value.id] && <div>{value.name}-{value.price}-{cart[value.id]}-{value.price*cart[value.id]}</div>)}
    </div>
  );
}
