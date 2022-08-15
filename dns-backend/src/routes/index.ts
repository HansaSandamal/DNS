import { Router } from "express";
import itemRoutes from "./ItemRoutes";
import userRoute from "./UserRoute";

const router = Router();

router.use('/user',userRoute);
router.use('/item',itemRoutes);

export default router;