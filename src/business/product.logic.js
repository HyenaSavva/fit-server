const ProductAccessor = require("../accessors/product.accessor");
const ProductInstance = ProductAccessor.createProductInstance();

class ProductBusiness {
  constructor() {
    this.productsLimit = 5;
    this.limitCustomer = this.limitCustomer.bind(this);
  }

  async exceedsProductLimit(userId) {
    const userProductsCount = await ProductInstance.findAll({
      where: { customer_id: userId },
    });
    return userProductsCount.length >= this.productsLimit;
  }

  async limitCustomer(req, res, next) {
    const userId = req.userId;
    const isExceedProductLimit = await this.exceedsProductLimit(userId);

    if (isExceedProductLimit) {
      return res.status(400).json({ error: "Exceeds Product Limit" });
    }

    next();
  }
}

module.exports = new ProductBusiness();
