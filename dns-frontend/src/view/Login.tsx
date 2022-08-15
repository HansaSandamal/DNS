import axios from "axios";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, getUsers] = useState([]);
  const login = async () => {
    axios
      .get("http://localhost:5000/user")
      .then(function (response) {
        getUsers(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    if(data.password==='admin')
    console.log(data.email);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
        />
        {errors.email?.type === "required" && (
          <span> This field is required</span>
        )}
        {errors.email?.type === "pattern" && <span> Invalid email</span>}
        <input{...register("password",{required: true})}/>
        {errors.password?.type === "required" && (
          <span> This field is required</span>
        )}
        <button type="submit">submit</button>
      </form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="button" value="login" onClick={login} />
      </div>
      {users.map((user) => {
        return (
          <Card className="itemCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{user}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
export default Login;

