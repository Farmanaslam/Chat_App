import { Server } from "socket.io";

const userSocketmap = {};
let io = null; // ✅ make io global

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId && userId !== "undefined") {
      userSocketmap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketmap));

    socket.on("disconnect", () => {
      delete userSocketmap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketmap));
    });
  });
};

// ✅ export these
const getRecieverId = (recieverId) => {
  return userSocketmap[recieverId];
};

export { initSocket, io, getRecieverId };
