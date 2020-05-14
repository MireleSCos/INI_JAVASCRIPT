const User = require('../model/User');
const File = require('../model/File');

class ProviderController{
    async index(req,res){
        const providers = await User.findAll({
            where: {provider:true},
            attributes: ['id', 'name', 'email', 'avatar_id'],
            include: [{
                model: File,
                as: 'avatar',
                attributes: ['name', 'path', 'url']
            }],
        });
        return res.json(providers)
    }
}

module.exports = new ProviderController();