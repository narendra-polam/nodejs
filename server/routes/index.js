'use strict';
const express = require('express');

import {connection} from './sample';

export default () => {
    const router = express.Router();

    router.get('/api/connection', connection);

    return router;
}