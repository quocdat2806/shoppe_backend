const jwt = require("jsonwebtoken");
const { uploadFilesToCloudinary } = require("../helper");
const { getResultProgressUpload } = require("../utils/index.js");
class BannerService {
  async createBanner(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let postItem = [];
        if (payload) {
          const result = await uploadFilesToCloudinary(payload);
          postItem = getResultProgressUpload(result);
        }
        resolve({ message: "Create banner success", status: true });
      } catch (error) {
        console.log(error);
        reject({
          message: "Have error when create post",
          status: false,
        });
      }
    });
  }
}
module.exports = new BannerService();
