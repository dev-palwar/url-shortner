const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true,
    },
    visitHistory: []
})


const URL = mongoose.model("Url's", urlSchema);

module.exports = URL;