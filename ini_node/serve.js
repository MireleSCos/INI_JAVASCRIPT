const express = require ('express');
const mongoose = require('mongoose');

//Iniciando a Api
const api = express();

//Iniciando o Banco de dados 
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true,useNewUrlParser: true});


//Primeira rotas 
api.get('/',(req,res)=>{
    res.send('Hell Roxt');
}); //Definindo uma rota, ou seja, toda vez que o usuário acessar a rota definida, tal coisa vai ser a resposta
                //Primeiro parêmetro é o nome da rota e o segundo é 
                //uma função que tem dois parametros req - define a requisição, contem as informações de quem está fazendo a requisição 
                //e res que contem a resposta da requisição 


api.listen(3000); // Definindo a porta de acesso, a porta que a plicação está ouvindo as requisições

