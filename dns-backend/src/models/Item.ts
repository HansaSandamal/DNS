/* eslint-disable @typescript-eslint/no-empty-interface */
import { Schema,Document, model } from "mongoose";

export interface Item extends Document{
    itemName:string,
    description:string,
    catagory:string,
    image:string
}


export interface ItemModel extends Item{

}

const ItemSchema=new Schema({
    itemName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});

export default model<ItemModel>('item',ItemSchema);//db name item