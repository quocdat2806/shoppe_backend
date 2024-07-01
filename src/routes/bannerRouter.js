const express = require("express");
const bannerRouter = express.Router();
const bannerController = require("../controllers/bannerController");
const { configUploadImageMulter } = require("../config");

bannerRouter.get("/", bannerController.getBanners);
bannerRouter.post(
  "/create/banner",
  configUploadImageMulter.single("image"),
  bannerController.addBanner
);
module.exports = bannerRouter;
