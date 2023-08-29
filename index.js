const express = require("express");
const connectDatbase = require("./Database/config");
const urlRouter = require("./Routes/url");
require("dotenv").config();

const app = express();
connectDatbase();

app.use(express.json());
app.use('/url', urlRouter);

app.listen(1000, ()=>{
    console.log("Server running smooth on port 1000");
})