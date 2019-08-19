const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const startExpressServer = ({ port }) => {
    const expressServer = express();  
    expressServer.use(bodyParser.urlencoded({ extended: true }));
    expressServer.use(bodyParser.json());

    expressServer.use(routes);
    expressServer.use('/api', routes);
    
    expressServer.listen(port, () => `server listening on port ${port}`);
};

module.exports = startExpressServer;