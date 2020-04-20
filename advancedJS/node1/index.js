const express = require('express');
const middleware = require('./middlewares');

const serve = express();
serve.use(express.json());
serve.listen(3001);

// Query params = ?teste=1
// Route params = /users/1
// Request body = {name: "Mirele"}

const users = ['João', 'Ana' , 'Maria'];

serve.get('/users/:index',middleware.verif,(req,res)=>{
    let nome = req.query.nome;
    const index = req.params.index;

    if (nome == undefined){
        nome = "Word";
    }
    return res.json({mensagem :`Hello, ${nome}. Estamos buscando o user ${users[index]}`});
});

serve.get('/users',(req,res)=>{
    res.json(users);
});

serve.post('/users',(req,res)=>{
    const user = req.body.nome;
    users.push(user);
    res.json(users);
});

serve.put('/users/:index',middleware.verif,(req,res)=>{
    const user = req.body.nome;
    const {index} = req.params

    users[index] = user;
    res.json(users);
});

serve.delete('/users/:index',(req,res)=>{

    const {index} = req.params

    users.splice(index,1);

    res.json(users);
});