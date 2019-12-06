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

app.get("/", handletest);

app.get("/test", handleGo);

app.listen(PORT, handleListening);
