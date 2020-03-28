const express = require ('express');
const cors = require('cors');
const routes = require('./routes');
//Instância a aplicação 
const app = express();
//Definir quem acessa api
app.use(cors());
//definir que as requisições trabalham com json
app.use(express.json());

//importa as rotas 
app.use(routes);
//Define a porta para app
app.listen(3001);