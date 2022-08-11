import React, { useState } from "react";
import InputItem from "../components/InputItem";
import Item from "../components/Item";
import UserDetails from "./UserDetails";



const Admin : React.FC=()=>{
    //const [itemList, setItemList] = useState<string[]>([]);
    const [itemList, setItemList] = useState<string[]>([]);
    // const setItem = (value: string) => {
    //     setItemList([...itemList, value]);
    // }
    const setItem = (value:{itemName:string,description:string}) => {
        setItemList([...itemList,value.itemName,value.description]);
        
    }

    // const renderItem = () => {
    //     return itemList.map((item: string, index:number) => <Item itemName={item} indexNo={index} />
    //     )
    // }
    const renderItem = () => {
        
        return itemList.map((item: any, index:number) =>
         <Item itemDetails={item} indexNo={index} />
        )
    }
    return(
        <React.Fragment>
            <div className="check">
            <InputItem setItem={setItem}/>
            <div className="background-item">
            {
                renderItem()
            }
            </div>
           
            </div>
            
            <UserDetails name={['hansa','yasiru','sandaru']}/>
        </React.Fragment>
    );

}
export default Admin;