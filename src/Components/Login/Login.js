import React, { useState } from 'react';
import axios from 'axios';

function Login() {

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const submitForm = () => {
    axios.post('http://127.0.0.1:8000/login', {
      email: login.email,
      password: login.password
    }).then((result) => {
      if(result.data.code !== 401) {
        console.log('log in')
      } else {
        console.log('bad password')
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" onChange={(event) => setLogin({...login, email: event.target.value})} value={login.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" onChange={(event) => setLogin({...login, password: event.target.value})} value={login.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button>
    </div>
  )
}

export default Login;