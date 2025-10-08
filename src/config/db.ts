import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to the database");
    });
    mongoose.connection.on("error", (err) => {
      console.error("Error connecting to the database", err);
    });
    await mongoose.connect(config.databaseURL as string);
  } catch (err) {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  }
};
export default connectDB;
