import React, { useEffect, useState } from "react";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Orders from "./Orders";
export default function Cart() {
  const { cart, setCart, products, user, orders, setOrders } =
    useContext(appContext);
  const [orderValue, setOrderValue] = useState(0);
  const Navigate = useNavigate();
  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  const placeOrder = () => {
    setOrders([
      ...orders,
      {
        orderDate: Date(),
        email: user.email,
        items: cart,
        total: orderValue,
        status: "pending",
      },
    ]);
    setCart({});
    Navigate("/orders");
  };
  useEffect(() => {
    setOrderValue(
      products.reduce((total, value) => {
        return total + value.price * (cart[value.id] ?? 0);
      }, 0)
    );
  }, [cart]);
  return (
    <div>
      <h3>My Cart</h3>

      {/* {Object.keys(cart).length > 0 ? (<h3>Cart</h3>) : <h3>Cart is empty</h3>} */}

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
      <h4>Order Value:{orderValue}</h4>
      <p>
        {user.email ? (
          <button onClick={placeOrder}>Place Order</button>
        ) : (
          <button onClick={()=>Navigate("/login")}>Login to Order</button>
        )}
      </p>
      {/* <h4>Your Cart is empty</h4> */}
    </div>
  );
}
