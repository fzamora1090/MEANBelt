const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach(file => {
    if (file.includes('.js')) {
        require(path.join(modelsPath, file));
    }
});

mongoose.connect('mongodb://localhost/restaurantsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:  true,
});