const MONGODB_URI = process.env.MONGODB_URI;

import mongoose from 'mongoose';

export const connectDB = () => {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
  });
};

export const jsonify = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const dbMiddleware = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = connectDB();
    }
  } catch (e) {
    console.error(e);
  }

  return next();
};

export default dbMiddleware;
