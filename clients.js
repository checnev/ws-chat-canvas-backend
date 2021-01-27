/* eslint-disable no-underscore-dangle */
class Clients {
  constructor() {
    this._clients = new Map();
  }

  get size() {
    return this._clients.size;
  }

  add(connect, user) {
    this._clients.set(connect, user);
  }

  delete(connect) {
    this._clients.delete(connect);
  }

  send(message) {
    this._clients.forEach((user, connect) => {
      connect.send(message);
    });
  }

  notify(type, data) {
    const message = JSON.stringify({ type, data });

    this.send(message);
  }

  getAll() {
    return [...this._clients.values()];
  }

  get(connect) {
    return this._clients.get(connect);
  }
}

const clients = new Clients();
module.exports = clients;
