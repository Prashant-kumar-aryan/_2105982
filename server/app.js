import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
dotenv.config({
  path: "./data/config.env",
});

app.use(cors());
const app = express();
app.use(express.json());
app.use(userRouter);
export default app;
