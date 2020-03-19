const express = require ("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando a App
const app = express();
//permitindo o envio de urls com json
app.use(express.json());
//permitindo que outros sistemas acessem a api
app.use(cors());

//Iniciando o Banco de dados 
mongoose.connect("mongodb://localhost:27017/nodeapi", {useUnifiedTopology: true,useNewUrlParser: true});

//Dando o include e execultando
requireDir("./src/models"); 


//Rotas
app.use("/api",require("./src/routes")) //Recebe todas as requisições

app.listen(3000); // Definindo a porta de acesso, a porta que a plicação está ouvindo as requisições

