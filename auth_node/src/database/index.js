const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MireleCosta:marismar1997@hope-yu34z.gcp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true,
});

module.exports = mongoose;