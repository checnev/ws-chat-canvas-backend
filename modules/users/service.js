const User = require('./User');

class UserService {
  static create(body) {
    const { username, color } = body;
    const user = new User(username, color);

    return user;
  }
}

module.exports = UserService;
