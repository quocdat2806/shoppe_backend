const express = require("express");
const rootRouter = express.Router();
const rootController = require("../controllers/rootController");

rootRouter.get("/", rootController.renderHomePage);

module.exports = rootRouter;
