import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { appContext } from "../App";
import "./Register.css";
export default function Register() {
  const { users, setUsers, user, setUser } = useContext(appContext);
  const [msg, setMsg] = useState();
  const msgRef = useRef();
  const Navigate = useNavigate()
  const handleSubmit = () => {
    const found = users.find((value) => value.email === user.email);
    if (found) {
      setMsg("User already exists");
      msgRef.current.style.color = "red";
    } else {
      setMsg();
      setUsers([...users, user]);
      //setUser({ ...user, name: "", email: "", password: "" });
      Navigate("/")
    }
  };
  const handleDelete = (email) => {
    setUsers(users.filter((value) => value.email != email));
  };
  return (
    <div className="App-Register-Row">
      <div className="App-Register-Box">
        <h3>Registration Form</h3>
        <p ref={msgRef}>{msg}</p>
        <p>
          <input
            type="text"
            value={user.name}
            placeholder="Enter Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            value={user.email}
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            value={user.password}
            placeholder="New password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Login here!</Link>
        </p>
      </div>
      <div className="App-Register-Box">
        <h3>Userlist</h3>
        <table className="App-Register-Table">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th></th>
          </tr>
          {users.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td>
                <button onClick={() => handleDelete(value.email)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
