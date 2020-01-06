  
const express = require('express');
var cors = require('cors');
const getByProperty = require('./data');

const app = express();
app.use(cors())

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.sendFile('./index.html', { root: __dirname }));
app.get('/challenge', (req, res) => res.sendFile('./challenge.html', { root: __dirname }));
app.get('/static/*', (req, res) => res.sendFile(req.path, { root: __dirname }));
app.get('/api', (req, res) => {
    const params = Object.keys(req.query);
    if(!params.length) {
        return res.status(200).send(getByProperty())
    }
    return res.status(200).send(getByProperty(params[0], req.query[params[0]]));
});

app.listen(PORT);