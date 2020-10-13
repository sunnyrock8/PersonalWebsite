const express = require('express'); // Used for basic API structuring, routing and other network features

const app = express();
app.use('/assets', express.static('./public'));
module.exports = app;