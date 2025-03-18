import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <h1>My React Store</h1>
      <div>
        <Link to="products">Home</Link>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
}
