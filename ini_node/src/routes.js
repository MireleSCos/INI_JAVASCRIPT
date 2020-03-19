const express = require('express');
const routes = express.Router(); 
const cardController = require('./controllers/cardController');
//Primeira rotas 
routes.get('/card',cardController.index); //Definindo uma rota, ou seja, toda vez que o usuário acessar a rota definida, tal coisa vai ser a resposta
                //Primeiro parêmetro é o nome da rota e o segundo é 
                //uma função que tem dois parametros req - define a requisição, contem as informações de quem está fazendo a requisição 
                //e res que contem a resposta da requisição 

routes.post('/card',cardController.store);
routes.get('/card/:id',cardController.show);
routes.put('/card/:id',cardController.update);
routes.delete('/card/:id',cardController.destroy);

module.exports = routes;
