import mongoose from 'mongoose';
import config from '../config/server.config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase the timeout
    });
    console.log('Connected to MongoDB database successfully.');
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error.message);
  }
};

export default connectDB;
