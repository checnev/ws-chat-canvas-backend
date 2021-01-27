const http = require('http');
const httpApp = require('./http/app');
const wsApp = require('./ws/app');

const server = http.createServer(httpApp);
wsApp(server);

server.listen(process.env.PORT || 8080, () => {
  console.log('server started');
});
