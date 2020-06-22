'use strict';
import http from 'http';
import config from './config';
import Router from './routes';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const Routes = Router();
const server = new http.Server(app);
const port = config.APP_PORT;

app.use('/', Routes);


server.listen(port, () => {
    console.log('Server started on port %d', port);
});

exports.server = server;


