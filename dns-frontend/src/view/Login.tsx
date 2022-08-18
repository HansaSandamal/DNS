import axios from "axios";
import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import {
  Card,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../config/firebaseConfig";

import "firebase/compat/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [users, getUsers] = useState([]);
  const[log,setLog]=useState(false);
  const[token,setToken]=useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    console.log(data);
    
    e.target.reset();
  };

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((res) => {
      
      console.log(res);
      setLog(true);
      res?.getIdToken().then((token)=>{setToken(token)});
      console.log(token);
    });
  }, []);

  const signOutUser=async ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      setLog(false);
  // Sign-out successful.
    }).catch((error) => {
  // An error happened.
  const errorMessage = error.message;
    });
  }
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user;
          //window.location.href="/";
          
        }
       
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <>
     
      <div className="backgroundLogin">
      {log?(<button onClick={signOutUser}>SignOut</button>):(
     <div>
        <div className="text p-3">
          <h1>Login</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className="formGroupSignUp">
            <FormLabel className="lblSignUp">Email:</FormLabel>
            <FormControl
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.email?.type === "required" && (
              <span> This field is required</span>
            )}
            {errors.email?.type === "pattern" && <span> Invalid email</span>}
          </FormGroup>
          <FormGroup className="formGroupSignUp">
            <FormLabel className="lblSignUp">Password:</FormLabel>
            <FormControl {...register("password", { required: true })} />
            {errors.password?.type === "required" && (
              <span> This field is required</span>
            )}
          </FormGroup>
          <FormGroup className="formGroupSignUp">
            <FormControl className="btn btn-warning my-4 " type="submit" />
            {errorMessage && <h4 className="error"> {errorMessage} </h4>}
          </FormGroup>
          <FormGroup className="formGroupSignUp">
            <GoogleButton onClick={loginWithGoogle} />
          </FormGroup>
      
        </Form>
        </div>
       )}

      </div>
    </>
  );
};
export default Login;
