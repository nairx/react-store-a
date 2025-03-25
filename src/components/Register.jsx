import React from "react";
import { Link } from "react-router-dom";
import "./Register.css"
export default function Register() {
  return (
    <div className="App-Register-Row">
      <div className="App-Register-Box">
        <h3>Registration Form</h3>
        <p>
          <input type="text" placeholder="Enter Name"></input>
        </p>
        <p>
          <input type="text" placeholder="Email address"></input>
        </p>
        <p>
          <input type="password" placeholder="New password"></input>
        </p>
        <p>
          <button>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Login here!</Link>
        </p>
      </div>
      <div className="App-Register-Box">
        <h3>Userlist</h3>
      </div>
    </div>
  );
}
