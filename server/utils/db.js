const mongoose = require("mongoose");

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
