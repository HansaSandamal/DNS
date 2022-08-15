import { Router } from "express";
import itemController from "../controllers/itemController";

const itemRoutes=Router();

itemRoutes.post('/',itemController.createItem);
itemRoutes.get('/',itemController.getAllItems);

export default itemRoutes;