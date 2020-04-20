const express = require('express');
const routes = express.Router(); 
const middleware = require('./middlewares');

const projects = [];

function valiID(req,res,next){
    const projectIndex = projects.findIndex(p=> p.id === req.params.id );
    if (projectIndex == -1) {
        return res.status(400).json({ error: 'Projeto existe' });
    }
    req.projectIndex = projectIndex;
    return next();
}

routes.post('/projects',middleware.valiTask,(req,res)=>{
    projects.push(req.task);
    return res.json(projects);
});
routes.post('/projects/:id/tasks',valiID,(req,res)=>{
    projects[req.projectIndex].tasks.push(req.body.title);
    return res.json(projects);
});
routes.get('/projects',(req,res)=>{
    return res.json(projects);
});
routes.put('/projects/:id',valiID,(req,res)=>{
    console.log(req.projectIndex);
    projects[req.projectIndex].title = req.body.title;
    return res.json(projects);
});
routes.delete('/projects/:id',valiID,(req,res)=>{
    console.log(req.projectIndex);
    projects.splice(req.projectIndex,1);
    return res.json(projects);
});

module.exports = routes;