const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// connect to MongoDB
connectDB()

// set app to express js
const app = express()

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json())
// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended: false}))

app.use('/api/abilities', require('./routing/abilityRouting'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))