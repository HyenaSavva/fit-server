const Router = require("express");
const router = new Router();
const UserRouter = require("./user.routes");
const AuthRouter = require("./auth.routes");
const { authMiddleware } = require("../../middleware/auth.middleware");

router.use("/auth", AuthRouter);
router.use("/user", authMiddleware, UserRouter);

module.exports = router;
