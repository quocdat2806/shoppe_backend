const authRouter = require("./authRouter");
const bannerRouter = require("./bannerRouter");
const userRouter = require("./userRouter");
const rootRouter = require("./rootRouter");

function router(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/user", userRouter);
  app.use("/api/banners", bannerRouter);
  app.use("/", rootRouter);
}

module.exports = router;
