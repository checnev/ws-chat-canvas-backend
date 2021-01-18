const WebSocket = require('ws');
const initRoutes = require('./routes');

const wss = new WebSocket.Server({ port: process.env.PORT || 8080 });
const router = initRoutes(wss);

const DISCONNECTION_MESSAGE = { type: 'signout' };

wss.on('connection', (ws) => {
  console.log('connection');

  ws.on('message', (message) => {
    router.requestHandler(message, ws);
    console.log(`recieve message: ${message}`);
  });
});

wss.on('disconnection', (ws) => {
  router.requestHandler(JSON.stringify(DISCONNECTION_MESSAGE), ws);
  console.log(`disconnection`);
})
