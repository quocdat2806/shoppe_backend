const userService = require("../services/authService");

class AuthController {
  async createUser(req, res) {
    try {
      const response = await userService.createUser(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async loginUser(req, res) {
    console.log(req.body);
    try {
      const response = await userService.loginUser(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new AuthController();
