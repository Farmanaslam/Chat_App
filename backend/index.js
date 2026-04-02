import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import dbConnect from "./DB/dbConnect.js";
import authRouter from "./rout/auth.js";
import messageRouter from "./rout/messageRout.js";
import userRouter from "./rout/userRout.js";
import { initSocket } from "./Socket/socket.js";

dotenv.config();

const app = express(); // ✅ ONLY ONE APP
const server = http.createServer(app);

// ✅ init socket here
initSocket(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  dbConnect();
  console.log(`Working at ${PORT}`);
});
