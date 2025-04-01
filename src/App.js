import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext,useState } from "react";
export const appContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [cart,setCart] = useState({})
  const products = [
    { id: 1, name: "Product 1", price: 30 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 45 },
    { id: 4, name: "Product 4", price: 95 },
    { id: 5, name: "Product 5", price: 70 },
    { id: 6, name: "Product 6", price: 25 },
  ];
  return (
    <div>
      <BrowserRouter>
        <appContext.Provider value={{ users, setUsers, user, setUser,products,cart,setCart }}>
          <Header />
          <Routes>
            <Route index element={<Products />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />}></Route>
          </Routes>
          <Footer />
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
