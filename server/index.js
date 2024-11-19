const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectToMongoDb = require('./db/mongodb');

dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({ optionsSuccessStatus: 200, origin: '*' }));

const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log(`Server is listening on port: ${PORT}`);
    connectToMongoDb();
});