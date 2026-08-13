import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
      serverSelectionTimeoutMS: 3000,
    });

    console.log("db connected...");
    console.log(connection);

    console.log("user created...");
  } catch (error) {
    console.log("failed to connect to db...");
    console.log(error);
  }
};
