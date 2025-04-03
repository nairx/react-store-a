import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
export default function Orders() {
  const { orders,user } = useContext(appContext);
  return (
    <div>
      <h3>My Orders</h3>
      {orders.map(
        (value) =>
          value.email === user.email && (
            <div>
              {value.orderDate}-{value.email}-{Object.keys(value.items).length}-
              {value.total}-{value.status}
            </div>
          )
      )}
    </div>
  );
}
