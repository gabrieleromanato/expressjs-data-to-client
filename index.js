'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { getIP } = require('./utils');

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const ip = getIP(req);
    res.render('index', { ip } );
});

app.listen(port);