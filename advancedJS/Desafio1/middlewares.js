module.exports = {
    valiTask(req,res,next){
        if (!req.body.id) {
            return res.status(400).json({error:"Não há corpo"});
        }
        console.log(req.body);
        const task = req.body;
        req.task = task;
        
        return next();
    }
};