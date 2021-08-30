const path = require('path');
const express = require('express');
var getQuotes = require('./getQuotes');

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000;


// console.log(getQuotes.getRandom(1))

app.use(express.static(publicPath));

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});


app.get('/quotes/:num?', function (req, res) {
    res.send(getQuotes.getRandom(req.params.num || 1));
});



app.listen(port, () => {
    console.log('Server is up!');
}); 

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});