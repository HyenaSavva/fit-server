const Router = require("express");
const router = new Router();

const AuthController = require("../../controllers/auth.controller");

router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);
router.post("/refresh", AuthController.refresh);

module.exports = router;
