import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => {
    // console.log(`Listening on: http://localhost:${PORT}`);
};

const handletest = (req, res) => {
    // console.log(req);
    res.send("hellow world!");
};

const handleGo = (req, res) => res.send("this is handleGo");

const between = (req,res,next) =>{
    console.log("this is middleware");
    next();
}

app.use(between);

app.get("/", handletest);

app.get("/test", handleGo);

app.listen(PORT, handleListening);
