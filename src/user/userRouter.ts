import express from "express";
import {createUser} from "./usercontroller";
const userRouter = express.Router();


userRouter.post("/register",createUser)
export default userRouter;
