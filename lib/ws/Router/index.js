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

    try {
      if (request && typeof this.#routes[request.type] === 'function') {
        this.#routes[request.type](request, connect);
      } else {
        connect.send(
          JSON.stringify({ type: 'error', message: 'Invalid request' })
        );
      }
    } catch(err) {
      console.log(err.message);
    }
  }

  _parseRequest(message, connect) {
    try {
      const request = JSON.parse(message);

      if (!request.type) throw new Error('Invalid request');

      return request;
    } catch(error) {
      connect.send(
        JSON.stringify({ type: 'error', data: 'Invalid request' })
      );
    }

    return null;
  }
}

module.exports = Router;
