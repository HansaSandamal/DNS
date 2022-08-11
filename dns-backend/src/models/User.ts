/* eslint-disable @typescript-eslint/no-empty-interface */
import { Document,Schema, model } from "mongoose";

export interface User extends Document{
    name:string,
    password:string
}

export interface UserModel extends User{

}
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

export default model<UserModel>('user',UserSchema);//user is db table name

