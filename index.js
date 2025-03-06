import express from "express";

const server = express();

server.get("/", (req, res) => {
  return res.json({
    title: "hello World!",
  });
});

server.listen(3636);
console.log("server started!");
