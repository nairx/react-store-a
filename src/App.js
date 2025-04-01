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
  return (
    <div>
      <BrowserRouter>
        <appContext.Provider value={{ users, setUsers, user, setUser }}>
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
