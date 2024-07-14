const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/user-7472";
const URI = process.env.MONGODB_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successfully to db");
  } catch (error) {
    console.log("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
