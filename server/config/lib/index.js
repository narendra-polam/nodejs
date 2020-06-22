import path from 'path';
import dotenv from 'dotenv';

// Parse Environmental Vars
dotenv.config({
    path: path.resolve('./.env')
});