//Cuida das operações feitas em determinados models
//Listagem
//Remoçao

const mongoose = require('mongoose');
const card = mongoose.model('card');

module.exports = {
    async index(req,res){
        const {page = 1} = req.query;
        const cards = await card.paginate({},{page, limit: 5});
        return res.json(cards);
    },
    async show(req,res){
        const cardU = await card.findById(req.params.id);
        return res.json(cardU);
    },
    async store(req,res){
        const cardC = await card.create(req.body);
        return res.json(cardC);
    },
    async update(req,res){
        const cardUP = await card.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json(cardUP);
    },
    async destroy(req,res){
        await card.findByIdAndRemove(req.params.id);
        return res.send();
    }

};