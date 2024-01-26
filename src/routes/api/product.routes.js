const Router = require("express");
const router = new Router();

const ProductController = require("../../controllers/product.controller");
const ProductBusiness = require("../../business/product.logic");

router.get("/all", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.post(
  "/",
  ProductBusiness.limitCustomer,
  ProductController.createProduct
);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
