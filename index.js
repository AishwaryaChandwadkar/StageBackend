const express = require('express')
const connectDB = require('./config/db_connect')
const app = express()
require('dotenv').config()


const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('Working')
})



app.listen(port, console.log('Server Started'))
connectDB()
