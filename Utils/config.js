import dotenv from "dotenv";
dotenv.config();

export let MONGODB_URI = process.env.MONGODB_URI;
export let PORT = process.env.PORT;
