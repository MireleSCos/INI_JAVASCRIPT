const express = require ('express');

//Instância a aplicação 
const app = express();

//Criando uma rota básica para o app

/* O método a seguir "gera" uma rota para app que pode ser chamada 
apenas pela / - diretório principal do app e essa rota chama uma 
função com dois parâmetros - req e res - o req armazena os dados
do cliente que acessou a rota e o responde armazena os dados da
 resposta da requisição. No retorno response armazenará um código 
 referente a um objeto em js */
app.get('/',(request,response)=>{

    return response.json({
        evento: 'Semana OmnisStack 11.0',
        aluno: 'Mirele'
    });

});

//Define a porta para app
app.listen(3001);