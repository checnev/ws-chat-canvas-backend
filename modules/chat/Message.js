const { v4: uuid4 } = require('uuid');

class Message {
  constructor(text, author, date) {
    this.id = uuid4();

    this.text = text;
    this.author = author;
    this.date = date;
  }
}

module.exports = Message;
