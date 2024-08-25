const express = require("express");
const app = express()
const port = 7000
const host = "localhost"
app.listen(port, host, ()=>{
    console.log(`Server is running on port ${port}`)
})