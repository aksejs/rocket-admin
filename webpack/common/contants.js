require("dotenv").config();

module.exports = {
    API_PORT: process.env.API_PORT || 8080,
    API_HOST: process.env.API_HOST || 'localhost',

    SOCKET_PORT: process.env.SOCKET_PORT || 8081,
    SOCKET_HOST: process.env.SOCKET_HOST || 'localhost',

    CLIENT_PORT: process.env.CLIENT_PORT || 4000,
    CLIENT_HOST: process.env.CLIENT_HOST || 'localhost'
};