require('dotenv').config({path: './.env'})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// Connect to mongodb
require('./config/db-connection')
const Person = require('./models/Person')


const personsRouter = require('./routers/persons-router')

const app = express()

morgan.token('body', (req) => JSON.stringify(req.body))

app.use(cors())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// parse request of the content-type - application/json
app.use(express.json())

// parse request of the content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use('/api/persons', personsRouter)

app.get('/', (req, res) => {
	res.send('Welcome to the phonebook api :D!')
})

app.get('/info', (req, res) => {
	res.send(`
        <p>Phonebook has info for ${Person.find({})} people.</p>
        <p>${new Date()}</p>
        `)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})