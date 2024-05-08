import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "practicedb",
    })
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch(() => {
      console.log("Connection Failed");
    });
};
