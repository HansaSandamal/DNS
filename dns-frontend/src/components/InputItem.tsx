import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

type InputItemProps={
    //setItem:(value:string)=>void;
    setItem:(value:{itemName:string,description:string})=>void;
    //setItem:{itemName:string,description:string}
    //setItem:{value:{itemName:string,description:string}};
}

const InputItem:React.FC<InputItemProps>=(props)=>{
    const{setItem}=props;
     //const[item,setNewItem]=useState("");
    const[item,setNewItem]=useState({itemName:"",description:""});
    const{itemName,description}=item;

    const onInputChange = (e: { target: { name: any; value: any; }; }) =>{
        setNewItem({
            ...item,[e.target.name]:[e.target.value]
        })
    };
    const handleClick=()=>{
       //setItem(item);
       //setNewItem("");
        //console.log(item);
        setItem({...item,itemName,description});
        //console.log(item);
    }

    return(
        <React.Fragment>
            <label htmlFor="itemName">Item Name</label>
            {/* <input type="text" onChange={(e)=>setNewItem(e.target.value)}/> */}
            <input type="text" name="itemName" onChange={onInputChange} />
            <input type="text" name="description" onChange={onInputChange} />
            <button onClick={handleClick}>Add Item</button>
        </React.Fragment>
    );
}
export default InputItem;