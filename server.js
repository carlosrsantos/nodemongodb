const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o APP
const app = express();

//conectando o DB
mongoose.connect(
    'mongodb://localhost:27017/api',
    { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir("./src/models");

//Rotas
app.use('/api', require('./src/routes'));

//última linha com a porta do servidor
app.listen(3001);