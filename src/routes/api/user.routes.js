const Router = require("express");
const router = new Router();

const UserController = require("../../controllers/user.controller");

router.get("/all", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
