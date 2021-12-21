const express = require("express");
const cors = require("cors");
const userRoutes = require("../routes/users");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    //cors
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use("/api/usuarios", require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`the application listening in the port ${this.port}`);
    });
  }
}

module.exports = Server;
