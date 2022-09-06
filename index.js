const { Console } = require('console');
const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'),() => {
    console.log(`server running on port: ${app.get('port')}`)
});