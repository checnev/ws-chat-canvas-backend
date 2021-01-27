const Router = require('../lib/ws/Router');
const UserController = require('../modules/users/ws/controller'); 
const ChatController = require('../modules/chat/ws/controller');
const CanvasController = require('../modules/canvas/ws/controller');

module.exports = (ws) => {
  const router = new Router(ws);

  router.add('signin', UserController.signIn);
  router.add('signout', UserController.signOut);

  router.add('chat', ChatController.recieveMessage);
  router.add('draw', CanvasController.recieveMessage);

  return router;
}
