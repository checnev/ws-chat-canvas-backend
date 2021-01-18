const userService = require('./service');
const clients = require('../../clients');

class UserController {
  static signIn(request, connect) {
    const user = userService.create(request.body);

    clients.add(connect, user);
    connect.send(JSON.stringify(user));

    clients.notify(request.type, user);
  }

  static signOut(request, connect) {
    const user = clients[connect];
    clients.notify(request.type, user);

    clients.delete(connect);
  }
}

module.exports = UserController;
