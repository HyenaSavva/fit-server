const ProductAccessor = require("../accessors/product.accessor");
const ProductInstance = ProductAccessor.createProductInstance();

class ProductController {
  async createProduct(req, res) {
    const { productName, carbohydrates, proteins, fats, calories } = req.body;
    const product = {
      customer_id: req.userId,
      name: productName,
      carbohydrates,
      proteins,
      fats,
      calories,
    };
    try {
      const result = await ProductInstance.create(product);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  async getProducts(req, res) {
    try {
      const products = await ProductInstance.findAll();
      if (products) return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json();
    }
  }

  async getProduct(req, res) {
    try {
      const Product = await ProductInstance.findOne({
        where: { id: req.params.id },
      });
      res.json(Product);
    } catch (error) {
      res.status(500).json();
    }
  }

  async updateProduct(req, res) {
    const customer = req.body;
    try {
      await ProductInstance.update(customer, {
        where: { id: req.params.id },
      });
      res.status(200).json();
    } catch (error) {
      res.json(error);
    }
  }

  async deleteProduct(req, res) {
    try {
      await ProductInstance.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json();
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new ProductController();
