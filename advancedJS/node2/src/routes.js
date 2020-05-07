const { Router } = require('express');

const UserController = require('./app/controller/UserController');
const SessionController = require('./app/controller/SessionController');

const authMiddleware = require('./app/middleware/auth');
  
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions',SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

module.exports = routes;