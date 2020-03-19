//Definindo uma tabela
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const cardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true //Obrigatório
    },
    description:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});
cardSchema.plugin(mongoosePaginate);
mongoose.model("card",cardSchema); //Definindo oficialmente um model(tabela) no mongo com o nome card e propriedades cardSchema