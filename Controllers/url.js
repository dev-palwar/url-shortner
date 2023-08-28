const shortid = require("shortid");
const URL = require("../Models/Url");
const sendResponse = require("../Utils/Features");

const addUrl = async (req, res) => {
  const { url } = req.body;
  const shortID = shortid();
  let resFromDB = await URL.findOne({ originalUrl: url });

  if (resFromDB) {
    return res.json({
      message: "Already added",
    });
  }
  try {
    let resFromDB = await URL.create({
      originalUrl: url,
      shortId: shortID,
    });
    sendResponse(res, "Success", "URL shortned", resFromDB);
  } catch (error) {
    sendResponse(res, "Failed", "Enter a valid url");
  }
};

const getUrl = async (req, res) => {
  const shortURl = req.params.id;
  try {
    let resFromDB = await URL.findOne({ shortId: shortURl });
    const dateArr = resFromDB.visitHistory;
    dateArr.push(Date.now());

    await URL.findOneAndUpdate({
        shortId: shortURl
    },{
      visitHistory: dateArr,
    });
    res.redirect(resFromDB.originalUrl);
  } catch (error) {
    sendResponse(res, "Failed", "Enter a valid url");
  }
};

const getAllURls = async (req, res) => {
  try {
    const resFromDB = await URL.find({});
    sendResponse(res, "Success", "Data retrieved", resFromDB);
  } catch (error) {
    sendResponse(res, "Failed", "Internal server error");
  }
};

module.exports = { getUrl, addUrl, getAllURls };
