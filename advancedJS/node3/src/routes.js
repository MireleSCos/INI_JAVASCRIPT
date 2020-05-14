const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const UserController = require('./app/controller/UserController');
const SessionController = require('./app/controller/SessionController');
const FileController = require('./app/controller/FileController');
const ProviderController = require('./app/controller/ProviderController');

const authMiddleware = require('./app/middleware/auth');
  
const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions',SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/providers',ProviderController.index);
routes.post('/file', upload.single('file'),FileController.store);

module.exports = routes;