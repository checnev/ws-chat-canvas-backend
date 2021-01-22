const WebSocket = require('ws');
const initRoutes = require('./routes');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });
  const router = initRoutes(wss);

  const DISCONNECTION_MESSAGE = { type: 'signout' };

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      router.requestHandler(message, ws);
    });

    ws.on('close', () => {
      router.requestHandler(JSON.stringify(DISCONNECTION_MESSAGE), ws);
    });
  });
};
