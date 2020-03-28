const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = { //Exporta um objeto formado por um conjunto de métodos 
    async index (request,response){
        try {
            const ongs = await connection('ongs').select('*');
            return response.json(ongs);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    },
    async create(request,response){
        const {name,email,whatsapp,city,uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        try {
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
            console.log(request.body);
            return response.json({id});
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    },

};