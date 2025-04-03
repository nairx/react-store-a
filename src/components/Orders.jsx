import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
export default function Orders() {
  const { orders } = useContext(appContext);
  return (
    <div>
      <h3>My Orders</h3>
      {orders.map((value) => (
        <div>
          {value.orderDate}-{value.email}-{Object.keys(value.items).length}-
          {value.total}-{value.status}
        </div>
      ))}
    </div>
  );
}
