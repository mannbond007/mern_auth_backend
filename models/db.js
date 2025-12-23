const mongoose = require('mongoose');
mongo_url = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}
   

module.exports = connectDB;