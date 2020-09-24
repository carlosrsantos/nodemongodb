const express = require('express');

const routes = express.Router();

//Rota para produtos
const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);




//Rota para clientes
const ClientController = require('./controllers/ClientController');

routes.get("/clients", ClientController.index);


module.exports = routes;