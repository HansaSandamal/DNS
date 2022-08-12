
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

type props={
    
    user:{userName:String,email:String,userImg:String}[]
   
}

const UserDetails:React.FC<props>=({user})=>{

console.log(user);

const userList=user.map(user=>(
    
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{user.userName}</Card.Title>
      <Card.Text>
        {user.email}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>))

return(
    <>
    <div>
      {userList}
    </div>


    </>
);
}
export default UserDetails;