
import React, { useEffect, useState } from "react";

type props={
    name:string[]
   
}

const UserDetails:React.FC<props>=({name})=>{
    useEffect(()=>{
        document.title=`You clicked ${timeClicked} times`;
    });
    const[timeClicked,setTimeClicked]=useState(0);
    //const[count,setCount]=useState(0);
    const[counter,setCounter]=useState({a:0,b:0});
    // const onShow=()=>{
    //     setCount(count+1);
    // }
    const showCount=(val: string)=>()=>{
        setTimeClicked(timeClicked+1);
        setCounter({...counter,[val]: counter['a']+1,});
    }

return(
    <>
    <label htmlFor="name">{name}{timeClicked}</label>
    {/* <button onClick={onShow}>Show</button> */}
    <button onClick={showCount("a")}>A count{counter.a}</button>
    <button onClick={showCount("b")}>B count{counter.b}</button>


    </>
);
}
export default UserDetails;