import axios from "axios";
import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Signup: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const headers = {
    "Content-Type": "application/json",
    'Authorization': "Any",
  };

  const onSubmit = (data: any) => {
    if (data.password === data.confirfPassword) {
      const postData = {
        userName: data.userName,
        email: data.email,
        password: data.password,
        phoneNo: data.phoneNo,
        adress: data.adress,
      };
      axios
        .post("http://localhost:5000/user", postData,{headers: headers})
        .then((response) => {
          console.log(response);
          setErrorMessage("User Saved!");
        })
        .catch((exception) => {
          console.log(exception);
        });
    } else {
      setErrorMessage(" *Password miss match");
    }
  };

  return (
    <React.Fragment>
      <div className="backgroundSignUp">
        <div className="text p-3">
          <h1>Register</h1>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className="formGroupSignUp">
            <FormLabel className="lblSignUp">User Name:</FormLabel>
            <FormControl {...register("userName", { required: true })} />
            {errors.userName?.type === "required" && (
              <span> This field is required</span>
            )}
          </FormGroup>

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
            <FormLabel className="lblSignUp">Confirm Password:</FormLabel>
            <FormControl {...register("confirfPassword", { required: true })} />
            {errors.confirmPassword?.type === "required" && (
              <span> This field is required</span>
            )}
          </FormGroup>
          <FormGroup className="formGroupSignUp">
            <FormLabel className="lblSignUp">Phone No:</FormLabel>
            <FormControl
              {...register("phoneNo", { required: true, maxLength: 10 })}
            />
            {errors.phoneNo?.type === "required" && (
              <span> This field is required</span>
            )}
            {errors.phoneNo?.type === "maxLength" && (
              <span>Max length exceeded</span>
            )}
          </FormGroup>
          <FormGroup className="formGroupSignUp">
            <FormLabel className="lblSignUp">Adress:</FormLabel>
            <FormControl {...register("adress", { required: true })} />
            {errors.userName?.type === "required" && (
              <span> This field is required</span>
            )}
          </FormGroup>
          <FormGroup className="formGroupSignUp">
            <FormControl className="btn btn-warning my-4 " type="submit" />
            {errorMessage && <h4 className="error"> {errorMessage} </h4>}
          </FormGroup>
        </Form>
      </div>
    </React.Fragment>
  );
};
export default Signup;
