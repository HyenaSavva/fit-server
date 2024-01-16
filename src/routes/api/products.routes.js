const Router = require("express");
const router = new Router();

const ProductsController = require("../../controllers/products.controller");

router.get("/all", ProductsController.getUsers);
router.get("/:id", ProductsController.getUser);
router.post("/", ProductsController.createUser);
router.put("/:id", ProductsController.updateUser);
router.delete("/:id", ProductsController.deleteUser);

module.exports = router;
