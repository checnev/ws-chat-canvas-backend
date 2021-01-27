const userService = require('../service');
const clients = require('../../../clients');

class UserController {
  static signIn(request, connect) {
    const user = userService.create(request.data);

    clients.add(connect, user);
    connect.send(
      // eslint-disable-next-line comma-dangle
      JSON.stringify({ type: request.type, data: user })
    );

    clients.notify('join', user);
  }

  static signOut(request, connect) {
    const user = clients.get(connect);
    clients.delete(connect);

    clients.notify('leave', user);
  }

  static getUserList() {
    return clients.getAll();
  }
}

module.exports = UserController;
