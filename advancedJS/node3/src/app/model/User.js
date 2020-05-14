const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL, //Não existe no bd
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },{
                sequelize,
            }
        );
        this.addHook('beforeSave', async (user)=>{
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8); 
            }
        }); //Executa antes de salvar 

        return this;
    }
    
    static associate(models){
        this.belongsTo(models.File, {foreignKey: 'avatar_id', as: 'avatar'}); 
    }

    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
    }

} 

module.exports = User;