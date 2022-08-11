import axios from "axios";
import React, { useState } from "react";

const SignUp: React.FC = () => {

  const [userName,setUserName]=useState("");


  const show= async ()=>{
  //   const res = await axios.get('https://httpbin.org/get', {
  // headers: {
  //   'Test-Header': 'test-value'
  // }
  // });
  axios.get('http://localhost:5000/user')
  .then(function (response) {
    console.log(response.data);
    setUserName(response.data.name);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  });
 
  }
  return (
    <React.Fragment>
      <form>
        <h3>Sign Up</h3>

        <div className="form">
          <div className="mb-3">
            <label className="lbl">First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User name"
            />
          </div>

          <div className="mb-3">
            <label className="lbl">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label className="lbl">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/signin">sign in?</a>
          </p>
        </div>
      </form>
      <button onClick={(show)} >
        <label>{userName}</label>
      Show
      </button>
    </React.Fragment>
  );
};

export default SignUp;
