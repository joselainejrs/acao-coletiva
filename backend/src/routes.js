const express = require('express');
const ConnectionsController = require('./controllers/ConnectionsController');
const DadosController = require('./controllers/DadosController');
const EnderecoController = require('./controllers/EnderecoController');

const routes = express.Router();

routes.get('/dados', DadosController.index);
routes.post('/dados', DadosController.create)
routes.get('/endereco', EnderecoController.index)
routes.post('/endereco', EnderecoController.create)
routes.get('/data', ConnectionsController.index)


module.exports = routes;