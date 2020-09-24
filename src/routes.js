const express = require('express');

const routes = express.Router();

//Rota para produtos
const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);

//Rota para clientes
const ClientController = require('./controllers/ClientController');

routes.get("/clients", ClientController.index);


module.exports = routes;