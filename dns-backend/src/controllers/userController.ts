import { PERMISSION_TYPES } from "../middleware/authorization";
import UserRepository from "../repositories/UserRepository";
import authController from "./authController";

async function createUser(req:any,res:any,next:any) {
    authController.createUserAccount(req.body, PERMISSION_TYPES.USER, false).then((response) => {
    UserRepository.createUser(req.body,response.uid)
    .then((data)=>res.json(data))
    .catch((async (e) => {
        // Due to database obj creation fail we should delete firstly created firebase userAccount.
        // Otherwise, we can't use that email for second attempt.
        await authController.deleteUserAccount(response.uid);
        next(e);
      }));
}).catch((e) => next(e));
    
}


async function getAllUsersForAdmin(req: any, res: any, next: any) {
    UserRepository.getAllUsersForAdmin()
      .then((data) => res.json(data))
      .catch((e) => next(e));
  }


export default {
    createUser,
    getAllUsersForAdmin
    
}