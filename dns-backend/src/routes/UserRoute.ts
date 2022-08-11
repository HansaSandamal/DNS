import {Router} from "express";
import userController from "../controllers/userController";

const userRoutes=Router();

userRoutes.post('/',userController.createUser);
userRoutes.get('/',userController.getAllUsers);

export default userRoutes;