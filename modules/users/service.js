const User = require('./User');

class UserService {
  static create(data) {
    const { name, color } = data;
    const user = new User(name, color);

    return user;
  }
}

module.exports = UserService;
