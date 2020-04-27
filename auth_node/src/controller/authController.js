const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params,authConfig.secret, {
        expiresIn: 86400,
    });
}


router.post('/register', async (req,res)=>{
    try {
        const user = await User.create(req.body);
        return res.send({user});
    } catch (error) {
        return res.status(400).send({error});
    }
});
router.post('/authenticate', async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email}).select('+password');

        if (!user){
            return res.status(400).send({error:'Usuário não cadastrado'});
        }
        if(!await bcrypt.compare(password,user.password)){
            return res.status(400).send({error:'Senha inválida'});
        }
        user.password = undefined;

        const token = generateToken({id:user.id});
 
        return res.json({user,token});

    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = app => app.use('/auth', router);