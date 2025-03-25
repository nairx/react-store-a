import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  return (
    <div className="App-Register-Row">
      <div className="App-Register-Box">
        <h3>Registration Form</h3>
        <p>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
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
          {users.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
