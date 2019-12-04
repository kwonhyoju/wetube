const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
};

function handletest(req, res) {
    console.log(req);
    res.send("hellow world!");
}

function handleGo(req, res) {
    res.send("this is handleGo");
}

app.get("/", handletest);

app.get("/test", handleGo);

app.listen(PORT, handleListening);
