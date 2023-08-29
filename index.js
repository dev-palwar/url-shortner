const express = require("express");
const connectDatbase = require("./Database/config");
const urlRouter = require("./Routes/url");
require("dotenv").config();

const app = express();
connectDatbase();

app.get('/', (req, res)=> res.send("Nice working"))
app.use(express.json());
app.use('/url', urlRouter);

app.listen(9000, ()=>{
    console.log("Server running smooth on port 9000");
})