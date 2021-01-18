class Router {
  #routes = {};
  #ws     = null;

  constructor(ws) {
    this.#ws = ws;
  }

  add(route, handler) {
    this.#routes[route] = handler;
  }

  delete(route) {
    delete this.#routes[route];
  }

  requestHandler(message, connect) {
    const request = this._parseRequest(message, connect);
    if (request) {
      this.#routes[request.type](request, connect);
    }
  }

  _parseRequest(message, connect) {
    try {
      const request = JSON.parse(message);

      if (!request.type) throw new Error('Invalid request');

      return request;
    } catch(error) {
      connect.send({ type: 'error' });
      connect.close();
    }

    return null;
  }
}

module.exports = Router;
