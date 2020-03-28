const express = require ('express');
const OngController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentControllers');

const routes = express.Router();

//Criando uma rota básica para o app

/* O método a seguir "gera" uma rota para app que pode ser chamada 
apenas pela / - diretório principal do app e essa rota chama uma 
função com dois parâmetros - req e res - o req armazena os dados
do cliente que acessou a rota e o responde armazena os dados da
 resposta da requisição. No retorno response armazenará um código 
 referente a um objeto em js */
routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes; // Expostar variável para o index acessar 
