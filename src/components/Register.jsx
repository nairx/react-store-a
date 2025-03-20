import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div>
      <h3>Registration Form</h3>
      <p><input type="text" placeholder='Enter Name'></input></p>
      <p><input type="text" placeholder='Email address'></input></p>
      <p><input type="password" placeholder='New password'></input></p>
      <p><button>Submit</button></p>
      <p><Link to="../login">Already a member? Login here!</Link></p>
    </div>
  )
}
