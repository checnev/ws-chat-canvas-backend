const clients = require('../../../clients');

class UserHttpController {
  static getAll(req, res) {
    const users = clients.getAll();
    
    res.json(users);
  }
}

module.exports = UserHttpController;
