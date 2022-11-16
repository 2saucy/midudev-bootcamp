require('dotenv').config({path: './.env'})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const personsRouter = require('./routers/persons-router.js')

const app = express()

// Connect to mongodb
require('./config/db-connection')

// morgan
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// cors
app.use(cors())

// parse request of the content-type - application/json
app.use(express.json())

// parse request of the content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use('/api/persons', personsRouter)

app.get('/', (req, res) => {
	res.send('Welcome to the phonebook api :D!')
})


const PORT = process.env.PORT

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})