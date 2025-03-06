import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({
    title: "teste",
    message: "Hello World!",
  });
});

export default routes;
