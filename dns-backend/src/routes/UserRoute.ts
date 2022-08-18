import {Router} from "express";
import userController from "../controllers/userController";
import authorization,{ PERMISSION_TYPES } from "../middleware/authorization";

const userRoutes=Router();

userRoutes.post('/',authorization([PERMISSION_TYPES.ANY]), userController.createUser);
userRoutes.get('/',authorization([PERMISSION_TYPES.ANY]), userController.getAllUsersForAdmin);


export default userRoutes;