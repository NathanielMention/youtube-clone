import mongoose from "mongoose";
import logger from "./logger";
const dotenv = require("dotenv");
dotenv.config();

const uri = `mongodb+srv://nathanielmention:${process.env.MONGODB_PASSWORD}@resumeparser.7g6dzmq.mongodb.net/?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    logger.info("Connect to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database. Goodbye");
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close();

  logger.info("Disconnect from database");

  return;
}