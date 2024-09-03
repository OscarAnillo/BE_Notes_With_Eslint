import express from "express";
import mongoose from "mongoose";
import router from "./Controllers/notes.js";
import cors from "cors";
import dotenv from "dotenv";
import { MONGODB_URI } from "./Utils/config.js";
dotenv.config();

const app = express();

/* Database connection */
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Database has been conected!"))
  .catch((err) => console.log(err));

/* Middleware */
app.use(express.json());
app.use(cors());

/* Routes */
app.use("/api/notes", router);

export default app;
