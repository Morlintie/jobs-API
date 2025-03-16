const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to the database");
  } catch (error) {
    console.log("cannot connect to the database");
    console.log(error);
  }
};

module.exports = connectDB;
