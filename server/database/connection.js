const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_Uri);
    console.log(`conected to MONGO ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
};

module.exports = connectDB;
