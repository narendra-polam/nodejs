require('./lib/index');

const {
    APP_PORT,
    MONGO_URL
} = process.env;

module.exports = {
    APP_PORT: APP_PORT || 8080,
    MONGO_URL
};