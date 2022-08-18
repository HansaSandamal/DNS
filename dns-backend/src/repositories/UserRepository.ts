import  UserModel,{User}  from "../models/User";

// create new user
// @Param newUser

const createUser =async(newUser:User,uid:string) =>{
    return await UserModel.create(
        
        {
            firebaseID: uid,
            userName:newUser.userName,
            email:newUser.email,
            password:newUser.password,
            phoneNo:newUser.phoneNo,
            adress:newUser.adress
        }
    );
};

const getAllUsersForAdmin = async()=>{
    return UserModel.find();
}

export default{
    createUser,
    getAllUsersForAdmin
    
}