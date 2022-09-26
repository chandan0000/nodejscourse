const express = require('express');
const app = express();
const connect = require('./databases/db');
const bodyParser = require('body-parser');
const bodyParserError = require('bodyparser-json-error');
const routes = require('./routes/router');
const ConnectDb = require('./databases/db');


const PORT = 3001;

app.use(bodyParser.json());



app.use(routes)
ConnectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });

});

