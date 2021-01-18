const { v4: uuid4 } = require('uuid');

class User {
  constructor(name, color) {
    this.id = uuid4();
    this.name = name;
    this.color = color;
  }
}

module.exports = User;
