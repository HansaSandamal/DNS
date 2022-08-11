import axios from "axios";
import React, { useState } from "react";

const Signup:React.FC=()=>{

    const [userName, setUserName] = useState<string>("");
    const[password,setPassword]=useState<string>("");
   
    const register=async ()=>{
       
        axios.post("http://localhost:5000/user",{
            name:userName,
            password:password
        }).then((response)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            console.log(response);
            
        });
    };
    return(
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={(e)=>{setUserName(e.target.value)}} />
            <br />
            <label>Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br />
            <input type="button" value="register" onClick={register} />
        </div>
    )
}
export default Signup;