class Clients {
  #clients = new Map();

  get size() {
    return this.#clients.size;
  }

  add(connect, user) {
    this.#clients.set(connect, user);
  }

  delete(connect) {
    this.#clients.delete(connect);
  }

  send(message) {
    this.#clients.forEach((user, connect) => {
      connect.send(message);
    });
  }

  notify(type, data) {
    const message = JSON.stringify({ type, data });

    this.send(message);
  }

  getAll() {
    return [...this.#clients.values()];
  }

  get(connect) {
    return this.#clients.get(connect);
  }

}

const clients = new Clients();
module.exports = clients;
