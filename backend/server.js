import express from "express";
import { Server } from "socket.io";
import http from "http";
import { chatRoutes } from "./routes/routes.js";
import crypto from "crypto";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Routes

app.use("/api", chatRoutes);

let connected = {};
let allConnectedUsers = [];

io.on("connection", (socket) => {
  connected[socket.id] = socket;
  allConnectedUsers.push({ id: socket.id, socket });

  // socket.emit(
  //   "message",
  //   "Hey welcome! Wait for a second till we are connecting you."
  // );

  // logic to push users into the rooms list 2 user at a time
  roomDistributer(socket);

  // message from a particular user to their room
  socket.on("message", (data) => {
    io.to(data.room).emit("message", { id: socket.id, message: data.message });
  });

  // skip functionality remaining

  // socket.on("skip", (data) => {
  //   allConnectedUsers.push({ id: socket.id, socket });
  //   io.to(data.room).emit("info", {
  //     id: socket.id,
  //     message: "User has Disconnected!",
  //   });
  // });
  // if disconnecting
  socket.on("disconnect", (data) => {
    delete connected[socket.id];
    allConnectedUsers = allConnectedUsers.filter((ele) => ele.id !== socket.id);
    // roomDistributer(socket);
  });
  // console.log(allConnectedUsers);
});

function roomDistributer(socket) {
  if (allConnectedUsers.length > 1) {
    let user1 = allConnectedUsers.shift();
    let user2 = allConnectedUsers.shift();

    let randomRoomId = `random-room-${crypto.randomBytes(20).toString("hex")}`;

    user1.socket.join(randomRoomId);
    user2.socket.join(randomRoomId);

    user1.socket.emit("room_joined", {
      room: randomRoomId,
      partnerId: user2.id,
    });
    user2.socket.emit("room_joined", {
      room: randomRoomId,
      partnerId: user1.id,
    });
  } else {
    socket.emit("waiting-room", { message: "Wait for a user to join" });
  }
  console.log(allConnectedUsers.map((element) => element.id));
}
// liseting to port
server.listen(4000, () => {
  console.log("server running on port:", 4000);
});
