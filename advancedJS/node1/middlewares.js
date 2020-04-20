module.exports = {
    verif(req,res,next){
        if(req.params.index){
            if(req.params.index>3){
                return res.status(400).json({erros: "O numero de index é maior que o possível"});
            }
        }
        return next();
    }
};