const express = require("express");
const connectDatabase = require("./Database/config");
const urlRouter = require("./Routes/url");
require("dotenv").config();

const app = express();
connectDatabase();

// Add CORS configuration middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => res.send("Nice working"))
app.use(express.json());
app.use('/url', urlRouter);

app.listen(9000, () => {
  console.log("Server running smooth on port 9000");
});
