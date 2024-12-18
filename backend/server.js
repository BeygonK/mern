const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorHandler')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000;

// Connect to db

connectDB()

const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)

app.use('/api/goals', require('./routes/goalsRoutes'))

app.listen(PORT, () => console.log(`Server connected at port ${PORT}...`))