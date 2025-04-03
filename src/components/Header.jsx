import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../App";
export default function Header() {
  const { user, setUser, cart, products, orders } = useContext(appContext);
  const [myOrder, setMyOrder] = useState([]);
  const items = products.filter((value) => cart[value.id] > 0);
  useEffect(() => {
    const found = orders.filter((value) => value.email === user.email);
    setMyOrder(found.length);
  }, [orders]);
  return (
    <div className="App-Header-Row">
      <h1>My React Store</h1>
      <div className="App-Header-Links">
        <Link to="products" className="App-Header-Link">
          Home
        </Link>
        <Link to="cart" className="App-Header-Link">
          Cart({items.length})
        </Link>

        {orders.find((value) => value.email === user.email) && (
          <Link to="orders" className="App-Header-Link">
            Orders({myOrder})
          </Link>
        )}

        {user.email === "" || !user.email ? (
          <Link to="login" className="App-Header-Link">
            Login
          </Link>
        ) : (
          <Link
            to="login"
            className="App-Header-Link"
            onClick={() =>
              setUser({ ...user, name: "", email: "", password: "" })
            }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
