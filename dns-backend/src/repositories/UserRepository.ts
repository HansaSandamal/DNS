import  UserModel,{User}  from "../models/User";

// create new user
// @Param newUser

const createUser =async(newUser:User) =>{
    return await UserModel.create(
        {
            name:newUser.name,
            password:newUser.password,
        }
    );
};

const getAllUsers = async()=>{
    return UserModel.find();
}

export default{
    createUser,
    getAllUsers
    
}