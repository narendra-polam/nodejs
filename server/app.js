'use strict';
const http = require('http');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');
const Router = require('./routes');
const URL = config.MONGO_URL;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const con = mongoose.connection;

con.on('open', function () {
    console.log("MongoDB Connected")
});

con.on('error', function (err) {
    console.log("MongoDB connection Error", err)
});

const server = new http.Server(app);
const port = config.APP_PORT;

app.use('/api', Router);


server.listen(port, () => {
    console.log('Server started on port %d', port);
});

exports.server = server;


