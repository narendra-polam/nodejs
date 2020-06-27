const path = require('path');
const dotenv = require('dotenv');

// Parse Environmental Vars
dotenv.config({
    path: path.resolve('./.env')
});