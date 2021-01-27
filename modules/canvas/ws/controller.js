const clients = require('../../../clients');

class CanvasController {
  static recieveMessage(request) {
    clients.notify('draw', request.data);
  }
}

module.exports = CanvasController;
