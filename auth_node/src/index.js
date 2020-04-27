const express = require ('express');

const app = express();
app.use(express.json());

require('./controller/authController')(app);
require('./controller/projectController')(app);

app.listen(3000);