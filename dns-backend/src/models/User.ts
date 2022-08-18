/* eslint-disable @typescript-eslint/no-empty-interface */
import { Document,Schema, model } from "mongoose";

export interface User extends Document{
    
    userName: string,
    email:string,
    password: string,
    phoneNo:string,
    adress:string,
    firebaseID:string
}

export interface UserModel extends User{

}
const UserSchema=new Schema({
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

export default model<UserModel>('user',UserSchema);//user is db table name

