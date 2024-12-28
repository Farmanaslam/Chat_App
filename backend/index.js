import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DB/dbConnect.js";
import authRouter from "./rout/auth.js";
import messageRout from "./rout/messageRout.js";
import userRouter from "./rout/userRout.js";
import cookieParser from "cookie-parser";
import { app, server } from "./Socket/socket.js";
import path from "path";

//const app = express();

const __dirname = path.resolve();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send(`Server at ${PORT}`);
});

app.use("/api/auth", authRouter);
app.use("/api/message", messageRout);
app.use("/api/user", userRouter);

//For deploying.....
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  dbConnect();
  console.log(`Working at ${PORT}`);
});