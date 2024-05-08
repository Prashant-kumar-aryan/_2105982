import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
dotenv.config({
  path: "./data/config.env",
});

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(cors());
export default app;
