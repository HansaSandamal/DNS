
import React, { useState } from "react";

type SignInProps = {
  userName: string;
  password: string;
};

const SignIn: React.FC<SignInProps> = ({ userName }, { password }) => {
  // const[value,setValue]=useState(0);
//   const [user, setUser] = useState<string>("");
//   const[newPassword,setNewPassword]=useState<string>("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUser(e.target.value);
    
//   };
//   const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    
//     setNewPassword(e.target.value);
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     console.log('event is', e);
//   };
  return (
    <React.Fragment>
      
      {/* <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name</label>
          <input value={user} onChange={handleChange} />
          
          <label htmlFor="password">Password</label>
          <input type="password" value={newPassword} onChange={handleChangePassword} />
          <button type="submit">Submit</button>
        </form>
        <h3>{user}</h3>
        <h3>{newPassword}</h3>
      </div> */}
       <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </React.Fragment>
  );
};
export default SignIn;
