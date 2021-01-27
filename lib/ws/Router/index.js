/* eslint-disable no-underscore-dangle */
class Router {
  constructor(ws) {
    this._routes = {};
    this._ws = ws;
  }

  add(route, handler) {
    this._routes[route] = handler;
  }

  delete(route) {
    delete this._routes[route];
  }

  requestHandler(message, connect) {
    const request = this._parseRequest(message, connect);

    try {
      if (request && typeof this._routes[request.type] === 'function') {
        this._routes[request.type](request, connect);
      } else {
        const errorMessage = JSON.stringify({ type: 'error', data: 'Invalid request' });
        connect.send(errorMessage);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _parseRequest(message, connect) {
    try {
      const request = JSON.parse(message);

      if (!request.type) throw new Error('Invalid request');

      return request;
    } catch (error) {
      const errorMessage = JSON.stringify({ type: 'error', data: 'Invalid request' });
      connect.send(errorMessage);
    }

    return null;
  }
}

module.exports = Router;
