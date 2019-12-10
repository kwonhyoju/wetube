import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";
const app = express();

const handleMain = (req, res) => {
    // console.log(req);
    res.send("hellow world!");
};

const handleTest = (req, res) => res.send("this is handleGo");

const between = (req,res,next) =>{
    console.log("this is middleware");
    next();
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(between);

app.get("/", handleMain);

app.use("/test", userRouter);

export default app;
