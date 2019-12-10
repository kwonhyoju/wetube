import express from "express";

export const userRouter = express.Router();

userRouter.get("/",(req,res)=>res.send("user Index"));
userRouter.get("/edit",(req,res)=>res.send("user Edit"));
userRouter.get("/password",(req,res)=>res.send("user Password"));