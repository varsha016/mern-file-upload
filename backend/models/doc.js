const mongoose = require("mongoose")
module.exports = mongoose.model("multiDocs", mongoose.Schema({
    userDob: String,
    userAdhar: String,
    userTc: String,
}, { timestamps: true }))