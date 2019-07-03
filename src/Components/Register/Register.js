import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    axios.post('http://localhost:8000/users', {
      password: password,
      lastName: lastName,
      firstName: firstName,
      address: address,
      email: email
    })
    .then((result) => {
      console.log(result.data);
    })
  }

  return (
    <div className="mt-5">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputFirstName4">FirstName</label>
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} class="form-control" id="inputFirstName4" placeholder="FirstName" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputLastName4">LastName</label>
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}  class="form-control" id="inputLastName4" placeholder="LastName" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}  class="form-control" id="inputEmail4" placeholder="Email" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} class="form-control" id="inputPassword4" placeholder="Password" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Retype password</label>
          <input type="password" value={retypePassword} onChange={(event) => setRetypePassword(event.target.value)} class="form-control" id="inputPassword4" placeholder="Password" />
        </div>
        {password !== retypePassword && <p className="text-danger">Password not equal</p>}
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} class="form-control" id="inputAddress" placeholder="" />
      </div>
      <button class="btn btn-primary" onClick={handleRegister}>Sign in</button>
    </div>
  )
}

export default Register;