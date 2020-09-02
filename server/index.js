// require('dotenv').config();

const express = require('express');

const app = express();


app.use(express.json());
app.use(express.static(_dirname + '/../publicbuild'));

const messageBaseURL = "api/messages";
app.post(messageBaseURL, mc.create);
app.put(messageBaseURL, mc.read);
app.get(`${messageBaseURL}/:id`, mc.update);
app.delete(`${messageBaseURL}/:id`, mc.delete);
const SERVER_PORT = 3993;

app.listen(SERVER_PORT, () => console.log(`Ports Runnin on ${SERVER_PORT}, Aright Aright Aright`));

