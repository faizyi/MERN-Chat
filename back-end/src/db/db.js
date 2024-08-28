import mongoose from 'mongoose';
import config from '../config/server.config.js';
const connectToDB = async () => {
  try {
    await mongoose
      .connect(config.dbURI, {
      })
      .then(() => {
        console.log("Connected to MongoDB database successfully.");
      })
      .catch((error) => {
        console.log("Error connecting to MongoDB: ", error.message);
      });
  } catch (error) {
    console.log("Database connection error: ", error.message);
  }
};

export default connectToDB;
