const Router = require('./lib/Router');
const UserController = require('./modules/users/controller'); 

module.exports = (ws) => {
  const router = new Router(ws);

  router.add('signin', UserController.signIn);
  router.add('signout', UserController.signOut);

  return router;
}
