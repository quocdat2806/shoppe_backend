const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannerSchema = new Schema(
  {},

  {
    collection: "banners",
    timestamps: true,
  }
);

const Banner = mongoose.model("banner", bannerSchema);
module.exports = { Banner };
