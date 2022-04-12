const express = require('express');
const router = require('./routes');
const app = express()
const DBConnect = require('./config/db')
require('dotenv').config()
const cors = require('cors')

app.use(
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);
app.options(
    '*',
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);

app.use(express.json());
app.use(router)
DBConnect()

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello there' })
})

app.listen(PORT, () => {
    console.log('Server is running...')
})