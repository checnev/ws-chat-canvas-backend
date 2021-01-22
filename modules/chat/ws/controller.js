const Message = require('../Message');
const clients = require('../../../clients');

class ChatController {
  static recieveMessage(request) {
    const { text, author, date } = request.data;
    const message = new Message(text, author, date);

    clients.notify('chat', message);
  }
}

module.exports = ChatController;
