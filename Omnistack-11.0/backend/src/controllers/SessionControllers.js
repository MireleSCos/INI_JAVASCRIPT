const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const { id } = request.body;
        try {
            
            const ong = await connection('ongs').where('id', id).select('name').first();
            return response.json(ong);
            
        } catch (error) {
            
            return response.status(400).json({erro:'No ONG found with this ID'});
        }

    }
}