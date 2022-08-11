import { type } from "os";
import React, { useState } from "react";

type ItemListProps={
    items:string[];
}

const ItemList: React.FC<ItemListProps> = ({items}) => {
const[shouldSort,setShouldSort]=useState(false);
const[filter,setFilter]=useState("");
  console.log(items);
  const onSortClicked=()=>{
    setShouldSort(true);
  };
  const onitemClicked=()=>{
    setFilter("item");
  };
  const onResetClicked=()=>{
    setShouldSort(false);
    setFilter("");
  };
  let itemsToDisplay=items;
  if(filter){
    itemsToDisplay=itemsToDisplay.filter(item=>item.startsWith(filter));
  }
  const itemListItems=itemsToDisplay.map(item=>(
    <li key={item}>{item}</li>
  ));
    return(
    <>
   
    <div>
        {itemListItems}
    </div>
    <button onClick={onSortClicked}>Sort</button>
    <button onClick={onitemClicked}>Item</button>
    <button onClick={onResetClicked}>Reset</button>
    </>
  );
};
export default ItemList;
