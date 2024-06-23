import express from "express";
const chatRoutes = express.Router();

chatRoutes.get("/", (req, res) => {
  res.send({ msg: "working" });
});

export { chatRoutes };
