import express from "express";
import { Server } from "socket.io";
import http from "http";
import { chatRoutes } from "./routes/routes.js";

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

io.on("connection", (socket) => {
  console.log("user has connected");

  socket.on("disconnect", () => {
    console.log("user has disconnected");
  });
});

// liseting to port
server.listen(4000, () => {
  console.log("server running on port:", 4000);
});
