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

const Product = mongoose.model("Product");

//Primeira rota simples
app.get("/", (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with this technology',
        url: 'http://github.com/facebook/react-native'
    });
    
    return res.send("Hello World!!!")
});



//última linha com a porta do servidor
app.listen(3001);