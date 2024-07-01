const bannerService = require("../services/bannerServices");

class BannerController {
  getBanners() {}
  async addBanner(req, res) {
    const file = req.file;
    const response = await bannerService.createBanner(file);
    console.log("ressss", response);
  }
}

module.exports = new BannerController();
