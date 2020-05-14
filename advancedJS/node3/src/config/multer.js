const multer = require('multer');
const crypto = require('crypto');
const {extname} = require('path');
const {resolve} = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname,'..','..','tmp','uploads'), //Onde será armazenado, pode se usar serviço externos 
        filename: (req, file, cb) =>{
            crypto.randomBytes(16, (err,res)=>{
                if(err) return cb(err);

                return cb(null,res.toString('hex') + extname(file.originalname));
            });
        },
    }),
}; 
