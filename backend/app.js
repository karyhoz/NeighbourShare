const express = require("express");
const app = express()
const port = process.env.PORT || 7000
const host = process.env.HOST || "127.0.0.1"
const uuid = require("uuid")
app.use(express.json());
let User = [];
let identity = uuid.v4();
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/register", (req, res) => {
    const newUser = req.body;
    newUser.identity = identity;
    User.push(newUser);
    res.status(201).send(newUser);
    console.log("New User registered:", newUser);
    console.log("Total Users:", User.length);
})
app.listen(port, ()=>{
    console.log(`Server is running on http://${host}:${port}`)
})