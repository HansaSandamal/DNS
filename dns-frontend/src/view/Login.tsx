import axios from "axios";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const[users,getUsers]=useState([]);
  const login = async () => {
    axios.get("http://localhost:5000/user")
      .then(function (response) 
      {
        getUsers(response.data);
        console.log(users[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
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
    {users.map((user)=>{
        return(
            <Card className="itemCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{user}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" >Go somewhere</Button>
            </Card.Body>
          </Card>
        );
    })}
    </>
  );
};
export default Login;
