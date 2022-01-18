const express = require('express'); //
const app = express();
const cors = require('cors');

app.use(cors({origin:"http://localhost:2345",credentials:true}))
const albumController = require('./controllers/album.controller');
app.use(express.json())

app.use("/album",albumController);

module.exports = app;