const mongoose = require("mongoose")
exports.connect = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URL)
        console.log("db Connected");
    } catch (error) {
        console.log("ERROR") + error
    }
}