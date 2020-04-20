const express = require('express');
const routes = require('./routes');
const serve = express();
let cont = 0;

serve.use(express.json());
serve.use((req,res,next)=>{
    console.log(`Metodo: ${req.method} | URL : ${req.url}`);
    next();
    cont++;
    console.log(`${cont} execultado!`)
});

serve.use(routes);

serve.listen(3001);
