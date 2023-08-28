const express = require("express");
const {addUrl, getUrl, getAllURls} = require("./Controllers/url");

const urlRouter = express.Router();

urlRouter.post('/add', addUrl);
urlRouter.get('/getAllURls', getAllURls);
urlRouter.get('/:id', getUrl);

module.exports = urlRouter; 