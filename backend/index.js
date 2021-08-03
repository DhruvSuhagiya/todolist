const express = require('express');
const mongooes = require('mongoose');
const cors = require('cors');
const routesUrls = require('./routes.js');


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);


mongooes.connect("mongodb://127.0.0.1:27017/todolists", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, () => {
    console.log("Data base connection")
})

app.listen(PORT, console.log(`server is running on ${PORT}`));