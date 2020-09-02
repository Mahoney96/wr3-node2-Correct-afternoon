// require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const SERVER_PORT = 3993;

app.listen(SERVER_PORT, () => console.log(`Ports Runnin on ${SERVER_PORT}, Aright Aright Aright`));

