const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
})

const userRouter = require('./routes/user');

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 