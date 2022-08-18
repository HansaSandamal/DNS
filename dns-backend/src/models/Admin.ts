/* eslint-disable @typescript-eslint/no-empty-interface */
import { Document,Schema, model } from "mongoose";

export interface Admin extends Document{
    
    userName: string,
    email:string,
    password: string,
    phoneNo:string,
    adress:string,
    firebaseID:string
}

export interface AdminModel extends Admin{

}
const AdminSchema=new Schema({
    firebaseID: {
        type: String,
        required: true,
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    }


});

export default model<AdminModel>('admin',AdminSchema);//admin is db table name

