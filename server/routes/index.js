'use strict';
const express = require('express');

import Sample from './sample';

export default () => {
    const router = express.Router();

    router.get('/api/connection', Sample.connection);

    return router;
}