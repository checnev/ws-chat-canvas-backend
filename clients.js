class Clients {
  #clients = new Map();

  get size() {
    return this.#clietns.size;
  }

  add(connect, user) {
    this.#clients.set(connect, user);
  }

  delete(connect) {
    this.#clients.delete(connect);
  }

  send(message) {
    this.#clients.forEach((connect) => {
      connect.send(message);
    });
  }

  notify(type, body) {
    const message = JSON.stringify({ type, body });

    this.send(message);
  }

}

const clients = new Clients();
module.exports = clients;
