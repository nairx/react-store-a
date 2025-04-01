import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";
export default function Products() {
  const { user, products } = useContext(appContext);

  return (
    <div>
      {user.name}
      <div className="App-Products-Row">
        {products.map((value, index) => (
          <div className="App-Products-Box" key={index}>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
