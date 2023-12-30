const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

dotenv.config();
const PORT = process.env.PORT || 3000;
const api = process.env.API_URL;
const app = express();

const loginRouter = require('./routes/login');
const userRouter = require('./routes/users');

app.use(bodyParser.json());
app.use(`${api}/login`, loginRouter)
app.use(`${api}/users`, userRouter)


mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Database Connected..');
    })
    .catch((err) => {
        console.log(err);
    })
app.listen(PORT, () => {

    console.log(`Server is Running at PORT ${PORT}`);
})
