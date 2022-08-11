import UserRepository from "../repositories/UserRepository";

async function createUser(req:any,res:any,next:any) {
    UserRepository.createUser(req.body)
    .then((data)=>res.json(data))
    .catch((e)=>next(e));
    
}

async function getAllUsers(req:any,res:any,next:any){
    UserRepository.getAllUsers()
    .then((data)=>res.json(data))
    .catch((e)=>next(e));
}
export default {
    createUser,
    getAllUsers,
}