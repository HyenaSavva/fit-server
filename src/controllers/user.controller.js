const UserAccessor = require("../accessors/user.accessor");
const UserInstance = UserAccessor.createUserInstance();

class UserController {
  async createUser(req, res) {
    const { name, address, phone_number, email } = req.body;
    const customer = { name, address, phone_number, email };
    try {
      const result = await UserInstance.create(customer);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await UserInstance.findAll();
      if (users) return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json();
    }
  }

  async getUser(req, res) {
    try {
      const user = await UserInstance.findOne({
        where: { id: req.params.id },
      });
      res.json(user);
    } catch (error) {
      res.status(500).json();
    }
  }

  async updateUser(req, res) {
    const customer = req.body;
    try {
      await UserInstance.update(customer, {
        where: { id: req.params.id },
      });
      res.status(200).json();
    } catch (error) {
      res.json(error);
    }
  }
  async deleteUser(req, res) {
    try {
      await UserInstance.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json();
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new UserController();
