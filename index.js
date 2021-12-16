const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const route = require('./route');

app.use(express.json());

// app.use('/', express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views')));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});