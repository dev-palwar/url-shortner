const sendResponse = (res, status, msg, resFromDB)=>{
    res.json({
        status: status,
        Message: msg,
        resFromDB
    })
}


module.exports = sendResponse;