const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static( __dirname + '/public/dist/public' ));
// require the dist directory for angular app!!!!

require('./server/config/mongoose');

require('./server/config/routes')(app);


app.all('*', (req, res) => res.sendFile(
    path.join(__dirname, 'public/dist/public/index.html')
));


app.listen(8000, () => console.log('Listening on port 8000'));