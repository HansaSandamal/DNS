import ItemModel,{ Item } from "../models/Item";

//create new item
//@Param newItem

const createItem=async(newItem:Item)=>{
    return await ItemModel.create(
        {
            itemName:newItem.itemName,
            description:newItem.description,
            catagory:newItem.catagory,
            image:newItem.image
        }
    );
}

const getAllItems = async()=>{
    return ItemModel.find();
};

export default{
    createItem,
    getAllItems,
}