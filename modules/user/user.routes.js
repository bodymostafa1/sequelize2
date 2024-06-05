import { Router } from "express";
import  { addUser,getSpecificUser,getUsers, login, logout } from "./user.controller.js";

const userRouter = Router()
userRouter.post("/users/register",addUser)
userRouter.post("/users/logout",logout)
userRouter.post("/users/login",login)
userRouter.get("/users",getUsers)
userRouter.get("/users/:id",getSpecificUser)
export default userRouter