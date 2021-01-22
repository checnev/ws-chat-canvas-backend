const Router = require('../lib/ws/Router');
const ChatController = require('../modules/chat/ws/controller');
const UserController = require('../modules/users/ws/controller'); 

module.exports = (ws) => {
  const router = new Router(ws);

  router.add('signin', UserController.signIn);
  router.add('signout', UserController.signOut);

  router.add('chat', ChatController.recieveMessage);

  return router;
}
