import express, { json } from "express";
import "./db/db_model";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
