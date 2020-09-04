const express = require('express');
const DataController = require('./controllers/DataController');
const ApoiadoresController = require('./controllers/ApoiadoresController');

const routes = express.Router();

routes.get('/data', DataController.index);
routes.post('/data', DataController.create)
routes.get('/apoiadores', ApoiadoresController.index)


module.exports = routes;